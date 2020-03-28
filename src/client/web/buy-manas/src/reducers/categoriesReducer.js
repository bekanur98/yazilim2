const initialState = {
    faculties: []
};

const categoriesReducer = (state = initialState, action) => {
    switch(action.type){ 
        case 'SET_FACULTIES':{
            return {
                ...state, 
                faculties: action.faculties 
            };
        } 
        default:
            return state;
    } 

} 

export default categoriesReducer;