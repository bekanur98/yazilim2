let initialState = {
    posts: []
};


const postsReducer = (state = initialState, action) => {
    switch(action.type){ 
        case 'SET_POSTS':{
            return {  
                ...state,
                posts: action.posts 
            }
        } 
        default:
            return state;
    } 

} 

export default postsReducer;