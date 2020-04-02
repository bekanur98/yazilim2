let initialState = {
    id: null,
    email: null,
    username: null,
    isModalOpen: false
};

const authReducer = (state = initialState, action) => {

    switch(action.type){ 
        case 'SET_AUTH_USER_DATA':{
            return {
                ...state,
                ...action.data
            } 
        }
        case 'TOGGLE_MODAL':{
            return{
                ...state,
                isModalOpen: !state.isModalOpen
            }
        }
        default:
            return state;
    } 

};


export default authReducer;