import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter' 
import categoriesReducer from './categoriesReducer' 
import topPostsReducer from './topPostsReducer'


export default combineReducers({
  todos,
  visibilityFilter,
  categoriesBlock: categoriesReducer,
  topPostsBlock: topPostsReducer
})