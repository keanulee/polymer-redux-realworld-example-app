import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import articleList, { articlesSelector, articlesCountSelector, tagsSelector } from '../reducers/articleList.js';
import { store } from '../store.js';
import { fetchArticles, fetchTags } from '../actions/articleList.js';
import { connect } from '../../lib/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';
import { pageIndexSelector, tagSelector } from '../reducers/location.js';

store.addReducers({
  articleList
});

export class HomeView extends connect(store)(PolymerElement) {
  static get template() {
    return `
    ${sharedStyles}
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

            <nav>
              <ul class="pagination">
                <dom-repeat items="[[pages]]">
                  <template>
                    <li class$="[[_getLinkClasses(index, currentPage)]]">
                      <a class="page-link" href$="[[_getLinkHref(index, currentTag)]]">
                        [[_increment(index, currentTag)]]
                      </a>
                    </li>
                  </template>
                </dom-repeat>
              </ul>
            </nav>

          </div>

          <div class="col-md-3">
            <div class="sidebar">
              <p>Popular Tags</p>

              <div class="tag-list">
                <dom-repeat items="[[tags]]">
                  <template>
                    <a href$="[[_getTagHref(item)]]" class="tag-pill tag-default">
                      [[item]]
                    </a>
                  </template>
                </dom-repeat>
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

      pageCount: Number,

      currentPage: Number,

      currentTag: String,

      tags: Array
    }
  }

  update(state) {
    this.setProperties({
      articles: articlesSelector(state),
      pages: new Array(Math.ceil(articlesCountSelector(state) / 10)),
      currentPage: pageIndexSelector(state),
      currentTag: tagSelector(state),
      tags: tagsSelector(state)
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

  _getLinkClasses(index, currentPage) {
    return index === currentPage ? 'page-item active' : 'page-item';
  }

  _getLinkHref(index, currentTag) {
    return currentTag ? `?tag=${currentTag}&page=${index}` : `?page=${index}`;
  }

  _increment(index) {
    return index + 1;
  }

  _getTagHref(tag) {
    return `?tag=${tag}`;
  }
}

customElements.define('home-view', HomeView);

export { fetchArticles, fetchTags, pageIndexSelector, tagSelector };
