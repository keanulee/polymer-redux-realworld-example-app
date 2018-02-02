import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js';
import articleList, { articlesSelector, currentPageSelector } from '../reducers/articleList.js';
import profile, { profileSelector, usernameSelector } from '../reducers/profile.js';
import { store } from '../store.js';
import { fetchProfile } from '../actions/profile.js';
import { fetchArticles } from '../actions/articleList.js';
import { connect } from '../../lib/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';

store.addReducers({
  articleList,
  profile
});

export class ProfileView extends connect(store)(LitElement) {
  render({ articles, profile }) {
    return html`
    <style>${sharedStyles}</style>
    <div class="profile-page">

      <div class="user-info">
        <div class="container">
          <div class="row">

            <div class="col-xs-12 col-md-10 offset-md-1">
              <img src="${profile.image}" class="user-img" />
              <h4>${profile.username}</h4>
              <p>${profile.bio}</p>
              <button class="btn btn-sm btn-outline-secondary action-btn">
                <i class="ion-plus-round"></i>
                &nbsp;
                Follow ${profile.username}
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

            ${articles && articles.map(article => html`
              <div class="article-preview">
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
                  <button class="btn btn-outline-primary btn-sm pull-xs-right">
                    <i class="ion-heart"></i> 29
                  </button>
                </div>
                <a href="/article/${article.slug}" class="preview-link">
                  <h1>${article.title}</h1>
                  <p>${article.description}</p>
                  <span>Read more...</span>
                </a>
              </div>
            `)}

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
    this.articles = articlesSelector(state);
    this.profile = profileSelector(state);
  }
}

customElements.define('profile-view', ProfileView);

export { usernameSelector, fetchProfile, fetchArticles, currentPageSelector };
