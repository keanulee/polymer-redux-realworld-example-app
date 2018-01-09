import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
/* Always load dom-if here for more efficient caching */
import '../../node_modules/@polymer/polymer/lib/elements/dom-if.js';
import './hn-invalid-page.js';
import location, { pageSelector } from '../reducers/location.js';
import { store } from '../store.js';
import { updateLocation } from '../actions/location.js';
import { connect } from '../../lib/connect-mixin.js';
import { installRouter } from '../../lib/router.js';
import { sharedStyles } from './shared-styles.js';

store.addReducers({
  location,
});

installRouter(() => store.dispatch(updateLocation(window.location)));

export class HnAppElement extends connect(store)(PolymerElement) {
  static get template() {
    return `
    ${sharedStyles}
    <style>
      [page] > * {
        display: none;
      }
      [page=list] hn-list,
      [page=article] hn-item,
      [page=user] hn-user,
      [page=login] login-view,
      [page=register] register-view,
      [page=invalid-page] hn-invalid-page {
        display: block;
      }
    </style>
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="/">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <a class="nav-link active" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-compose"></i>&nbsp;New Post
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">Sign in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
    <div page$="[[page]]">
      <hn-list></hn-list>
      <hn-item></hn-item>
      <hn-user></hn-user>
      <login-view></login-view>
      <register-view></register-view>
      <hn-invalid-page></hn-invalid-page>
    </div>`;
  }
  
  static get properties() {
    return {
      page: String
    };
  }

  update(state) {
    this.setProperties({
      page: pageSelector(state)
    });
  }
}

customElements.define('hn-app', HnAppElement);
