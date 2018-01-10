import { api } from '../api.js';

// export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const SET_ARTICLES = 'SET_ARTICLES';
// export const FAIL_ARTICLES = 'FAIL_ARTICLES';

export const fetchArticles = (options, token) => (dispatch) => {
  api(`/articles?limit=10&offset=0`, token)
  .then(res => res.json())
  .then(data => dispatch(setArticles(options, data)))
  // .catch(() => dispatch(failArticles(options)));
};

const setArticles = (listId, data) => {
  return {
    type: SET_ARTICLES,
    listId,
    data
  };
};

// const failArticles = (listId) => {
//   return {
//     type: FAIL_ARTICLES,
//     listId
//   };
// };
