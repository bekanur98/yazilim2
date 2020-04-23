import { postersApi } from "../api/api"
import { stopSubmit } from 'redux-form'
import { toggleIsFetching } from "./users"


// ACTION CREATORS

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



// REDUX-THUNKS

export const setPostByTitle = (title) => (dispatch) => {
    if (title) {
        postersApi.getPostsByTitle(title)
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
    dispatch(toggleIsFetching(true));
    postersApi.getPosts()
        .then(response => {
            dispatch(setPostsSuccess(response.data));
            dispatch(toggleIsFetching(false));
        });
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
