import { CSSResultGroup, html } from 'lit';
import { MobxLitElement } from '@adobe/lit-mobx';
import { customElement, property, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { navbarStyle } from './navbar.styles';
import { classMap } from 'lit/directives/class-map.js';
import { userStore } from '../../store/user-store';
import '../button/button';
import 'lit-media-query/lit-media-query';
import axios from 'axios';
import { backendAuthHost } from '../../utils/utils';

@customElement('nav-bar')
export class Navbar extends MobxLitElement {
  static styles: CSSResultGroup = navbarStyle;
  @property({ type: Boolean }) isMobile = false;
  @property({ type: String }) mobileQuery = '(max-width: 768px)';
  @property({ type: Boolean }) isNavbarOpen = false;
  @state() getToken!: any;
  connectedCallback() {
    super.connectedCallback();
    this.getToken = setInterval(() => {
      axios.get(`${backendAuthHost}/token`, { withCredentials: true });
    }, 10 * 1000);
    // Change the get token timer to 4.8 minute for tpoduction
  }

  disconnectedCallback(): void {
    clearInterval(this.getToken);
  }
  handleMobileQuery({ detail: { value } }: { detail: { value: boolean } }) {
    this.isMobile = value;
  }
  toggleNavbarOpen() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  async handleLogin() {
    if (userStore.isloggedIn) {
      await axios.get(`${backendAuthHost}/api/logout`, {
        withCredentials: true,
      });
      userStore.deleteUser();
      clearInterval(this.getToken);
      Router.go('/');
    } else {
      Router.go('login');
    }
  }
  protected render(): unknown {
    return html`<div class=${classMap({
      navbar: true,
      'navbar-mob': this.isMobile,
    })}>
      <lit-media-query
        .query=${this.mobileQuery}
        @changed=${this.handleMobileQuery}
      ></lit-media-query>

      <div class=${classMap({
        logo: true,
        'logo-mob': this.isMobile,
      })}
      @click=${() =>
        Router.go(
          userStore.isloggedIn ? '/dashboard' : '/'
        )}><span> Skef </span> school</div>
      <div class=${classMap({ 'd-none': !this.isMobile })}>
    
<!-- STARTS HERE -->
<svg
    class=${classMap({
      'ham hamRotate ham8': true,
      active: this.isNavbarOpen,
    })} 
    viewBox="0 0 100 100" width="80"
    @click=${this.toggleNavbarOpen}
    >
    
    
  <path
        class="line top"
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
  <path
        class="line middle"
        d="m 30,50 h 40" />
  <path
        class="line bottom"
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
</svg>

<!-- ENDS HERE -->


    </div>
        <ul class=${classMap({
          nav: true,
          'nav-mob': this.isMobile,
          'nav-mob-open': this.isNavbarOpen && this.isMobile,
        })}>
          <li class="nav-item"><a class="nav-link" href="/"> Home</a></li>
          <li class="nav-item"><a class="nav-link" href=""> About</a></li>
          <button-component @click=${this.handleLogin} .label=${
      !userStore.isloggedIn ? 'login' : 'log out'
    }></button-component>
        </ul>
      </div>
    </div>`;
  }
}
//  work on the add staff page
//  make the dashboard responsive
