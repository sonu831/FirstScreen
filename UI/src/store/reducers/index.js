import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import LocationReducer from './LocationReducer';

const appReducer = combineReducers({
  UserReducer,
  LocationReducer
});

export default appReducer;
