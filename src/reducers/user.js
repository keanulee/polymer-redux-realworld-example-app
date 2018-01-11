import {
  SET_USER
} from '../actions/user.js';
import { createSelector } from '../../node_modules/reselect/src/index.js';
// import { splitPathnameSelector, urlSearchParamsSelector } from './location.js';

const user = (state = {
  token: localStorage.getItem('jwt')
}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
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
