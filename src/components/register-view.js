import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/@polymer/polymer/lib/elements/dom-if.js';
import users, { currentUserSelector } from '../reducers/users.js';
import profile, { profileSelector, currentProfileSelector } from '../reducers/profile.js';
import { store } from '../store.js';
import { fetchUser, fetchUserIfNeeded } from '../actions/users.js';
import { fetchProfile } from '../actions/profile.js';
import { connect } from '../../lib/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';

store.addReducers({
  users,
  profile
});

export class RegisterView extends connect(store)(PolymerElement) {
  static get template() {
    return `
    ${sharedStyles}
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
}

customElements.define('register-view', RegisterView);

export { currentUserSelector, fetchUserIfNeeded, currentProfileSelector, fetchProfile };
