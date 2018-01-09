export const REQUEST_USER = 'REQUEST_USER';
export const SET_USER = 'SET_USER';
export const FAIL_USER = 'FAIL_USER';

export const loginUser = (user) => (dispatch) => {
  // dispatch(requestUser(user.id));
  fetch(`https://conduit.productionready.io/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user})
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      throw data.error;
    }
    dispatch(setUser(data))
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

const setUser = (data) => {
  return {
    type: SET_USER,
    data
  };
};

const failUser = (userId) => {
  return {
    type: FAIL_USER,
    userId
  };
};
