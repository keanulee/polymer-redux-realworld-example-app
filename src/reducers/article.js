import {
  REQUEST_ARTICLE,
  RECEIVE_ARTICLE,
  FAIL_ARTICLE
} from '../actions/article.js';
import { createSelector } from '../../node_modules/reselect/src/index.js';
import { splitPathnameSelector } from './location.js';
import { itemsSelector } from './items.js';
import { favoritesSelector } from './favorites.js';

const article = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_ARTICLE:
      return state;
    case RECEIVE_ARTICLE:
      return action.data.article;
    case FAIL_ARTICLE:
      return state;
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

export default article;

export const articleSelector = state => state.article;

export const currentArticleSelector = createSelector(
  splitPathnameSelector,
  (splitPath) => {
    switch (splitPath[0]) {
      // case '':
      //   return lists['news'] || { id: 'news' };
      // case 'new':
      //   return lists['newest'] || { id: 'newest' };
      // case 'ask':
      // case 'show':
      case 'article':
        return { slug: splitPath[1] };
      // case 'favorites':
      //   return { id: 'favorites', items: Object.keys(favorites).map(id => parseInt(id, 10)) };
      default:
        return null;
    }
  }
);

// export const currentItemsSelector = createSelector(
//   currentListSelector,
//   itemsSelector,
//   (list, items) => {
//     return list && list.items ? list.items.map(id => items[id] || { id }) : null;
//   }
// )
