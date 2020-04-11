import { postersApi, facultiesApi, usersApi, authApi} from "../api/api"


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

export const setAuthUserData = (username, login, isAuth) => ({
    type: 'SET_AUTH_USER_DATA',
    payload: { username, login, isAuth }
});

// REDUX-THUNKS

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

export const setUserData = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersApi.getUser(5)
        .then(response => {
            dispatch(setUserDataSuccess(response.data));
            dispatch(toggleIsFetching(false));
        });
}

 


export const authUserDataThunk = () => (dispatch) => {
    authApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { username, password } = response.data
                dispatch(setAuthUserData(username, password, true));
            }
        });
}
export const login = (userId, username, password, isAuth) => (dispatch) => {
    authApi.login(userId, username, password, true)
        .then(response => {
            dispatch(authUserDataThunk())
        });
}
export const logout = () => (dispatch) => {
    authApi.logout()
        .then(response => {
            dispatch(setAuthUserData(null, null, null, false))
        });
}