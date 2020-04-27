import { authApi } from "../api/api"
import { stopSubmit } from 'redux-form'
import Cookies from 'universal-cookie';


// ACTION CREATORS

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

export const usernamePass = (id, username, pass) => ({
    type: 'USERNAME_PASS',
    payload: { id, username, pass }
});

export const initializedSuccess = () => ({ type: 'INITIALIZED_SUCCESS' });

// REDUX-THUNKS 

let cookies = new Cookies();

export const forCookie = (id, username, password) => (dispatch) => {

    cookies.set('id', id, { path: '/' })
    cookies.set('username', username, { path: '/' })
    cookies.set('password', password, { path: '/' })
    let data0 = cookies.get('id')
    let data1 = cookies.get('username')
    let data2 = cookies.get('password')
    dispatch(usernamePass(data0, data1, data2))
}
export const logWithCookie = (id) => (dispatch) => {
    if (id) {
        authApi.login(id)
            .then(res => {
                dispatch(forCookie(res.data.id, res.data.username, res.data.password))
                dispatch(setAuthUserData(res.data, true))
            })
    }
}


export const login = (username, password) => (dispatch) => {
    authApi.checkUser(username)
        .then(r => {
            if (r.data.length && password == r.data[0].password) {
                authApi.login(r.data[0].id)
                    .then(response => {
                        dispatch(setAuthUserData(response.data, true))
                        dispatch(forCookie(response.data.id, response.data.username, response.data.password))
                        dispatch(toggleModalWindowAuth());
                    })
            } else {
                dispatch(stopSubmit('login', { _error: 'Неправильный логин или пароль' }));
            };
        })
}

export const logout = () => (dispatch) => {
    dispatch(setAuthUserData(undefined, false));
    cookies.remove('id');
    cookies.remove('username');
    cookies.remove('password');
}

export const register = (formData) => (dispatch) => {
    authApi.checkUser(formData)
        .then(r => {
            if (r.status === 400) {
                dispatch(stopSubmit('register', { _error: 'Такое имя пользователя уже существует' }));
            }
            else {
                authApi.register(formData)
                    .then(r => {
                        if (r.status === 201) {
                            dispatch(setAuthUserData(r.data, true))
                            dispatch(toggleModalWindowAuth());
                            dispatch(forCookie(r.data.id, r.data.username, r.data.password))
                        } else {
                            alert('Что-то пошло не так')
                        }
                    })
            }
        })
}


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(logWithCookie(cookies.get('id')))
    promise.then(() => {
        dispatch(initializedSuccess())
    });

} 