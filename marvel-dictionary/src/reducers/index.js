import  { combineReducers } from 'redux';
import reducersGetMarvelChars from './getMarvelChars';

const rootReducer = combineReducers({ reducersGetMarvelChars });

export default rootReducer;