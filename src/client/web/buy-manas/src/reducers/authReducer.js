let initialState = {
    id: null,
    email: null,
    username: null
};

const authReducer = (state = initialState, action) => {

    switch(action.type){ 
        case 'SET_AUTH_USER_DATA':{
            return {
                ...state,
                ...action.data
            } 
        }
        default:
            return state;
    } 

};


export default authReducer;