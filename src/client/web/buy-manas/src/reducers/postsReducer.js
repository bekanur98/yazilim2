let initialState = {
    posts: [],
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
        default:
            return state;
    } 

} 

export default postsReducer;