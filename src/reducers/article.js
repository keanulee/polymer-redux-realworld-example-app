import {
  SET_ARTICLE,
  SET_COMMENTS
} from '../actions/article.js';
import { createSelector } from '../../node_modules/reselect/src/index.js';
import { splitPathnameSelector } from './location.js';

const article = (state = {}, action) => {
  switch (action.type) {
    case SET_ARTICLE:
      return {
        ...state,
        article: action.payload
      };
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    default:
      return state;
  }
}

export default article;

export const articleSelector = state => state.article.article;

export const commentsSelector = state => state.article.comments;

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
