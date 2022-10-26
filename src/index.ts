import { LitElement, html, CSSResultGroup, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './components/navbar/navbar';

@customElement('index-page')
export class IndexPage extends LitElement {
  static styles?: CSSResultGroup = [
    css`
      div {
        display: grid;
        grid-template-rows: max-content 1fr;
        overflow-x: hidden;
      }
    `,
  ];
  protected render(): unknown {
    return html`<div>
      <nav-bar></nav-bar>
      <slot class="slot"></slot>
    </div>`;
  }
}
