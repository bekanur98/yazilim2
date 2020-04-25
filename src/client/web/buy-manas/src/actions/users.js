import { usersApi } from "../api/api"
import { stopSubmit } from 'redux-form'


// ACTION CREATORS

export const setUserDataSuccess = (userData) => ({
    type: 'SET_USER_DATA',
    userData
})


export const toggleIsFetching = (isFetching) => ({
    type: 'SET_IS_FETCHING',
    isFetching
})

export const editProfileSuccess = (profileData) => ({
    type: 'EDIT_PROFILE',
    profileData
})


export const newAvatar = (avatar) => ({
    type: 'NEW_AVATAR',
    avatar
})


export const toggleModalWindowEditProfile = () => ({
    type: 'TOGGLE_MODAL_WINDOW_EDIT_PROFILE'
})

// REDUX-THUNKS

export const setUserData = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersApi.getUser(userId)
        .then(response => {
            dispatch(setUserDataSuccess(response.data));
            dispatch(toggleIsFetching(false));
        });
}


export const editProfile = (userId, profileData) => (dispatch) => {
    if (profileData.avatar) {
        usersApi.newAvatar(userId, profileData.avatar)
            .then(r => {
                if (r.data.images[0].url) {
                    usersApi.editProfile(userId, profileData)
                        .then(r => {
                            if (r.status === 200) {
                                dispatch(editProfileSuccess(r.data));
                                dispatch(stopSubmit('editProfile', { _error: 'Изменения сохранены' }));
                            }
                        })
                }
            })
    } else {
        usersApi.editProfile(userId, profileData)
            .then(r => {
                if (r.status === 200) {
                    dispatch(editProfileSuccess(r.data));
                    dispatch(stopSubmit('editProfile', { _error: 'Изменения сохранены' }));
                }
            })
    }
}