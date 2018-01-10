import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
// import '../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
// import article, { articleSelector, slugSelector } from '../reducers/article.js';
import { store } from '../store.js';
// import './hn-summary.js';
// import './hn-comment.js';
// import { fetchArticle, createArticle, updateArticle } from '../actions/article.js';
import { connect } from '../../lib/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';
import { tokenSelector } from '../reducers/user.js';

// store.addReducers({
//   article
// });

export class SettingsView extends connect(store)(PolymerElement) {
  static get template() {
    return `
    ${sharedStyles}
    <div class="settings-page">
      <div class="container page">
        <div class="row">

          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Your Settings</h1>

            <form on-submit="_submitForm">
              <fieldset>
                  <fieldset class="form-group">
                    <input class="form-control" type="text" placeholder="URL of profile picture">
                  </fieldset>
                  <fieldset class="form-group">
                    <input class="form-control form-control-lg" type="text" placeholder="Your Name">
                  </fieldset>
                  <fieldset class="form-group">
                    <textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
                  </fieldset>
                  <fieldset class="form-group">
                    <input class="form-control form-control-lg" type="text" placeholder="Email">
                  </fieldset>
                  <fieldset class="form-group">
                    <input class="form-control form-control-lg" type="password" placeholder="Password">
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
    }
  }

  update(state) {
    this.setProperties({
    });
  }

  _submitForm(e) {
    e.preventDefault();
  }
}

customElements.define('settings-view', SettingsView);

