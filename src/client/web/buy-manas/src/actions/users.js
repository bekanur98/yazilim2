import { usersApi } from "../api/api"


// ACTION CREATORS

export const setUserDataSuccess = (userData) => ({
    type: 'SET_USER_DATA',
    userData
})


export const toggleIsFetching = (isFetching) => ({
    type: 'SET_IS_FETCHING',
    isFetching
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

