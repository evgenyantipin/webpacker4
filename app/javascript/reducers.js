import { combineReducers } from 'redux'
import posts from './components/posts/reducer'

export const typesApp = { HYDRATE: 'HYDRATE' }

export default combineReducers({ posts })
