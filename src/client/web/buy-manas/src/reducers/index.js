import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter' 
import categoriesReducer from './categoriesReducer' 
import topPostsReducer from './topPostsReducer'
import authReducer from './authReducer'
import profileReducer from './profileReducer'


export default combineReducers({
  todos,
  visibilityFilter,
  categoriesBlock: categoriesReducer,
  topPostsBlock: topPostsReducer,
  auth: authReducer,
  profilePage: profileReducer
})