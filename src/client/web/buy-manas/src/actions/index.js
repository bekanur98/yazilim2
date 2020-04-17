import { postersApi, facultiesApi, usersApi, authApi, searchPostsApi } from "../api/api"
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
    postData
})

export const newPostSuccess = (newPostData) => ({
    type: 'NEW_POST',
    newPostData
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

export const setUserData = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersApi.getUser(userId)
        .then(response => {
            dispatch(setUserDataSuccess(response.data));
            dispatch(toggleIsFetching(false));
        });
}



export const login = (formData) => (dispatch) => {
    authApi.checkUser(formData)
        .then(r => {
            if (r.data.length && formData.logPassword == r.data[0].password) {
                authApi.login(r.data[0].id)
                    .then(response => {
                        dispatch(setAuthUserData(response.data, true))
                        dispatch(toggleModalWindowAuth());
                    })
            } else {
                dispatch(stopSubmit('login', { _error: 'Неправильный логин или пароль' }));
            };
        })
}

export const logout = () => (dispatch) => {
    dispatch(setAuthUserData(undefined, false))
}

export const register = (formData) => (dispatch) => {
    authApi.checkUser(formData)
        .then(r => {
            if (r.data.length) {
                dispatch(stopSubmit('register', { _error: 'Неправильный логин или пароль' }));
            }
            else {
                authApi.register(formData)
                    .then(r => {
                        if (r.status === 201) {
                            dispatch(setAuthUserData(r.data, true))
                            dispatch(toggleModalWindowAuth());
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

export const newPost = (newPostData) => (dispatch) => {
    debugger
    postersApi.postPost(newPostData)
        .then(r => {
            if(r.status === 201){ 
                debugger
                dispatch(newPostSuccess(r.data))
            } else {
                alert(r)
            }
        })
}