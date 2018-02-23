import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js';
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

export class EditorView extends connect(store)(LitElement) {
  render({ article = {} }) {
    return html`
    <style>${sharedStyles}</style>
    <div class="editor-page">
      <div class="container page">
        <div class="row">

          <div class="col-md-10 offset-md-1 col-xs-12">
            <form on-submit="${e => this._submitForm(e)}">
              <fieldset>
                <fieldset class="form-group">
                  <input id="articleTitle" type="text" class="form-control form-control-lg" placeholder="Article Title" value="${article.title || ''}">
                </fieldset>
                <fieldset class="form-group">
                  <input id="articleDescription" type="text" class="form-control" placeholder="What's this article about?" value="${article.description || ''}">
                </fieldset>
                <fieldset class="form-group">
                  <textarea id="articleBody" class="form-control" rows="8" placeholder="Write your article (in markdown)" value="${article.body || ''}"></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input id="articleTags" type="text" class="form-control" placeholder="Enter tags" value="${(article.tagList || []).join(' ')}">
                  <div class="tag-list"></div>
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
    this.article = articleSelector(state);
  }

  _submitForm(e) {
    e.preventDefault();
    const formElements = e.target.elements;
    const article = {
      body: formElements.articleBody.value,
      description: formElements.articleDescription.value,
      tagList: formElements.articleTags.value.split(/\s+/),
      title: formElements.articleTitle.value
    };
    if (this.article.slug) {
      store.dispatch(updateArticle(this.article.slug, article, tokenSelector(store.getState())));
    } else {
      store.dispatch(createArticle(article, tokenSelector(store.getState())));

    }
  }
}

customElements.define('editor-view', EditorView);

export { slugSelector, fetchArticle };
