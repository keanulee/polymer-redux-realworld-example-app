import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js';
import { store } from '../store.js';
import { updateUser } from '../actions/user.js';
import { connect } from '../../node_modules/pwa-helpers/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';
import { userSelector, tokenSelector } from '../reducers/user.js';

export class SettingsView extends connect(store)(LitElement) {
  render({ user }) {
    return html`
    <style>${sharedStyles}</style>
    <div class="settings-page">
      <div class="container page">
        <div class="row">

          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Your Settings</h1>

            <form on-submit="${e => this._submitForm(e)}">
              <fieldset>
                  <fieldset class="form-group">
                    <input id="image" class="form-control" type="text" placeholder="URL of profile picture" value="${user.image}">
                  </fieldset>
                  <fieldset class="form-group">
                    <input id="username" class="form-control form-control-lg" type="text" placeholder="Your Name" value="${user.username}">
                  </fieldset>
                  <fieldset class="form-group">
                    <textarea id="bio" class="form-control form-control-lg" rows="8" placeholder="Short bio about you" value="${user.bio}"></textarea>
                  </fieldset>
                  <fieldset class="form-group">
                    <input id="email" class="form-control form-control-lg" type="text" placeholder="Email" value="${user.email}">
                  </fieldset>
                  <fieldset class="form-group">
                    <input id="password" class="form-control form-control-lg" type="password" placeholder="Password">
                  </fieldset>
                  <button class="btn btn-lg btn-primary pull-xs-right">
                    Update Settings
                  </button>
              </fieldset>
            </form>
          </div>

        </div>
      </div>
    </div>`;
  }
  
  static get properties() {
    return {
      token: String,

      user: Object
    }
  }

  stateChanged(state) {
    this.token = tokenSelector(state);
    this.user = userSelector(state);
  }

  _submitForm(e) {
    e.preventDefault();
    const formElements = e.target.elements;
    const user = {
      bio: formElements.bio.value,
      email: formElements.email.value,
      image: formElements.image.value,
      username: formElements.username.value
    };
    const password = formElements.password.value;
    if (password) {
      user.password = password;
    }
    store.dispatch(updateUser(user, this.token));
  }
}

customElements.define('settings-view', SettingsView);

