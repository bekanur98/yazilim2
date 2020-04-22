import { postersApi, facultiesApi, departmentsApi } from "../api/api"


// ACTION CREATORS

export const setFacultiesSuccess = faculties => ({
    type: 'SET_FACULTIES',
    faculties
})

export const setDepartmentsSuccess = departments => ({
    type: 'SET_DEPARTMENTS',
    departments
})

export const getFacultiesPostsSuccess = (posts) => ({
    type: 'GET_FACULTIES_POSTS',
    posts
})


// REDUX-THUNKS

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