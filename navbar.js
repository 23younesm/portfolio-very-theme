/**
 * Copyright 2025 23younesm
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/simple-cta/simple-cta.js";

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
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }

        .wrapper {
          width: 100vw;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          background-color: var(--ddd-theme-default-nittanyNavy);
          padding: var(--ddd-spacing-2);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-2);
          padding: 0 var(--ddd-spacing-4);
        }

        .logo {
          height: 50px;
          object-fit: contain;
        }

        .nav-buttons {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: var(--ddd-spacing-2);
          flex-wrap: wrap;
        }

        simple-cta {
          --simple-cta-font-size: 12px;
          --simple-cta-padding: 6px 10px;
          --simple-cta-border-radius: 4px;
          font-size: 12px;
          padding: 6px 10px;
          min-width: auto;
        }

        @media (max-width: 600px) {
          .nav-buttons {
            justify-content: center;
            flex-wrap: wrap;
            gap: var(--ddd-spacing-1);
          }

          simple-cta {
            font-size: 10px;
            padding: 4px 8px;
          }

          .logo {
            height: 40px;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="nav-container">
          <a href="#screen-0">
            <img
              src="https://brand.psu.edu/images/shared-images/psu-mark-280.png"
              alt="Penn State Logo"
              class="logo"
            />
          </a>
          <div class="nav-buttons">
            <simple-cta><a href="#screen-1">About</a></simple-cta>
            <simple-cta><a href="#screen-2">Skills</a></simple-cta>
            <simple-cta><a href="#screen-3">Projects</a></simple-cta>
            <simple-cta><a href="#screen-4">Competitions</a></simple-cta>
            <simple-cta><a href="#screen-5">Contact</a></simple-cta>
          </div>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(NavBar.tag, NavBar);
