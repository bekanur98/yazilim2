import {  authApi} from "../api/api"
import { stopSubmit } from 'redux-form'


// ACTION CREATORS

export const toggleModalWindowEditProfile = () => ({
    type: 'TOGGLE_MODAL_WINDOW_EDIT_PROFILE'
})

export const toggleModalWindowAuth = () => ({
    type: 'TOGGLE_WINDOW_MODAL_AUTH'
})
export const toggleModalLoginAuth = () => ({
    type: 'TOGGLE_MODAL_LOGIN_AUTH'
})

export const setAuthUserData = (payload, isAuth) => ({
    type: 'SET_AUTH_USER_DATA',
    payload: { ...payload, isAuth }
});

// REDUX-THUNKS

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
