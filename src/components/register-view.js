import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import { store } from '../store.js';
import { connect } from '../../node_modules/pwa-helpers/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';
import { createUser } from '../actions/user.js';

export class RegisterView extends connect(store)(PolymerElement) {
  static get template() {
    return `
    <style>${sharedStyles}</style>
    <div class="auth-page">
      <div class="container page">
        <div class="row">

          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign up</h1>
            <p class="text-xs-center">
              <a href="/login">Have an account?</a>
            </p>

            <ul class="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" placeholder="Password">
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
    }
  }

  stateChanged(state) {
    this.setProperties({
    });
  }
  
  _reload() {
    store.dispatch(createUser({}));
  }
}

customElements.define('register-view', RegisterView);
