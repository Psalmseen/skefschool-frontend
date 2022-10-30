import { LitElement, html, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../components/input/input';
import '../../components/button/button';
import teaching from '../../assets/teaching.mp4';
import { loginPageStyles } from './login-page.styles';
import { Router } from '@vaadin/router';
import axios from 'axios';
import { backendAuthHost } from '../../utils/utils';
import { userStore } from '../../store/user-store';

@customElement('login-page')
export class LoginPage extends LitElement {
  static styles: CSSResultGroup = loginPageStyles;
  @property({ type: Boolean }) private hasInputError = true;

  private userCredentials = {
    email: '',
    password: '',
  };
  private hasEmailError = true;
  private hasPasswordError = true;

  handleInputChange({ detail: { value } }: CustomEvent, property: string) {
    this.userCredentials = { ...this.userCredentials, [property]: value };
  }

  handleError({ detail: { value } }: CustomEvent, type: string) {
    if (type === 'email') {
      this.hasEmailError = value;
    } else if (type === 'password') {
      this.hasPasswordError = value;
    }

    this.hasInputError = this.hasEmailError || this.hasPasswordError;
  }
  async handleLogin() {
    console.log('here');
    try {
      const { data } = await axios.post(
        `${backendAuthHost}/api/login`,
        {
          ...this.userCredentials,
        },
        { withCredentials: true, credentials: 'true' }
      );
      console.log({ data });

      userStore.setIsLoggedin(true);
      await userStore.setUser({ ...data.user, accessToken: data.accessToken });
      Router.go('/dashboard');
    } catch (error) {
      console.log(error);
      alert('Username or password incorrect');
    }
  }
  protected render(): unknown {
    return html`<div class="login-page">
      <div class="video-wrapper">
        <div class="video-bg"></div>
        <div class="logo"><span> Skef </span> School</div>
        <video src=${teaching} loop autoplay></video>
      </div>
      <div class="login-content">
        <div class="login-content-header">
          <h1>Login</h1>
          <p @click=${() => Router.go('/')}>Home</p>
        </div>
        <form class="login-form">
          <div class="email">
            <common-input
              @input-changed=${(e: CustomEvent) =>
                this.handleInputChange(e, 'email')}
              @input-error=${(e: CustomEvent) => this.handleError(e, 'email')}
              width="100%"
              .inputType=${'email'}
              isRequired
              .dark=${true}
            ></common-input>
          </div>
          <div class="password">
            <common-input
              @input-changed=${(e: CustomEvent) =>
                this.handleInputChange(e, 'password')}
              @input-error=${(e: CustomEvent) =>
                this.handleError(e, 'password')}
              width="100%"
              dark
              .inputType=${'password'}
              isRequired
            ></common-input>
          </div>
          <div
            class="login-btn"
            @click=${() => {
              this.hasInputError ? '' : this.handleLogin();
            }}
          >
            <button-component
              px="px-3"
              py="py-2"
              .inActive=${this.hasInputError}
              .label=${'Login'}
            ></button-component>
          </div>
        </form>
      </div>
    </div>`;
  }
}
