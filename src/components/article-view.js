import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
// import '../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import article, { articleSelector, currentArticleSelector } from '../reducers/article.js';
import { store } from '../store.js';
// import './hn-summary.js';
// import './hn-comment.js';
import { fetchArticle } from '../actions/article.js';
import { connect } from '../../lib/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';

store.addReducers({
  article
});

export class ArticleView extends connect(store)(PolymerElement) {
  static get template() {
    return `
    ${sharedStyles}
    <div class="article-page">

      <div class="banner">
        <div class="container">

          <h1>[[article.title]]</h1>

          <div class="article-meta">
            <a href$="[[_getArticleAuthorHref(article.author.username)]]">
              <img src="[[article.author.image]]" alt="[[article.author.username]]" />
            </a>
            <div class="info">
              <a href$="[[_getArticleAuthorHref(article.author.username)]]" class="author">
                [[article.author.username]]
              </a>
              <span class="date">[[_formatDate(article.createdAt)]]</span>
            </div>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow [[article.author.username]] <span class="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button class="btn btn-sm btn-outline-primary">
              <i class="ion-heart"></i>
              &nbsp;
              Favorite Post <span class="counter">(29)</span>
            </button>
          </div>

        </div>
      </div>

      <div class="container page">

        <div class="row article-content">
          <div class="col-md-12">
            <div>[[article.body]]</div>
          </div>
        </div>

        <hr />

        <div class="article-actions">
          <div class="article-meta">
            <a href$="[[_getArticleAuthorHref(article.author.username)]]">
              <img src="[[article.author.image]]" alt="[[article.author.username]]" />
            </a>
            <div class="info">
              <a href$="[[_getArticleAuthorHref(article.author.username)]]" class="author">
                [[article.author.username]]
              </a>
              <span class="date">[[_formatDate(article.createdAt)]]</span>
            </div>

            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow [[article.author.username]] <span class="counter">(10)</span>
            </button>
            &nbsp;
            <button class="btn btn-sm btn-outline-primary">
              <i class="ion-heart"></i>
              &nbsp;
              Favorite Post <span class="counter">(29)</span>
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
            
            <div class="card">
              <div class="card-block">
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div class="card-footer">
                <a href="" class="comment-author">
                  <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
                </a>
                &nbsp;
                <a href="" class="comment-author">Jacob Schmidt</a>
                <span class="date-posted">Dec 29th</span>
              </div>
            </div>

            <div class="card">
              <div class="card-block">
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div class="card-footer">
                <a href="" class="comment-author">
                  <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
                </a>
                &nbsp;
                <a href="" class="comment-author">Jacob Schmidt</a>
                <span class="date-posted">Dec 29th</span>
                <span class="mod-options">
                  <i class="ion-edit"></i>
                  <i class="ion-trash-a"></i>
                </span>
              </div>
            </div>
            
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

  update(state) {
    this.setProperties({
      article: articleSelector(state)
    });
  }

  _getArticleAuthorHref(username) {
    return `/@${username}`;
  }

  _formatDate(date) {
    return new Date(date).toDateString()
  }
}

customElements.define('article-view', ArticleView);

export { currentArticleSelector, fetchArticle };
