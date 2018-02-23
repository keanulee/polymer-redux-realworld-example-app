import { api } from '../api.js';
import { updateLocation } from './location.js';

export const SET_ARTICLE = 'SET_ARTICLE';
export const SET_COMMENTS = 'SET_COMMENTS';

export const fetchArticle = (slug, token) => (dispatch) => {
  if (slug) {
    api(`/articles/${slug}`, token)
    .then(res => res.json())
    .then(data => dispatch(setArticle(data.article)))
  } else {
    dispatch(setArticle({}));
  }
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

export const fetchComments = (slug, token) => (dispatch) => {
  if (slug) {
    api(`/articles/${slug}/comments`, token)
    .then(res => res.json())
    .then(data => dispatch(setComments(data.comments)))
  } else {
    dispatch(setComments([]));
  }
};

const setArticle = (article) => {
  return {
    type: SET_ARTICLE,
    payload: article
  };
};

const setComments = (comments) => {
  return {
    type: SET_COMMENTS,
    payload: comments
  };
};
