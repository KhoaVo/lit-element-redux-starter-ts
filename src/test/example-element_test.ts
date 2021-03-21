import {MyElement} from '../components/example-element.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('example-element', () => {
  test('is defined', () => {
    const el = document.createElement('example-element');
    assert.instanceOf(el, MyElement);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<example-element></example-element>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<example-element name="Test"></example-element>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<example-element></example-element>`)) as MyElement;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
