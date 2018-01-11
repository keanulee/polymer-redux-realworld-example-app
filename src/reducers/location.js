import { UPDATE_LOCATION } from '../actions/location.js';
import { createSelector } from '../../node_modules/reselect/src/index.js';

const location = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      const location = action.payload;
      return {
        ...state,
        pathname: location.pathname,
        search: location.search,
        hash: location.hash
      };
    default:
      return state;
  }
}

export default location;

const pathnameSelector = state => state.location.pathname;

export const splitPathnameSelector = createSelector(
  pathnameSelector,
  pathname => {
    return pathname ? pathname.slice(1).split('/') : [];
  }
);

export const pageSelector = createSelector(
  splitPathnameSelector,
  splitPath => {
    const p = splitPath[0];
    if (p && p[0] === '@') return 'profile';

    switch (splitPath[0]) {
      case '':
        return 'home';
      case 'login':
      case 'register':
      case 'settings':
      case 'editor':
      case 'article':
        return splitPath[0];
      default:
        return 'invalid';
    }
  }
);

const searchSelector = state => state.location.search;

export const urlSearchParamsSelector = createSelector(
  searchSelector,
  search => {
    if ('URLSearchParams' in window) {
      return new URLSearchParams(search);
    } else {
      return search.slice(1).split('&').reduce((map, s) => {
        map.set(...s.split('=').map(window.decodeURIComponent));
        return map;
      }, new Map());
    }
  }
);

export const pageIndexSelector = createSelector(
  urlSearchParamsSelector,
  params => {
    return parseInt(params.get('page'), 10) || 0;
  }
)

export const tagSelector = createSelector(
  urlSearchParamsSelector,
  params => params.get('tag')
)
