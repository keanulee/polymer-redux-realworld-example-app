export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const FAIL_ARTICLES = 'FAIL_ARTICLES';

export const fetchArticles = (options) => (dispatch) => {
  dispatch(requestArticles(options));
  fetch(`https://conduit.productionready.io/api/articles?limit=10&offset=0`)
    .then(res => res.json())
    .then(data => dispatch(receiveArticles(options, data)))
    .catch(() => dispatch(failArticles(options)));
};

// export const fetchListIfNeeded = (list) => (dispatch) => {
//   if (list && !list.items && !list.isFetching) {
//     dispatch(fetchList(list));
//   }
// };

const requestArticles = (listId) => {
  return {
    type: REQUEST_ARTICLES,
    listId
  };
};

const receiveArticles = (listId, data) => {
  return {
    type: RECEIVE_ARTICLES,
    listId,
    data
  };
};

const failArticles = (listId) => {
  return {
    type: FAIL_ARTICLES,
    listId
  };
};
