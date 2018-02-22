import {
  SET_USER,
  REMOVE_USER,
  FAIL_USER
} from '../actions/user.js';
import { UPDATE_LOCATION } from '../actions/location.js';
import { createSelector } from '../../node_modules/reselect/src/index.js';

const user = (state = {
  token: localStorage.getItem('jwt')
}, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
        errors: null
      };
    case REMOVE_USER:
      return {};
    case FAIL_USER:
      return {
        ...state,
        errors: action.payload
      };
    case UPDATE_LOCATION:
      return {
        ...state,
        errors: null
      };
    default:
      return state;
  }
}

export default user;

export const userSelector = state => state.user;

export const tokenSelector = createSelector(
  userSelector,
  (user) => user ? user.token : null
);
