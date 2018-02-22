import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js';
import { sharedStyles } from './shared-styles.js';

export class InvalidView extends LitElement {
  render() {
    return html`
    <style>${sharedStyles}</style>
    <h1>Page not found</h1>`;
  }
}

customElements.define('invalid-view', InvalidView);
