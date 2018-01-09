import {
  SET_USER,
  FAIL_USER
} from '../actions/user.js';
import { createSelector } from '../../node_modules/reselect/src/index.js';
import { splitPathnameSelector, urlSearchParamsSelector } from './location.js';

const user = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        failure: false,
        isFetching: false,
        ...action.data
      };
    case FAIL_USER:
      return {
        ...state,
        failure: true,
        isFetching: false
      };
    default:
      return state;
  }
}

export default user;

const usersSelector = state => state.users;

export const currentUserSelector = createSelector(
  usersSelector,
  splitPathnameSelector,
  urlSearchParamsSelector,
  (users, splitPath, params) => {
    switch (splitPath[0]) {
      case 'user':
        const id = params.get('id');
        return users[id] || { id };
      default:
        return null;
    }
  }
);
