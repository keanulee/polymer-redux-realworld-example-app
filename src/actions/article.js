export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const FAIL_ARTICLE = 'FAIL_ARTICLE';

export const fetchArticle = (article) => (dispatch) => {
  dispatch(requestArticle(article));
  fetch(`https://conduit.productionready.io/api/articles/${article.slug}`)
    .then(res => res.json())
    .then(data => dispatch(receiveArticle(article, data)))
    .catch(() => dispatch(failArticle(article)));
};

// export const fetchListIfNeeded = (list) => (dispatch) => {
//   if (list && !list.items && !list.isFetching) {
//     dispatch(fetchList(list));
//   }
// };

const requestArticle = (listId) => {
  return {
    type: REQUEST_ARTICLE,
    listId
  };
};

const receiveArticle = (listId, data) => {
  return {
    type: RECEIVE_ARTICLE,
    listId,
    data
  };
};

const failArticle = (listId) => {
  return {
    type: FAIL_ARTICLE,
    listId
  };
};
