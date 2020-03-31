const initialState = { 
    name: null,
    id: null,
    username: null,
    posters: [],
    phone:null,
    faculty: null
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){ 
        case 'SET_USER_DATA':{
            return {
                ...state, 
                ...action.data
            };
        } 
        default:
            return state;
    } 

} 

export default profileReducer;