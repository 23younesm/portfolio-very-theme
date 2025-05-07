/**
 * Copyright 2025 23younesm
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

export class FooterElement extends LitElement {
  static get tag() {
    return "footer-element";
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "Made by Maguire";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        background-color: var(--ddd-theme-default-nittanyNavy, #001E44);
        color: var(--ddd-theme-default-white, #fff);
        font-family: var(--ddd-font-body, sans-serif);
        text-align: center;
        padding: var(--ddd-spacing-4, 16px) 0;
        font-size: var(--ddd-font-size-xs, 0.75rem);
      }
    `;
  }

  render() {
    return html`<footer>${this.title}</footer>`;
  }
}

globalThis.customElements.define(FooterElement.tag, FooterElement);
