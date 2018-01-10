import { api } from '../api.js';

// export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const SET_PROFILE = 'SET_PROFILE';
// export const FAIL_PROFILE = 'FAIL_PROFILE';

export const fetchProfile = (username, token) => (dispatch) => {
  // dispatch(requestProfile(profile));
  api(`/profiles/${username}`, token)
  .then(res => res.json())
  .then(data => dispatch(setProfile(data.profile)))
  // .catch(() => dispatch(failProfile(profile)));
};

// export const fetchListIfNeeded = (list) => (dispatch) => {
//   if (list && !list.items && !list.isFetching) {
//     dispatch(fetchList(list));
//   }
// };

// const requestProfile = (listId) => {
//   return {
//     type: REQUEST_PROFILE,
//     listId
//   };
// };

const setProfile = (data) => {
  return {
    type: SET_PROFILE,
    data
  };
};

// const failProfile = (listId) => {
//   return {
//     type: FAIL_PROFILE,
//     listId
//   };
// };
