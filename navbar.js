/**
 * Copyright 2025 23younesm
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/simple-cta/simple-cta.js";
/**
 * `portfolio-screen`
 * 
 * @demo index.html
 * @element nav-bar
 */
export class NavBar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nav-bar";
  }

  constructor() {
    super();
    this.title = "";
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
        width: 100vw;
        height: 15%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        background-color: var(--ddd-theme-default-white);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box; /* Make sure padding is included in the width calculation */
        }

        h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
        }

        .title {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
        text-align: center;
        }

        .content {
        font-size: var(--ddd-font-size-m);
        text-align: center;
        display: flex;
        }

        .sectionButtons {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-between;
        width: auto;
        }

        .sectionButtons img {
        max-height: 100%;
        height: auto;
        width: auto;
        margin-right: 20px;
        }

        .simple-cta {
        display: flex;
        width: auto; /* Allow buttons to take up their natural width */
        text-align: center;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        }

        img {
        height: 50%;
        max-height: 100%;
        margin: 10px;
        margin-top: 40px;
        display: block;

        }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <!-- Logo Container -->
        <div class="sectionButtons">
        <a href="/">
          <img src="https://brand.psu.edu/images/shared-images/psu-mark-280.png" alt="Penn State Logo">
        </a>
        </div>
    
        <!-- Buttons Container (Spaced Across the Remaining Width) -->
        <div class="sectionButtons" style="flex-grow: 1; display: flex; justify-content: space-between;">
          <simple-cta><a href="#1">About</a></simple-cta>
          <simple-cta><a href="#2">Skills</a></simple-cta>
          <simple-cta><a href="#3">Projects</a></simple-cta>
          <simple-cta><a href="#4">Competitions</a></simple-cta>
          <simple-cta><a href="#5">Contact</a></simple-cta>
        </div>
      </div>
    `;
  }
  
  
}

globalThis.customElements.define(NavBar.tag, NavBar);