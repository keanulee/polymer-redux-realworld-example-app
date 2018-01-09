import { pageSelector } from '../reducers/location.js';

export const UPDATE_LOCATION = 'UPDATE_LOCATION';

export const updateLocation = (location) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_LOCATION,
    location
  });

  // NOTE: The below actions need to be created with the updated state (i.e. the state
  // with the new location.path), so they cannot be combined with UPDATE_LOCATION.
  switch (pageSelector(getState())) {
    case 'list':
      import(/* webpackChunkName: 'list' */ '../components/hn-list.js').then(module => {
        // dispatch(module.fetchListIfNeeded(module.currentListSelector(getState())));
        dispatch(module.fetchArticles());
      });
      break;
    case 'user':
      import(/* webpackChunkName: 'user' */ '../components/hn-user.js').then(module => {
        // dispatch(module.fetchUserIfNeeded(module.currentUserSelector(getState())));
        dispatch(module.fetchProfile(module.currentProfileSelector(getState())));
      });
      break;
    // case 'item':
    case 'article':
      import(/* webpackChunkName: 'item' */ '../components/hn-item.js').then(module => {
        // dispatch(module.fetchItemIfNeeded(module.currentItemSelector(getState())));
        dispatch(module.fetchArticle(module.currentArticleSelector(getState())));
      });
      break;
  }
};
