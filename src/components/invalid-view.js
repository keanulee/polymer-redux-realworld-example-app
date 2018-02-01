import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import { sharedStyles } from './shared-styles.js';

export class InvalidView extends PolymerElement {
  static get template() {
    return `
    <style>${sharedStyles}</style>
    <h1>Page not found</h1>`;
  }
}

customElements.define('invalid-view', InvalidView);