import { LitElement, html, css } from "lit";

export class QuoteBanner extends LitElement {
  static get tag() {
    return "quote-banner";
  }

  static get properties() {
    return {
      quote: { type: String },
      author: { type: String }
    };
  }

  constructor() {
    super();
    this.quote = "The only limit to our realization of tomorrow is our doubts of today.";
    this.author = "Franklin D. Roosevelt";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-coalyGray, #2d2d2d);
        color: var(--ddd-theme-default-white, #ffffff);
        font-family: var(--ddd-font-body, sans-serif);
        padding: var(--ddd-spacing-5, 20px);
        text-align: center;
        font-size: var(--ddd-font-size-m, 1rem);
        font-style: italic;
        border-left: 5px solid var(--ddd-theme-primary, #00bcd4);
      }

      .author {
        margin-top: var(--ddd-spacing-2, 8px);
        font-size: var(--ddd-font-size-xs, 0.8rem);
        font-style: normal;
        color: var(--ddd-theme-default-muted, #ccc);
      }
    `;
  }

  render() {
    return html`
      <div class="quote">"${this.quote}"</div>
      <div class="author">— ${this.author}</div>
    `;
  }
}

globalThis.customElements.define(QuoteBanner.tag, QuoteBanner);
