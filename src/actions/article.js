import { api } from '../api.js';
import { updateLocation } from './location.js';

// export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
export const SET_ARTICLE = 'SET_ARTICLE';
// export const FAIL_ARTICLE = 'FAIL_ARTICLE';

export const fetchArticle = (slug, token) => (dispatch) => {
  // dispatch(requestArticle(article));
  if (slug) {
    api(`/articles/${slug}`, token)
    .then(res => res.json())
    .then(data => dispatch(setArticle(data.article)))
  } else {
    dispatch(setArticle({}));
  }
  // .catch(() => dispatch(failArticle(article)));
};

export const createArticle = (article, token) => (dispatch) => {
  api('/articles', token, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({article})
  })
  .then(res => res.json())
  .then(data => {
    window.history.pushState({}, '', `/article/${data.article.slug}`);
    dispatch(updateLocation())
  })
}

export const updateArticle = (slug, article, token) => (dispatch) => {
  api(`/articles/${slug}`, token, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({article})
  })
  .then(res => res.json())
  .then(data => {
    window.history.pushState({}, '', `/article/${data.article.slug}`);
    dispatch(updateLocation())
  })
}

export const deleteArticle = (slug, token) => (dispatch) => {
  api(`/articles/${slug}`, token, {
    method: 'DELETE'
  })
  .then(() => {
    window.history.pushState({}, '', `/`);
    dispatch(updateLocation())
  })
}

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

const setArticle = (article) => {
  return {
    type: SET_ARTICLE,
    payload: article
  };
};

// const failArticle = (listId) => {
//   return {
//     type: FAIL_ARTICLE,
//     listId
//   };
// };
