/**
 * Copyright 2025 23younesm
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-screen`
 * 
 * @demo index.html
 * @element portfolio-screen
 */
export class PortfolioScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-screen";
  }

  constructor() {
    super();
    this.title = "";
    this.color = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
    //   localesPath:
    //     new URL("./locales/portfolio-screen.ar.json", import.meta.url).href +
    //     "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      color: { type: String},
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        /* margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4); */
        height: 100vh;
        width: 100%;
        background-color: var(--ddd-theme-default-color);
      }
      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      }
      .title {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
        padding-top: var(--ddd-spacing-25);
        margin-top: var(--ddd-spacing-0);
        text-align: center;
      }
      .content {
        font-size: var(--ddd-font-size-m);
        text-align: center;
        align-items: center;
        justify-content: center;
      }
    `];
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('color')) {
      this.style.setProperty('--ddd-theme-default-color', `var(--ddd-theme-default-${this.color})`);
    }
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <h1 class="title">${this.title}</h1>
        <slot class="content"></slot>
      </div>`;
  }
}

globalThis.customElements.define(PortfolioScreen.tag, PortfolioScreen);