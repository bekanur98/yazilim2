// reducers/countryReducer
import {} from "../types";
import {CATEGORY_GET, CATEGORY_SET} from "../constants";

const initialCategoryState = {
    categoryList: [] as any,
};

const categoryReducer = (state= initialCategoryState, action: any) => {
    switch(action.type) {
        case CATEGORY_SET:
            return {
                ...state,
                categoryList: action.payload
            };
        default:
            return state;
    }
};

export default categoryReducer;



