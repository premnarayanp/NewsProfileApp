import authReducer from './authReducer';
import newsReducer from './newsReducer'
import { combineReducers } from 'redux';

//using predefined redux combined reducers
export default combineReducers({
  authReducer,
  newsReducer,
});



