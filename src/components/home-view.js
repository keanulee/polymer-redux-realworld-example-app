import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js';
import articleList, { articlesSelector, articlesCountSelector, tagsSelector } from '../reducers/articleList.js';
import { store } from '../store.js';
import { fetchArticles, fetchTags } from '../actions/articleList.js';
import { connect } from '../../lib/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';
import { pageIndexSelector, tagSelector } from '../reducers/location.js';

store.addReducers({
  articleList
});

export class HomeView extends connect(store)(LitElement) {
  render({ articles, pages, currentPage, currentTag, tags }) {
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
                  <a class="nav-link disabled" href="">Your Feed</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="">Global Feed</a>
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
                    <a class="page-link" href="${currentTag ? `?tag=${currentTag}&page=${index}` : `?page=${index}`}">
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
                  <a href="?tag=${tag}" class="tag-pill tag-default">${tag}</a>
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

      currentTag: String,

      tags: Array
    }
  }

  update(state) {
    const pageCount = Math.ceil(articlesCountSelector(state) / 10);
    const pages = [];
    for (let i = 1; i <= pageCount; ++i) {
      pages.push(i);
    }
    this.articles = articlesSelector(state);
    this.pages = pages;
    this.currentPage = pageIndexSelector(state);
    this.currentTag = tagSelector(state);
    this.tags = tagsSelector(state);
  }
}

customElements.define('home-view', HomeView);

export { fetchArticles, fetchTags, pageIndexSelector, tagSelector };
