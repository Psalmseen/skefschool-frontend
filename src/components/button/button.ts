import { CSSResultGroup, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { buttonStyle } from './button.styles';

@customElement('button-component')
export class Button extends LitElement {
  static styles: CSSResultGroup = buttonStyle;
  @property({ type: String }) label = 'Button';
  @property({ type: String }) variant = 'primary';
  @property({ type: String }) py: 'py-1' | 'py-2' | 'py-3' = 'py-1';
  @property({ type: String }) px: 'px-1' | 'px-2' | 'px-3' = 'px-1';
  @property({ type: Boolean }) inActive = false;
  protected render(): unknown {
    return html`<div
      class=${classMap({
        btn: true,
        primary: this.variant.toLowerCase() === 'primary',
        [this.px]: this.px,
        [this.py]: this.py,
        inactive: this.inActive,
      })}
    >
      ${this.label}
    </div>`;
  }
}
