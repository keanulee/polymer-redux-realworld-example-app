import { api } from '../api.js';
import { updateLocation } from './location.js';

// export const REQUEST_USER = 'REQUEST_USER';
export const SET_USER = 'SET_USER';
// export const FAIL_USER = 'FAIL_USER';

export const fetchUser = (token) => (dispatch) => {
  if (token) {
    api('/user', token)
    .then(res => res.json())
    .then(data => {
      // if (data.error) {
      //   throw data.error;
      // }
      dispatch(setUser(data.user));
    })
    // .catch(() => dispatch(failUser(user.id)));
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
    // if (data.error) {
    //   throw data.error;
    // }
    dispatch(setUser(data.user));
    window.history.pushState({}, '', '/');
    dispatch(updateLocation())
    localStorage.setItem('jwt', data.user.token);
  })
  // .catch(() => dispatch(failUser(user.id)));
};

export const createUser = (user) => (dispatch) => {
  // TODO
};

// export const fetchUserIfNeeded = (user) => (dispatch) => {
//   if (user && !user.created_time && !user.isFetching) {
//     dispatch(fetchUser(user));
//   }
// };

// const requestUser = (userId) => {
//   return {
//     type: REQUEST_USER,
//     userId
//   };
// };

const setUser = (user) => {
  return {
    type: SET_USER,
    data: user
  };
};

// const failUser = (userId) => {
//   return {
//     type: FAIL_USER,
//     userId
//   };
// };
