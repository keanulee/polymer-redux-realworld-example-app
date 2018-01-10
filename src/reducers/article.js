import {
  // REQUEST_ARTICLE,
  SET_ARTICLE,
  // FAIL_ARTICLE
} from '../actions/article.js';
import { createSelector } from '../../node_modules/reselect/src/index.js';
import { splitPathnameSelector } from './location.js';
// import { itemsSelector } from './items.js';
// import { favoritesSelector } from './favorites.js';

const article = (state = {}, action) => {
  switch (action.type) {
    // case REQUEST_ARTICLE:
    //   return state;
    case SET_ARTICLE:
      return action.payload;
    // case FAIL_ARTICLE:
    //   return state;
    default:
      return state;
  }
}

export default article;

export const articleSelector = state => state.article;

export const slugSelector = createSelector(
  splitPathnameSelector,
  (splitPath) => {
    switch (splitPath[0]) {
      case 'editor':
      case 'article':
        return splitPath[1] || null;
      default:
        return null;
    }
  }
);
