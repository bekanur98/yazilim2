import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter' 
import categoriesReducer from './categoriesReducer' 
import postsReducer from './postsReducer'
import authReducer from './authReducer'
import profileReducer from './profileReducer'


export default combineReducers({
  todos,
  visibilityFilter,
  categoriesBlock: categoriesReducer,
  postsData: postsReducer,
  auth: authReducer,
  profilePage: profileReducer
})