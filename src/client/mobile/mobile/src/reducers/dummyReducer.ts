// reducers/dummy

import { DUMMY_COUNTER_CHANGE, PAGE_COUNTER_CHANGE } from '../constants';

const initialState = {
  count: 0,
  pageCounter: 0
};

const countReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case DUMMY_COUNTER_CHANGE:
    return {
      ...state,
      count: action.payload || 0
    };
    case PAGE_COUNTER_CHANGE:
    return {
        ...state,
        pageCounter: action.payload
    };
    default:
      return state;
  }
}

export default countReducer;



