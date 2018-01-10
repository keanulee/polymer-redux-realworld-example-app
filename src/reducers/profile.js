import {
  // REQUEST_PROFILE,
  SET_PROFILE,
  // FAIL_PROFILE
} from '../actions/profile.js';
import { createSelector } from '../../node_modules/reselect/src/index.js';
import { splitPathnameSelector } from './location.js';
// import { itemsSelector } from './items.js';
// import { favoritesSelector } from './favorites.js';

const profile = (state = {}, action) => {
  switch (action.type) {
    // case REQUEST_PROFILE:
    //   return state;
    case SET_PROFILE:
      return action.data;
    // case FAIL_PROFILE:
    //   return state;
    default:
      return state;
  }
}

// const list = (state = {}, action) => {
//   switch (action.type) {
//     case REQUEST_LIST:
//       return {
//         ...state,
//         id: action.listId,
//         failure: false,
//         isFetching: true
//       };
//     case RECEIVE_LIST:
//       return {
//         ...state,
//         failure: false,
//         isFetching: false,
//         items: action.items.map(item => item.id)
//       };
//     case FAIL_LIST:
//       return {
//         ...state,
//         failure: true,
//         isFetching: false
//       };
//     default:
//       return state;
//   }
// }

export default profile;

export const profileSelector = state => state.profile;

export const usernameSelector = createSelector(
  splitPathnameSelector,
  (splitPath) => {
    const p = splitPath[0];
    return p && p[0] === '@' ? p.slice(1) : null;
  }
);

// export const currentItemsSelector = createSelector(
//   currentListSelector,
//   itemsSelector,
//   (list, items) => {
//     return list && list.items ? list.items.map(id => items[id] || { id }) : null;
//   }
// )
