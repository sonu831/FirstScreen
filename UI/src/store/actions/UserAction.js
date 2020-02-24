import * as API from '../../api/UserLocationAPI';
import {CREATE_USER,UPDATE_USER} from './ActionTypes'

export const createUser = () => dispatch =>
API.getAllContinent()
  .then(res => dispatch({type: CREATE_USER,data:res.data}))
  .catch(error => {
    throw error;
  });

  export const updateUser = () => dispatch =>
API.getAllContinent()
  .then(res => dispatch({type:UPDATE_USER,data:res.data}))
  .catch(error => {
    throw error;
  });
