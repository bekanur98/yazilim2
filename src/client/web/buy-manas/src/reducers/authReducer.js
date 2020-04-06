let initialState = {
    id: null,
    email: null,
    username: null,
    isModalOpen: false,
    isLogin: true
};

const authReducer = (state = initialState, action) => {

    switch(action.type){ 
        case 'SET_AUTH_USER_DATA':{
            return {
                ...state,
                ...action.data
            } 
        }
        case 'TOGGLE_WINDOW_MODAL_AUTH':{
            return{
                ...state,
                isModalOpen: !state.isModalOpen
            }
        }
        case 'TOGGLE_MODAL_LOGIN_AUTH':{
            return{
                ...state,
                isLogin: !state.isLogin
            }
        }
        default:
            return state;
    } 

};


export default authReducer;