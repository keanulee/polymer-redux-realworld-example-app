export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const FAIL_USER = 'FAIL_USER';

export const fetchUser = (user) => (dispatch) => {
  dispatch(requestUser(user.id));
  fetch(`/api/user/${user.id}`)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        throw data.error;
      }
      dispatch(receiveUser(user.id, data))
    })
    .catch(() => dispatch(failUser(user.id)));
};

export const fetchUserIfNeeded = (user) => (dispatch) => {
  if (user && !user.created_time && !user.isFetching) {
    dispatch(fetchUser(user));
  }
};

const requestUser = (userId) => {
  return {
    type: REQUEST_USER,
    userId
  };
};

const receiveUser = (userId, data) => {
  return {
    type: RECEIVE_USER,
    userId,
    data
  };
};

const failUser = (userId) => {
  return {
    type: FAIL_USER,
    userId
  };
};
