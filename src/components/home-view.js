import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js';
import articleList, { articlesSelector, articlesCountSelector, tagsSelector, currentPageSelector, tabSelector, tagSelector } from '../reducers/articleList.js';
import { store } from '../store.js';
import { fetchArticles, fetchTags, setArticleList } from '../actions/articleList.js';
import { connect } from '../../node_modules/pwa-helpers/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';
import { tokenSelector } from '../reducers/user.js';

store.addReducers({
  articleList
});

export class HomeView extends connect(store)(LitElement) {
  render({ articles, pages, currentPage, tab, tag, tags }) {
    return html`
    <style>${sharedStyles}</style>
    <div class="home-page">

      <div class="banner">
        <div class="container">
          <h1 class="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
    
      <div class="container page">
        <div class="row">
    
          <div class="col-md-9">
            <div class="feed-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <a class$="nav-link ${tab === 'feed' ? 'active' : ''}" href on-click="${e => this._setTab('feed')}">
                    Your Feed
                  </a>
                </li>
                <li class="nav-item">
                  <a class$="nav-link ${tab === 'all' ? 'active' : ''}" href on-click="${e => this._setTab('all')}">
                    Global Feed
                  </a>
                </li>
                ${tag && html`
                  <li class="nav-item">
                    <a class="nav-link active" href>${tag}</a>
                  </li>
                `}
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
                  <button class="btn btn-outline-primary btn-sm pull-xs-right" on-click="${e => this._toggleFavorite(article)}">
                    <i class="ion-heart"></i>
                    ${article.favoritesCount}
                  </button>
                </div>
                <a href$="/article/${article.slug}" class="preview-link">
                  <h1>${article.title}</h1>
                  <p>${article.description}</p>
                  <span>Read more...</span>
                </a>
              </div>
            `)}

            <nav>
              <ul class="pagination">
                ${pages.map((page, index) => html`
                  <li class$="page-item ${index === currentPage ? 'active' : ''}">
                    <a class="page-link" href on-click="${e => this._setCurrentPage(index)}">
                      ${page}
                    </a>
                  </li>
                `)}
              </ul>
            </nav>

          </div>

          <div class="col-md-3">
            <div class="sidebar">
              <p>Popular Tags</p>

              <div class="tag-list">
                ${tags && tags.map(tag => html`
                  <a class="tag-pill tag-default" href on-click="${e => this._setTag(tag)}">${tag}</a>
                `)}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    `;
  }
  
  static get properties() {
    return {
      articles: Array,

      pages: Number,

      currentPage: Number,

      tab: String,

      tag: String,

      tags: Array,

      token: String
    }
  }

  stateChanged(state) {
    const articlesCount = articlesCountSelector(state) || 0;
    const pageCount = Math.ceil(articlesCount / 10);
    const pages = [];
    for (let i = 1; i <= pageCount; ++i) {
      pages.push(i);
    }
    this.articles = articlesSelector(state);
    this.pages = pages;
    this.currentPage = currentPageSelector(state) || 0;
    this.tab = tabSelector(state);
    this.tag = tagSelector(state);
    this.tags = tagsSelector(state);
    this.token = tokenSelector(state);
  }

  _setTab(tab) {
    store.dispatch(setArticleList({
      tab,
      tag: null
    }));
    const limit = 10;
    const options = { limit };
    if (tab === 'all') {
      store.dispatch(fetchArticles(options, this.token));
    } else {
      // TODO: implement personal feed
      store.dispatch(setArticleList({
        articles: []
      }));
    }
  }

  _setCurrentPage(currentPage) {
    store.dispatch(setArticleList({
      currentPage
    }));
    const limit = 10;
    const options = { limit, offset: limit * currentPage };
    if (this.tag) {
      options.tag = this.tag;
    }
    store.dispatch(fetchArticles(options, this.token));
  }

  _setTag(tag) {
    store.dispatch(setArticleList({
      tag,
      tab: null
    }));
    const limit = 10;
    const options = { limit };
    if (tag) {
      options.tag = tag;
    }
    store.dispatch(fetchArticles(options, this.token));
  }

  _toggleFavorite(article) {
    // TODO: implement
  }
}

customElements.define('home-view', HomeView);

export { fetchArticles, fetchTags, currentPageSelector, tagSelector, setArticleList };
