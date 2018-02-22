import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import article, { articleSelector, slugSelector } from '../reducers/article.js';
import { store } from '../store.js';
// import './hn-summary.js';
// import './hn-comment.js';
import { fetchArticle, createArticle, updateArticle } from '../actions/article.js';
import { connect } from '../../node_modules/pwa-helpers/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';
import { tokenSelector } from '../reducers/user.js';

store.addReducers({
  article
});

export class EditorView extends connect(store)(PolymerElement) {
  static get template() {
    return `
    <style>${sharedStyles}</style>
    <div class="editor-page">
      <div class="container page">
        <div class="row">

          <div class="col-md-10 offset-md-1 col-xs-12">
            <form on-submit="_submitForm">
              <fieldset>
                <fieldset class="form-group">
                  <input type="text" id="articleTitle" class="form-control form-control-lg" placeholder="Article Title" value="[[_string(article.title)]]">
                </fieldset>
                <fieldset class="form-group">
                  <input type="text" id="articleDescription" class="form-control" placeholder="What's this article about?" value="[[_string(article.description)]]">
                </fieldset>
                <fieldset class="form-group">
                  <textarea id="articleBody" class="form-control" rows="8" placeholder="Write your article (in markdown)" value="[[_string(article.body)]]"></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input type="text" id="articleTags" class="form-control" placeholder="Enter tags" value="[[_toString(article.tagList)]]"><div class="tag-list"></div>
                </fieldset>
                <input type="submit" class="btn btn-lg pull-xs-right btn-primary" value="Publish Article">
              </fieldset>
            </form>
          </div>

        </div>
      </div>
    </div>`;
  }
  
  static get properties() {
    return {
      article: Object
    }
  }

  stateChanged(state) {
    this.setProperties({
      article: articleSelector(state)
    });
  }

  _submitForm(e) {
    e.preventDefault();
    if (this.article.slug) {
      // Update article
      store.dispatch(updateArticle(this.article.slug, {
        body: this.$.articleBody.value,
        description: this.$.articleDescription.value,
        tagList: this._toArray(this.$.articleTags.value),
        title: this.$.articleTitle.value
      }, tokenSelector(store.getState())));
    } else {
      // Create article
      store.dispatch(createArticle({
        body: this.$.articleBody.value,
        description: this.$.articleDescription.value,
        tagList: this._toArray(this.$.articleTags.value),
        title: this.$.articleTitle.value
      }, tokenSelector(store.getState())));

    }
  }

  _string(v) {
    return v || '';
  }

  _toArray(str) {
    return str.split(/\s+/);
  }

  _toString(arr) {
    return arr ? arr.join(' ') : '';
  }
}

customElements.define('editor-view', EditorView);

export { slugSelector, fetchArticle };
