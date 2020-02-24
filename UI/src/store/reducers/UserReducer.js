import {
    CREATE_USER,
    UPDATE_USER,
  } from '../actions/ActionTypes';
  
  export default (
    state = {
      user: {},
     },
    action
  ) => {
    switch (action.type) {
      case CREATE_USER:
        return {
          ...state,
          user: action.data,
        };
      case UPDATE_USER:
        return {
          ...state,
          user: action.data,
        };
      default:
        return state;
    }
  };
  