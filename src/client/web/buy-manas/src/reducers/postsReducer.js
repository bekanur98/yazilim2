let initialState = {
    posts: [],
    postsOfFaculty: [],
    searchedPost: undefined,
    comments: [],
    forPostPage: null,
    ratings: [],
    currentImage: null,
    currentPage: 1
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTS': {
            return {
                ...state,
                posts: [...action.posts]
            }
        }
        case 'SET_ONE_POST': {
            return {
                ...state,
                forPostPage: { ...action.postData },
                comments: [...action.comments]
            }
        }
        case 'SET_LIKE': {
            return {
                ...state,
                ratings: [ ...action.ratings ]
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
                searchedPost: action.searchedPost
            }
        }
        // case 'NEW_POST': {
        //     return {
        //         ...state,
        //         posts: [...state.posts, {...action.newPostData, images: [{ ...action.newPostData.images} ]}]
        //     }
        // }
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
        case 'GET_FACULTIES_POSTS': {
            return {
                ...state,
                postsOfFaculty: [...state.postsOfFaculty, ...action.posts]
            }
        } 
        case 'SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        } 
        
        case 'CLEAR_FACULTY_POSTS': {
            return {
                ...state,
                postsOfFaculty: []
            }
        } 
        default:
            return state;
    }

}

export default postsReducer;
