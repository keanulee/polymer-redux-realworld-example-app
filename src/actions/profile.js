export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const FAIL_PROFILE = 'FAIL_PROFILE';

export const fetchProfile = (profile) => (dispatch) => {
  dispatch(requestProfile(profile));
  fetch(`https://conduit.productionready.io/api/profiles/${profile.username}`)
    .then(res => res.json())
    .then(data => dispatch(receiveProfile(profile, data)))
    .catch(() => dispatch(failProfile(profile)));
};

// export const fetchListIfNeeded = (list) => (dispatch) => {
//   if (list && !list.items && !list.isFetching) {
//     dispatch(fetchList(list));
//   }
// };

const requestProfile = (listId) => {
  return {
    type: REQUEST_PROFILE,
    listId
  };
};

const receiveProfile = (listId, data) => {
  return {
    type: RECEIVE_PROFILE,
    listId,
    data
  };
};

const failProfile = (listId) => {
  return {
    type: FAIL_PROFILE,
    listId
  };
};
