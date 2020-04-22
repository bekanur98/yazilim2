import { postersApi, facultiesApi, usersApi, authApi, searchPostsApi, departmentsApi } from "../api/api"
import { stopSubmit } from 'redux-form'


// ACTIONS

let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}


export const setFacultiesSuccess = faculties => ({
    type: 'SET_FACULTIES',
    faculties
})

export const setDepartmentsSuccess = departments => ({
    type: 'SET_DEPARTMENTS',
    departments
})

export const setPostsByTitleSuccess = searchedPost => ({
    type: 'SET_POSTS_BY_TITLE',
    searchedPost
})

export const setPostsByTitleFailure = () => ({
    type: 'NOTHING_FOUNDED',
    searchedPost: undefined
})

export const setPostsSuccess = posts => ({
    type: 'SET_POSTS',
    posts
})

export const toggleModalWindowEditProfile = () => ({
    type: 'TOGGLE_MODAL_WINDOW_EDIT_PROFILE'
})

export const toggleModalWindowAuth = () => ({
    type: 'TOGGLE_WINDOW_MODAL_AUTH'
})
export const toggleModalLoginAuth = () => ({
    type: 'TOGGLE_MODAL_LOGIN_AUTH'
})

export const setUserDataSuccess = (userData) => ({
    type: 'SET_USER_DATA',
    userData
})

export const toggleIsFetching = (isFetching) => ({
    type: 'SET_IS_FETCHING',
    isFetching
})
export const setAuthUserData = (payload, isAuth) => ({
    type: 'SET_AUTH_USER_DATA',
    payload: { ...payload, isAuth }
});

export const setOnePost = (postData) => ({
    type: 'SET_ONE_POST',
    postData,
    comments: postData.comments
})

export const newPostSuccess = (newPostData) => ({
    type: 'NEW_POST',
    newPostData
})

export const newCurrentImage = (image) => ({
    type: 'NEW_CURRENT_IMAGE',
    image
})

export const newCommentSuccess = (commentData) => ({
    type: 'NEW_COMMENT',
    commentData
})

export const getCommentsSuccess = (comments) => ({
    type: 'GET_COMMENTS',
    comments
})

export const getFacultiesPostsSuccess = (posts) => ({
    type: 'GET_FACULTIES_POSTS',
    posts
})
// REDUX-THUNKS

export const setPostByTitle = (title) => (dispatch) => {
    if (title) {
        searchPostsApi.getPostsByTitle(title)
            .then(response => {
                if (response.data.length > 0) {
                    dispatch(setPostsByTitleSuccess(response.data))
                }
            })
    }
    else {
        dispatch(setPostsByTitleFailure())
    }
}

export const setPosts = () => (dispatch) => {
    postersApi.getPosts()
        .then(response => {
            dispatch(setPostsSuccess(response.data));
        });
}

export const setFaculties = () => (dispatch) => {
    facultiesApi.getfaculties()
        .then(response => {
            dispatch(setFacultiesSuccess(response.data));
        });
}

export const setDepartments = () => (dispatch) => {
    departmentsApi.getDepartments()
        .then(response => {
            dispatch(setDepartmentsSuccess(response.data));
        });
}

export const setUserData = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersApi.getUser(userId)
        .then(response => {
            dispatch(setUserDataSuccess(response.data));
            dispatch(toggleIsFetching(false));
        });
}


export const forLocalStorage = (loginData) => (dispatch) => {
    localStorage.setItem('myLoginData', JSON.stringify(loginData))
    let myData = localStorage.getItem('myLoginData')
    myData = JSON.parse(myData)
    dispatch(setAuthUserData(myData, true))
}

export const logWithLocalStorage = (r) => (dispatch) => {
    authApi.login(r.id)
        .then(response => {
            dispatch(forLocalStorage(response.data))
        })
}


export const login = (formData) => (dispatch) => {
    authApi.checkUser(formData)
        .then(r => {
            if (r.data.length && formData.logPassword == r.data[0].password) {
                authApi.login(r.data[0].id)
                    .then(response => {
                        dispatch(forLocalStorage(response.data))
                        dispatch(toggleModalWindowAuth());
                    })
            } else {
                dispatch(stopSubmit('login', { _error: 'Неправильный логин или пароль' }));
            };
        })
}

export const logout = () => (dispatch) => {
    dispatch(setAuthUserData(undefined, false));
    localStorage.removeItem('myLoginData');
}

export const register = (formData) => (dispatch) => {
    authApi.checkUser(formData)
        .then(r => {
            if (r.data.length) {
                dispatch(stopSubmit('register', { _error: 'Такое имя пользователя уже существует' }));
            }
            else {
                authApi.register(formData)
                    .then(r => {
                        if (r.status === 201) {
                            dispatch(setAuthUserData(r.data, true))
                            dispatch(toggleModalWindowAuth());
                            dispatch(forLocalStorage(r.data))
                        } else {
                            alert('Что-то пошло не так')
                        }
                    })
            }
        })
}

export const getOnePost = (postId) => (dispatch) => {
    postersApi.getOnePost(postId)
        .then(r => {
            dispatch(setOnePost(r.data))
        })
}

export const newPostImage = (newPostData) => (dispatch) => {
    if (newPostData.images) {
        postersApi.newPostImage(newPostData.images)
            .then(r => {
                if (r.data.url) {
                    postersApi.newPost(newPostData, r)
                        .then(r => {
                            if (r.status === 201) {
                                dispatch(newPostSuccess(r.data));
                                dispatch(stopSubmit('newPost', { _error: 'Объявление опубликовано' }));
                                dispatch(newCurrentImage(null));
                            }
                        })
                }
            })
    } else {
        postersApi.newPost(newPostData)
            .then(r => {
        if (r.status === 201) {
                    dispatch(newPostSuccess(r.data));
                    dispatch(stopSubmit('newPost', { _error: 'Объявление опубликовано' }));
                    dispatch(newCurrentImage(null));
    }
            })
    }
}

export const newComment = (commentData) => (dispatch) => {
    postersApi.newComment(commentData)
        .then(r => {
            dispatch(newCommentSuccess(r.data))
        })
}

export const getFacultiesPosts = (facultyId) => (dispatch) => {
    if (facultyId == "0") {
        postersApi.getFacultiesNullPosts()
            .then(r => {
                dispatch(getFacultiesPostsSuccess(r.data))
            })
    } else {
        postersApi.getFacultiesPosts(facultyId)
            .then(r => {
                dispatch(getFacultiesPostsSuccess(r.data))
            })
    }
}
