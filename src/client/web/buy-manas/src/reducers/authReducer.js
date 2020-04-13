let initialState = {
    id: null, 
    username: null,
    phone: null,
    name: null,
    isModalOpen: false,
    wannaLogin: true 
};
const authReducer = (state = initialState, action) => {

    switch(action.type){ 
        case 'SET_AUTH_USER_DATA':{
        return {
                ...state,
                ...action.payload
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
                wannaLogin: !state.wannaLogin
            }
        }
        default:
            return state;
    } 

}; 

export default authReducer;