interface RouteEl extends HTMLElement {
  active: boolean;
  component?: string;
  path?: string;
  resolve?: () => Promise<void>;
  loading?: string;
  scrollOpt?: ScrollIntoViewOptions | boolean;
  scrollDisable: false;
}

// lit-redux-router doesn't register lit-route so we'll do it manually for now.
declare global {
  interface HTMLElementTagNameMap {
    'lit-route': RouteEl;
  }
}

export const _ = 1;
