import * as API from '../../api/UserLocationAPI';
import {GET_ALL_CONTINENT,GET_ALL_COUNTRY,GET_ALL_CITY} from './ActionTypes'

const allContinentSuccess = (filter, data) => ({
    type: GET_ALL_CONTINENT,
    data
  });


export const getAllContinent = () => dispatch =>
API.getAllContinent()
  .then(res => dispatch(allContinentSuccess(res.data)))
  .catch(error => {
    throw error;
  });

  export const getAllContinent = () => dispatch =>
API.getAllContinent()
  .then(res => dispatch(allContinentSuccess(res.data)))
  .catch(error => {
    throw error;
  });

  export const getAllContinent = () => dispatch =>
API.getAllContinent()
  .then(res => dispatch(allContinentSuccess(res.data)))
  .catch(error => {
    throw error;
  });