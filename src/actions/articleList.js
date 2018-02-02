import { api } from '../api.js';

// export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const SET_ARTICLE_LIST = 'SET_ARTICLE_LIST';
// export const FAIL_ARTICLES = 'FAIL_ARTICLES';

export const fetchArticles = (options, token) => (dispatch) => {
  const query = Object.keys(options).map(k => `${k}=${options[k]}`).join('&');
  api(`/articles?${query}`, token)
  .then(res => res.json())
  .then(data => dispatch(setArticleList(data)))
  // .catch(() => dispatch(failArticles(options)));
};

export const fetchTags = (token) => (dispatch) => {
  api(`/tags`, token)
  .then(res => res.json())
  .then(data => dispatch(setArticleList(data)))
};

export const setArticleList = (data) => {
  return {
    type: SET_ARTICLE_LIST,
    payload: data
  };
};

// const failArticles = (listId) => {
//   return {
//     type: FAIL_ARTICLES,
//     listId
//   };
// };
