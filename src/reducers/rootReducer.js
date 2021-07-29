import { combineReducers } from 'redux';
import UserReducer from './user';

export default combineReducers({
  userReducer: UserReducer,
});
