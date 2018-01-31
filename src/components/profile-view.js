import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import articleList, { articlesSelector } from '../reducers/articleList.js';
import profile, { profileSelector, usernameSelector } from '../reducers/profile.js';
import { store } from '../store.js';
import { fetchProfile } from '../actions/profile.js';
import { fetchArticles } from '../actions/articleList.js';
import { connect } from '../../lib/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';
import { pageIndexSelector } from '../reducers/location.js';

store.addReducers({
  articleList,
  profile
});

export class ProfileView extends connect(store)(PolymerElement) {
  static get template() {
    return `
    ${sharedStyles}
    <div class="profile-page">

      <div class="user-info">
        <div class="container">
          <div class="row">

            <div class="col-xs-12 col-md-10 offset-md-1">
              <img src="[[profile.image]]" class="user-img" />
              <h4>[[profile.username]]</h4>
              <p>[[profile.bio]]</p>
              <button class="btn btn-sm btn-outline-secondary action-btn">
                <i class="ion-plus-round"></i>
                &nbsp;
                Follow [[profile.username]]
              </button>
            </div>

          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <div class="articles-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <a class="nav-link active" href="">My Articles</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">Favorited Articles</a>
                </li>
              </ul>
            </div>

            <dom-repeat items="[[articles]]">
              <template>
                <div class="article-preview">
                  <div class="article-meta">
                    <a href$="[[_getArticleAuthorHref(item.author.username)]]">
                      <img src="[[item.author.image]]" alt="[[item.author.username]]" />
                    </a>
                    <div class="info">
                      <a href$="[[_getArticleAuthorHref(item.author.username)]]" class="author">
                        [[item.author.username]]
                      </a>
                      <span class="date">[[_formatDate(item.createdAt)]]</span>
                    </div>
                    <button class="btn btn-outline-primary btn-sm pull-xs-right">
                      <i class="ion-heart"></i> 29
                    </button>
                  </div>
                  <a href$="[[_getArticleHref(item.slug)]]" class="preview-link">
                    <h1>[[item.title]]</h1>
                    <p>[[item.description]]</p>
                    <span>Read more...</span>
                  </a>
                </div>
              </template>
            </dom-repeat>

          </div>

        </div>
      </div>

    </div>`;
  }
  
  static get properties() {
    return {
      articles: Array,

      profile: Object
    }
  }

  update(state) {
    this.setProperties({
      articles: articlesSelector(state),
      profile: profileSelector(state)
    });
  }

  _getArticleAuthorHref(username) {
    return `/@${username}`;
  }

  _formatDate(date) {
    return new Date(date).toDateString()
  }

  _getArticleHref(slug) {
    return `/article/${slug}`;
  }
}

customElements.define('profile-view', ProfileView);

export { usernameSelector, fetchProfile, fetchArticles, pageIndexSelector };
