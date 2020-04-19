import actions from "redux-form/lib/actions";

let initialState = {
    posts: [],
    searchedPost: [],
    forPostPage: null,
    currentImage: null,
    comments: []
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTS': {
            return {
                ...state,
                posts: action.posts
            }
        }
        case 'SET_ONE_POST': {
            return {
                ...state,
                forPostPage: { ...action.postData },
                comments: [...action.comments]
            }
        }
        case 'SET_POSTS_BY_TITLE': {
            return {
                ...state,
                searchedPost: action.searchedPost
            }
        }
        case 'NOTHING_FOUNDED': {
            return {
                ...state,
                searchedPost: actions.searchedPost
            }
        }
        case 'NEW_POST': {
            return {
                ...state,
                posts: [...state.posts, action.newPostData]
            }
        }
        case 'NEW_CURRENT_IMAGE': {
            return {
                ...state,
                currentImage: action.image
            }
        } 
        case 'NEW_COMMENT': {
            return {
                ...state,
                comments: [...state.comments,  action.commentData]
            }
        }
        default:
            return state;
    }

}

export default postsReducer;