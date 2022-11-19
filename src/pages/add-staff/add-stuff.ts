import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { userStore } from '../../store/user-store';
import { Router } from '@vaadin/router';

@customElement('add-staff-page')
export class AddStaffPage extends LitElement {
  connectedCallback(): void {
    super.connectedCallback();
    console.log(userStore.isloggedIn);
    if (userStore.user?.role === 'staff') {
      Router.go('/dashboard');
    }
    if (!userStore.isloggedIn) {
      Router.go('login');
    }
  }
  protected render(): unknown {
    return html`<div>This is the add staff page</div>`;
  }
}
