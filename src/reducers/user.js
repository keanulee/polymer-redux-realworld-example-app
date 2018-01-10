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
      return action.data;
    default:
      return state;
  }
}

export default user;

const userSelector = state => state.user;

export const tokenSelector = createSelector(
  userSelector,
  (user) => user ? user.token : null
);
