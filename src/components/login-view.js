import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/@polymer/polymer/lib/elements/dom-if.js';
import users, { currentUserSelector } from '../reducers/users.js';
import user from '../reducers/user.js';
import profile, { profileSelector, currentProfileSelector } from '../reducers/profile.js';
import { store } from '../store.js';
import { fetchUser, fetchUserIfNeeded } from '../actions/users.js';
import { fetchProfile } from '../actions/profile.js';
import { connect } from '../../lib/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';
import { loginUser } from '../actions/user.js';

store.addReducers({
  user
});

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

            <form>
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
      user: Object,

      profile: Object
    }
  }

  update(state) {
    const user = currentUserSelector(state);
    if (user) {
      document.title = user.id;
      this.setProperties({
        user
      });
    }

    this.setProperties({
      profile: profileSelector(state)
    });
  }
  
  _reload() {
    store.dispatch(fetchUser(this.user));
  }

  _submitForm() {
    store.dispatch(loginUser({email: "romanticclient@abc.com", password: "romanticclient"}));
  }
}

customElements.define('login-view', LoginView);

export { currentUserSelector, fetchUserIfNeeded, currentProfileSelector, fetchProfile };
