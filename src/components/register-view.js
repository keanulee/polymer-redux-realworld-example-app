import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js';
import { store } from '../store.js';
import { connect } from '../../node_modules/pwa-helpers/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';
import { createUser } from '../actions/user.js';

export class RegisterView extends connect(store)(LitElement) {
  render({ errors }) {
    return html`
    <style>${sharedStyles}</style>
    <div class="auth-page">
      <div class="container page">
        <div class="row">

          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign up</h1>
            <p class="text-xs-center">
              <a href="/login">Have an account?</a>
            </p>

            ${errors && html`
              <ul class="error-messages">
                ${Object.keys(errors).map(field => html`
                  <li>${field} ${errors[field]}</li>
                `)}
              </ul>
            `}

            <form on-submit="${e => this._submitForm(e)}">
              <fieldset class="form-group">
                <input id="username" class="form-control form-control-lg" type="text" placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <input id="email" class="form-control form-control-lg" type="email" placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input id="password" class="form-control form-control-lg" type="password" placeholder="Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Sign up
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>`;
  }
  
  static get properties() {
    return {
      errors: Object
    };
  }

  stateChanged(state) {
    this.errors = state.user.errors;
  }

  _submitForm(e) {
    e.preventDefault();
    const formElements = e.target.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    store.dispatch(createUser({username, email, password}));
  }
}

customElements.define('register-view', RegisterView);
