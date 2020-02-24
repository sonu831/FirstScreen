import * as API from '../../api/UserLocationAPI';
import {GET_ALL_CONTINENT,GET_ALL_COUNTRY,GET_ALL_CITY} from './ActionTypes'

export const getAllContinent = () => dispatch =>
API.getAllContinent()
  .then(res => dispatch({type:GET_ALL_CONTINENT,data:res.data}))
  .catch(error => {
    throw Error(error);
  });

export const getAllCountry = (continentId) => dispatch =>
API.getAllCountries(continentId)
  .then(res => dispatch({type:GET_ALL_COUNTRY,data:res.data}))
  .catch(error => {
    throw error;
  });

  export const getAllCities = (continentId) => dispatch =>
API.getAllCities(continentId)
  .then(res => dispatch({type:GET_ALL_CITY,data:res.data}))
  .catch(error => {
    throw error;
  });