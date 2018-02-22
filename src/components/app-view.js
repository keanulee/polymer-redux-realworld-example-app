import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js';
import './invalid-view.js';
import location, { pageSelector } from '../reducers/location.js';
import user, { tokenSelector, userSelector } from '../reducers/user.js';
import { store } from '../store.js';
import { updateLocation } from '../actions/location.js';
import { fetchUser } from '../actions/user.js';
import { connect } from '../../node_modules/pwa-helpers/connect-mixin.js';
import { installRouter } from '../../node_modules/pwa-helpers/router.js';
import { sharedStyles } from './shared-styles.js';

store.addReducers({
  location,
  user
});

installRouter(() => store.dispatch(updateLocation()));
store.dispatch(fetchUser(tokenSelector(store.getState())));

export class AppView extends connect(store)(LitElement) {
  render({ page, user }) {
    return html`
    <style>
      ${sharedStyles}

      [page] > * {
        display: none;
      }
      [page=home] home-view,
      [page=login] login-view,
      [page=register] register-view,
      [page=profile] profile-view,
      [page=settings] settings-view,
      [page=editor] editor-view,
      [page=article] article-view,
      [page=invalid] invalid-view {
        display: block;
      }
    </style>
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="/">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <a class$="nav-link ${page === 'home' ? 'active' : ''}" href="/">Home</a>
          </li>
          ${user.token ? html`
            <li class="nav-item">
              <a class="nav-link" href="/editor">
                <i class="ion-compose"></i>&nbsp;New Post
              </a>
            </li>
            <li class="nav-item">
              <a class$="nav-link ${page === 'settings' ? 'active' : ''}" href="/settings">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </a>
            </li>
            <li class="nav-item">
              <a class$="nav-link ${page === 'register' ? 'active' : ''}" href="/@${user.username}">
                ${user.image && html`<img class="user-pic" src="${user.image}" alt="${user.username}">`}
                ${user.username}
              </a>
            </li>
          ` : html`
            <li class="nav-item">
              <a class$="nav-link ${page === 'login' ? 'active' : ''}" href="/login">Sign in</a>
            </li>
            <li class="nav-item">
              <a class$="nav-link ${page === 'register' ? 'active' : ''}" href="/register">Sign up</a>
            </li>
          `}
        </ul>
      </div>
    </nav>
    <div page$="${page}">
      <home-view></home-view>
      <login-view></login-view>
      <register-view></register-view>
      <profile-view></profile-view>
      <settings-view></settings-view>
      <editor-view></editor-view>
      <article-view></article-view>
      <invalid-view></invalid-view>
    </div>`;
  }
  
  static get properties() {
    return {
      page: String,

      user: Object
    };
  }

  stateChanged(state) {
    this.page = pageSelector(state);
    this.user = userSelector(state);
  }
}

customElements.define('app-view', AppView);
