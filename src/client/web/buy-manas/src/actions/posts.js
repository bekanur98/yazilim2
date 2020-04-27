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

export const setLike = (ratingData) => ({
    type: 'SET_LIKE',
    ratings: ratingData,
})

export const newPostSuccess = (newPostData) => ({
    type: 'NEW_POST',
    newPostData
})

export const newCurrentImage = (image) => ({
    type: 'NEW_CURRENT_IMAGE',
    image
})

export const setCurrentPage = (page) => ({
    type: 'SET_CURRENT_PAGE',
    currentPage: page
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

export const setPosts = (page) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    postersApi.getPosts(page)
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

export const getRating = (postId) => (dispatch) => {
    postersApi.getRating(postId)
        .then(r => {
            dispatch(setLike(r.data))
        })
}

export const likeThePost = (userReq, postId, obj) => (dispatch) => {
    postersApi.likeThePost(userReq, postId, obj)
        .then(r2 => {
            postersApi.getRating(postId)
                .then(r3 => { dispatch(setLike(r3.data)) })
        })
}

export const newPostImage = (newPostData) => (dispatch) => {
    dispatch(toggleIsFetching(true))

    if (newPostData.images) {
        postersApi.newPostImage(newPostData.images)
            .then(r => {
                if (r.data.url) {
                    postersApi.newPost(newPostData, r)
                        .then(r => {
                            if (r.status === 201) {
                                dispatch(newPostSuccess(r.data));
                                dispatch(stopSubmit('newPost', { _error: 'Объявление опубликовано' }));
                                dispatch(toggleIsFetching(false))
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
                    dispatch(toggleIsFetching(false))
                }
            })
    }
}
