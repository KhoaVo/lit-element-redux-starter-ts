import {_} from '../typings/lit-redux-router'; // Hack until typings get fixed.
import {
  LitElement,
  html,
  customElement,
  property,
  internalProperty,
  css,
} from 'lit-element';
import {connect} from 'pwa-helpers';
import {store, RootState} from '../store';
import {increment} from '../slices/counter';
import {navigate} from 'lit-redux-router';

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
   * Base URL Path for routing.
   */
  @property()
  basePath = '';

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
      <lit-route><h1>404</h1></lit-route>
      <lit-route .path=${this.getPath('/bar')}>
        <h1>bar</h1>
      </lit-route>
      <lit-route .path=${this.getPath('/')}>
        <h1>Hello, ${this.name}!</h1>
        <button @click=${this._onClick} part="button">
          Click Count: ${this.count}
        </button>
        <a href="/dev/bar">Hi click me</a>
        <slot></slot>
      </lit-route>
    `;
  }

  private getPath(path: string) {
    return this.basePath + path;
  }

  stateChanged(state: RootState) {
    this.count = state.counter.value;
  }

  navigate(path: string) {
    store.dispatch(navigate(this.basePath + path));
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
