import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter' 
import categoriesReducer from './categoriesReducer' 


export default combineReducers({
  todos,
  visibilityFilter,
  categoriesReducer
})