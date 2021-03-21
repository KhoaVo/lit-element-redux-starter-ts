import {LitElement, html, customElement, property, internalProperty, css} from 'lit-element';
import { connect } from 'pwa-helpers';
import { store, RootState } from '../store';
import {increment} from '../slices/counter';

/**
 * An example element.
 */
@customElement('example-element')
export class MyElement extends connect(store)(LitElement) {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property() 
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @internalProperty() 
  private count = 0;

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  stateChanged(state: RootState) {
    this.count = state.counter.value;
  }

  private _onClick() {
    store.dispatch(increment());
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'example-element': MyElement;
  }
}
