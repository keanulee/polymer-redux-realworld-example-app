import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import lists, { currentItemsSelector, currentListSelector } from '../reducers/lists.js';
import items from '../reducers/items.js';
import favorites from '../reducers/favorites.js';
import articles, { articlesSelector } from '../reducers/articles.js';
import { store } from '../store.js';
import './hn-summary.js';
import { fetchList, fetchListIfNeeded } from '../actions/lists.js';
import { fetchArticles } from '../actions/articles.js';
import { loadFavorites } from '../actions/favorites.js';
import { connect } from '../../lib/connect-mixin.js';
import { sharedStyles } from './shared-styles.js';

store.addReducers({
  lists,
  favorites,
  items,
  articles
});

store.dispatch(loadFavorites());

export class HnListElement extends connect(store)(PolymerElement) {
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
                      <span class="date">[[_formatDate(article.createdAt)]]</span>
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

          <div class="col-md-3">
            <div class="sidebar">
              <p>Popular Tags</p>

              <div class="tag-list">
                <a href="" class="tag-pill tag-default">programming</a>
                <a href="" class="tag-pill tag-default">javascript</a>
                <a href="" class="tag-pill tag-default">emberjs</a>
                <a href="" class="tag-pill tag-default">angularjs</a>
                <a href="" class="tag-pill tag-default">react</a>
                <a href="" class="tag-pill tag-default">mean</a>
                <a href="" class="tag-pill tag-default">node</a>
                <a href="" class="tag-pill tag-default">rails</a>
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
      list: Object,

      favorites: Object,

      items: Array,

      articles: Array
    }
  }

  update(state) {
    const list = currentListSelector(state);
    if (list) {
      document.title = list.id;
      const props = {
        favorites: state.favorites,
        list
      };
      const items = currentItemsSelector(state);
      if (items) {
        props.items = items;
      }
      this.setProperties(props);
    }

    this.setProperties({
      articles: articlesSelector(state)
    });
  }

  _isFavorite(favorites, item) {
    return Boolean(favorites && item && favorites[item.id]);
  }
  
  _reload() {
    store.dispatch(fetchList(this.list));
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

customElements.define('hn-list', HnListElement);

export { currentListSelector, fetchListIfNeeded, fetchArticles };
