import {
    GET_ALL_CONTINENT,
    GET_ALL_COUNTRY,
    GET_ALL_CITY,
  } from '../actions/ActionTypes';
  
  export default (
    state = {
      continentsList: [],
      countryList:[],
      cityList: [],
     },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_CONTINENT:
        return {
          ...state,
          continentsList:action.data,
          loading: false,
        };
      case GET_ALL_COUNTRY:
        return {
          ...state,
          countryList: action.data,
          loading: false,
        };
      case GET_ALL_CITY:
        return {
          ...state,
          cityList: action.data,
          loading: false,
        };
      default:
        return state;
    }
  };
  