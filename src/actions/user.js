import { api } from '../api.js';
import { updateLocation } from './location.js';

export const SET_USER = 'SET_USER';
export const FAIL_USER = 'FAIL_USER';

export const fetchUser = (token) => (dispatch) => {
  if (token) {
    api('/user', token)
    .then(res => res.json())
    .then(data => dispatch(setUser(data.user)));
  }
};

export const loginUser = (user) => (dispatch) => {
  api('/users/login', null /* token */, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({user})
  })
  .then(res => res.json())
  .then(data => {
    if (data.errors) {
      dispatch(failUser(data.errors));
      return;
    }
    dispatch(setUser(data.user));
    window.history.pushState({}, '', '/');
    dispatch(updateLocation());
    localStorage.setItem('jwt', data.user.token);
  })
  .catch(() => dispatch(failUser({network: 'unavailable'})));
};

export const createUser = (user) => (dispatch) => {
  api('/users', null /* token */, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({user})
  })
  .then(res => res.json())
  .then(data => {
    if (data.errors) {
      dispatch(failUser(data.errors));
      return;
    }
    dispatch(setUser(data.user));
    window.history.pushState({}, '', '/');
    dispatch(updateLocation());
    localStorage.setItem('jwt', data.user.token);
  })
  .catch(() => dispatch(failUser({network: 'unavailable'})));
};

export const updateUser = (user, token) => (dispatch) => {
  api('/user', token, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({user})
  })
  .then(res => res.json())
  .then(data => {
    if (data.errors) {
      dispatch(failUser(data.errors));
      return;
    }
    dispatch(setUser(data.user));
    window.history.pushState({}, '', '/');
    dispatch(updateLocation());
    localStorage.setItem('jwt', data.user.token);
  })
  .catch(() => dispatch(failUser({network: 'unavailable'})));
};

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  };
};

const failUser = (errors) => {
  return {
    type: FAIL_USER,
    payload: errors
  };
};
