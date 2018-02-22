import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js';
import { unsafeHTML } from '../../node_modules/lit-html/lib/unsafe-html.js';
import article, { articleSelector, slugSelector } from '../reducers/article.js';
import { store } from '../store.js';
import { fetchArticle, deleteArticle } from '../actions/article.js';
import { connect } from '../../node_modules/pwa-helpers/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';
import { tokenSelector, userSelector } from '../reducers/user.js';

// HACK(keanulee): There's no web-compatible module version of marked, so use the min.js
// version that defines a global for development, and use the require() syntax for webpack.
import '../../node_modules/marked/marked.min.js';
const marked = window.marked || require('marked');

store.addReducers({
  article
});

export class ArticleView extends connect(store)(LitElement) {
  render({ article, user }) {
    return html`
    <style>${sharedStyles}</style>

    ${article.author && html`
      <div class="article-page">

        <div class="banner">
          <div class="container">

            <h1>${article.title}</h1>

            <div class="article-meta">
              <a href="/@${article.author.username}">
                <img src="${article.author.image}" alt="${article.author.username}" />
              </a>
              <div class="info">
                <a href="/@${article.author.username}" class="author">
                  ${article.author.username}
                </a>
                <span class="date">${new Date(article.createdAt).toDateString()}</span>
              </div>
              <button class="btn btn-sm btn-outline-secondary">
                <i class="ion-plus-round"></i>
                &nbsp;
                Follow ${article.author.username}
              </button>
              <button class="btn btn-sm btn-outline-primary">
                <i class="ion-heart"></i>
                &nbsp;
                Favorite Post
                <span class="counter">(${article.favoritesCount})</span>
              </button>
              ${user && article.author.username === user.username ? html`
                <a href="/editor/${article.slug}" class="btn btn-sm btn-outline-secondary">
                  <i class="ion-edit"></i>
                  &nbsp;
                  Edit Post
                </a>
                <button class="btn btn-sm btn-outline-danger" on-click="${e => this._deleteArticle(article)}">
                  <i class="ion-trash-a"></i>
                  &nbsp;
                  Delete Post
                </button>
              ` : null}
            </div>

          </div>
        </div>

        <div class="container page">

          <div class="row article-content">
            <div class="col-xs-12">
              <div>${article && article.body && unsafeHTML(marked(article.body))}</div>
            </div>
          </div>

          <hr />

          <div class="article-actions">
            <div class="article-meta">
              <a href="/@${article.author.username}">
                <img src="${article.author.image}" alt="${article.author.username}" />
              </a>
              <div class="info">
                <a href="/@${article.author.username}" class="author">
                  ${article.author.username}
                </a>
                <span class="date">${new Date(article.createdAt).toDateString()}</span>
              </div>

              <button class="btn btn-sm btn-outline-secondary">
                <i class="ion-plus-round"></i>
                &nbsp;
                Follow ${article.author.username}
              </button>
              &nbsp;
              <button class="btn btn-sm btn-outline-primary">
                <i class="ion-heart"></i>
                &nbsp;
                Favorite Post
                <span class="counter">(${article.favoritesCount})</span>
              </button>
            </div>
          </div>

          <div class="row">

            <div class="col-xs-12 col-md-8 offset-md-2">

              <form class="card comment-form">
                <div class="card-block">
                  <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
                </div>
                <div class="card-footer">
                  <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
                  <button class="btn btn-sm btn-primary">
                  Post Comment
                  </button>
                </div>
              </form>
              
              ${/* TODO: fetch and post comments */article.comments && article.comments.map(comment => html`
                <div class="card">
                  <div class="card-block">
                    <p class="card-text">${comment.body}</p>
                  </div>
                  <div class="card-footer">
                    <a href class="comment-author">
                      <img src="${comment.author.image}" class="comment-author-img" />
                    </a>
                    &nbsp;
                    <a href class="comment-author">${comment.author.username}</a>
                    <span class="date-posted">${new Date(comment.createdAt).toDateString()}</span>
                  </div>
                </div>
              `)}
              
            </div>

          </div>

        </div>

      </div>`}
    `;
  }
  
  static get properties() {
    return {
      article: Object,

      token: String,

      user: Object
    }
  }

  stateChanged(state) {
    this.article = articleSelector(state);
    this.user = userSelector(state);
    this.token = tokenSelector(state);
  }

  _deleteArticle(article) {
    store.dispatch(deleteArticle(article.slug, this.token));
  }
}

customElements.define('article-view', ArticleView);

export { slugSelector, fetchArticle };
