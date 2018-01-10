import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import { store } from '../store.js';
import { connect } from '../../lib/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';
import { loginUser } from '../actions/user.js';

export class LoginView extends connect(store)(PolymerElement) {
  static get template() {
    return `
    ${sharedStyles}
    <div class="auth-page">
      <div class="container page">
        <div class="row">

          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign in</h1>
            <p class="text-xs-center">
              <a href="/register">Need an account?</a>
            </p>

            <form on-submit="_submitForm">
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" placeholder="Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Sign in
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

  update(state) {
    this.setProperties({
    });
  }

  _submitForm(e) {
    e.preventDefault();
    store.dispatch(loginUser({email: "romanticclient@abc.com", password: "romanticclient"}));
  }
}

customElements.define('login-view', LoginView);
