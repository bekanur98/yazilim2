import actions from "redux-form/lib/actions";

let initialState = {
    posts: [],
    searchedPost: [],
    forPostPage: null
};


const postsReducer = (state = initialState, action) => {
    switch(action.type){ 
        case 'SET_POSTS':{
            return {  
                ...state,
                posts: action.posts 
            }
        } 
        case 'SET_ONE_POST':{
            return {  
                ...state,
                forPostPage: {...action.postData} 
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
                state,
                // searchedPost: actions.searchedPost
            }
        }
        default:
            return state;
    } 

} 

export default postsReducer;