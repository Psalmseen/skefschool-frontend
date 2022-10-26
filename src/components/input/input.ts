//  EMAIN

import { LitElement, html } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { commonInputStyle } from './input.styles';
import { getEye, getEyeClosed } from '../../assets/icons';
import { sanitizeHTML } from '../../utils/utils';
import 'lit-media-query/lit-media-query';
@customElement('common-input')
export class CommonInput extends LitElement {
  @property({ type: String }) inputType: 'email' | 'password' | 'text' = 'text';
  @property({ type: String }) width = '480px';
  @property({ type: Boolean }) isRequired = false;
  @property({ type: Boolean, attribute: false }) private isEmpty = false;
  @property({ type: Boolean, attribute: false }) private isFocused = false;
  @property({ type: Boolean, attribute: false }) private hasError = false;
  @property({ type: Boolean }) private isMobile = true;
  @property({ type: String }) inputValue = '';
  @property({ type: String }) errorMessage = '';
  @property({ type: Boolean }) private isPasswordShown = false;
  @property({ type: String }) inputPlaceholder = 'Enter your name';
  @property({ type: String }) errorText = 'Please enter first name';
  @property({ type: String }) borderColor = '#c1cad1';
  @property({ type: String }) mobileQuery = '(max-width:768px)';
  @property({ type: Boolean }) dark = false;
  @query('#input') input!: HTMLInputElement;

  static styles = commonInputStyle;

  handleInput() {
    const { value } = this.input;
    const event = new CustomEvent('input-changed', {
      detail: { value },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
  handleFocusOut() {
    this.isFocused = false;
    const { value } = this.input;
    this.inputValue = value;
    this.isEmpty = this.isRequired && !this.input.value;
    if (this.inputType === 'email') {
      this.validateEmailInput();
    }
    if (this.inputType === 'password') {
      this.validatePasswordInput();
    }

    const event = new CustomEvent('input-error', {
      detail: { value: this.hasError || this.isEmpty },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  validateEmailInput() {
    const { value } = this.input;
    const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    this.hasError = !regex.test(value) && !!value;
  }

  validatePasswordInput() {
    const { value } = this.input;
    const regex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,? ]).+$'
    );
    const repititiveCharacterRegex = new RegExp('([a-zA-Z0-9])\\1\\1+');
    if (value.length < 10 || value.length > 128) {
      this.hasError = true;
      this.errorMessage =
        'The password length should be between 10 - 128 characters long';
    } else if (!regex.test(value)) {
      this.hasError = true;
      this.errorMessage =
        'The password must contain an uppercase, a lowercase, a digit and a special character';
    } else if (repititiveCharacterRegex.test(value)) {
      this.hasError = true;
      this.errorMessage =
        'only a maximum of two same character can be placed together consecutively';
    } else {
      this.hasError = false;
      this.errorMessage = '';
    }
  }
  toggleIsPasswordShown() {
    this.isPasswordShown = !this.isPasswordShown;
  }
  handleMobileQuery({ detail: { value } }: { detail: { value: boolean } }) {
    this.isMobile = value;
  }
  render() {
    this.borderColor = this.hasError || this.isEmpty ? '#cc0c2f' : '#c1cad1';
    return html`<div
      class="input-text-wrapper"
      style=${styleMap({
        width: this.width,
      })}
    >
      <lit-media-query
        .query=${this.mobileQuery}
        @changed=${this.handleMobileQuery}
      ></lit-media-query>
      <div
        class=${classMap({
          'input-container': true,
          'input-container-mobile': this.isMobile,
        })}
        @input=${this.handleInput}
        @focusin=${() => (this.isFocused = true)}
        @focusout=${this.handleFocusOut}
      >
        ${unsafeHTML(
          sanitizeHTML(
            `<input
             id="input" 
             style="border:1px solid ${this.borderColor}; padding-right: ${
              this.inputType === 'password' ? '44px' : '0'
            }; color:${this.dark ? '#e5e5e5' : '#1d252d'}" 
            class="text-input ${
              this.isMobile ? 'text-input-mobile' : ''
            } " type="${
              this.inputType !== 'password'
                ? this.inputType
                : this.isPasswordShown
                ? 'text'
                : 'password'
            }" value="${this.inputValue}"/>`
          )
        )}

        <p
          class=${classMap({
            'placeholder-text': true,
            'placeholder-text-mobile': this.isMobile,
            'focused-placeholder-text': !!(this.isFocused || this.inputValue),
            'focused-placeholder-text-dark':
              !!(this.isFocused || this.inputValue) && this.dark,
          })}
        >
          ${this.inputType !== 'text' ? this.inputType : this.inputPlaceholder}
          <span> ${this.inputType === 'email' ? 'address' : ''}</span>
        </p>

        ${this.inputType === 'password'
          ? html` <p class="eye-icon" @click=${this.toggleIsPasswordShown}>
              ${this.isPasswordShown
                ? getEyeClosed('#506d85', 20)
                : getEye('#506d85', 20)}
            </p>`
          : ''}
      </div>
      <p
        class=${classMap({
          error: true,
          'd-none': !this.hasError && !this.isEmpty,
        })}
      >
        <span class="error-icon">!</span
        ><span class="error-text"
          >${this.inputType === 'email'
            ? !this.isEmpty
              ? 'Invalid email address'
              : 'Please enter a valid email address'
            : this.inputType === 'password'
            ? !this.isEmpty
              ? this.errorMessage
              : 'Please enter a password'
            : this.errorText}</span
        >
      </p>
    </div>`;
  }
}
