import { api } from '../api.js';

// export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
export const SET_ARTICLE = 'SET_ARTICLE';
// export const FAIL_ARTICLE = 'FAIL_ARTICLE';

export const fetchArticle = (article, token) => (dispatch) => {
  // dispatch(requestArticle(article));
  api(`/articles/${article.slug}`, token)
  .then(res => res.json())
  .then(data => dispatch(setArticle(article, data)))
  // .catch(() => dispatch(failArticle(article)));
};

// export const fetchListIfNeeded = (list) => (dispatch) => {
//   if (list && !list.items && !list.isFetching) {
//     dispatch(fetchList(list));
//   }
// };

// const requestArticle = (listId) => {
//   return {
//     type: REQUEST_ARTICLE,
//     listId
//   };
// };

const setArticle = (listId, data) => {
  return {
    type: SET_ARTICLE,
    listId,
    data
  };
};

// const failArticle = (listId) => {
//   return {
//     type: FAIL_ARTICLE,
//     listId
//   };
// };
