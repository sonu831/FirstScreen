import * as API from '../../api/UserLocationAPI';
import {GET_ALL_CONTINENT,GET_ALL_COUNTRY,GET_ALL_CITY} from './ActionTypes'

export const getAllContinent = () => dispatch =>
API.getAllContinent()
  .then(res => dispatch({type:GET_ALL_CONTINENT,data:res.data}))
  .catch(error => {
    debugger;
    throw Error(error);
  });

export const getAllCountry = () => dispatch =>
API.getAllContinent()
  .then(res => dispatch({type:GET_ALL_COUNTRY,data:res.data}))
  .catch(error => {
    throw error;
  });

  export const getAllCities = () => dispatch =>
API.getAllContinent()
  .then(res => dispatch({type:GET_ALL_CITY,data:res.data}))
  .catch(error => {
    throw error;
  });