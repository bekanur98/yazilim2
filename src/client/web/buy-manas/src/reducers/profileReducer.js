const initialState = {
    id: null,
    username: null,
    name: null,
    phone: null,
    posters: [],
    faculty: {
        id: 7
    },
    isModalOpen: false,
    isFetching: true
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
                ...action.userData
            };
        }
        case 'TOGGLE_MODAL_WINDOW_EDIT_PROFILE': {
            return {
                ...state,
                isModalOpen: !state.isModalOpen
            }
        } 
        case 'SET_IS_FETCHING':{
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }

}
export default profileReducer;