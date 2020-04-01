const initialState = { 
    name: null,
    id: null,
    username: null,
    posters: [],
    phone:null,
    faculty: null,
    isModalOpen: true
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){ 
        case 'SET_USER_DATA':{
            return {
                ...state, 
                ...action.userData
            };
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

} 
export default profileReducer;