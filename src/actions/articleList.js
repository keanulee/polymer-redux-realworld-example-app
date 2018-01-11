import { api } from '../api.js';

// export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const SET_ARTICLES = 'SET_ARTICLES';
// export const FAIL_ARTICLES = 'FAIL_ARTICLES';

export const fetchArticles = (options, token) => (dispatch) => {
  const query = Object.keys(options).map(k => `${k}=${options[k]}`).join('&');
  api(`/articles?${query}`, token)
  .then(res => res.json())
  .then(data => dispatch(setArticles(data)))
  // .catch(() => dispatch(failArticles(options)));
};

const setArticles = (data) => {
  return {
    type: SET_ARTICLES,
    payload: data
  };
};

// const failArticles = (listId) => {
//   return {
//     type: FAIL_ARTICLES,
//     listId
//   };
// };
