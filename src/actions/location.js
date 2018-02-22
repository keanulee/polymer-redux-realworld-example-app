import { pageSelector } from '../reducers/location.js';
import { tokenSelector } from '../reducers/user.js';

export const UPDATE_LOCATION = 'UPDATE_LOCATION';

export const updateLocation = () => (dispatch, getState) => {
  dispatch({
    type: UPDATE_LOCATION,
    payload: window.location
  });

  // NOTE: The below actions need to be created with the updated state (i.e. the state
  // with the new location.path), so they cannot be combined with UPDATE_LOCATION.
  switch (pageSelector(getState())) {
    case 'home':
      import(/* webpackChunkName: 'home' */ '../components/home-view.js').then(module => {
        dispatch(module.setArticleList({
          tab: 'all'
        }));
        const state = getState();
        const limit = 10;
        const options = { limit };
        const token = tokenSelector(state);
        dispatch(module.fetchArticles(options, token));
        dispatch(module.fetchTags(token));
      });
      break;
    case 'login':
      import(/* webpackChunkName: 'login' */ '../components/login-view.js').then(module => {
        
      });
      break;
    case 'register':
      import(/* webpackChunkName: 'register' */ '../components/register-view.js').then(module => {
        
      });
      break;
    case 'profile':
      import(/* webpackChunkName: 'profile' */ '../components/profile-view.js').then(module => {
        const state = getState();
        const username = module.usernameSelector(state);
        const currentPage = module.currentPageSelector(state) || 0;
        const tab = module.tabSelector(state);
        const limit = 5;
        const token = tokenSelector(state);
        const options = { limit, offset: limit * currentPage };
        // `tab` is one of 'author' or 'favorited', which is used as the name of a query param to fetchArticles.
        options[tab] = username;
        dispatch(module.fetchProfile(username, token));
        dispatch(module.fetchArticles(options, token));
      });
      break;
    case 'settings':
      import(/* webpackChunkName: 'settings' */ '../components/settings-view.js').then(module => {
        
      });
      break;
    case 'editor':
      import(/* webpackChunkName: 'editor' */ '../components/editor-view.js').then(module => {
        const state = getState();
        dispatch(module.fetchArticle(module.slugSelector(state), tokenSelector(state)));
      });
      break;
    case 'article':
      import(/* webpackChunkName: 'article' */ '../components/article-view.js').then(module => {
        const state = getState();
        dispatch(module.fetchArticle(module.slugSelector(state), tokenSelector(state)));
      });
      break;
  }
};
