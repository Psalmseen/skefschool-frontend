import { html, CSSResultGroup } from 'lit';
import { MobxLitElement } from '@adobe/lit-mobx';
import { customElement, state } from 'lit/decorators.js';
import { classPageStyles } from './class-page.styles';
import { userStore } from '../../store/user-store';
import { Router } from '@vaadin/router';
import { authFetch } from '../../utils/customAPI';
@customElement('class-page')
export class ClassPage extends MobxLitElement {
  static styles?: CSSResultGroup = classPageStyles;

  @state() class: {
    name: string;
    teacher?: string;
    students?: string;
    subject?: string[];
  }[] = [];

  async connectedCallback() {
    super.connectedCallback();
    if (userStore.user?.role === 'staff') {
      Router.go('/dashboard');
    }
    if (!userStore.isloggedIn) {
      Router.go('login');
    }

    const {
      data: { data },
    } = await authFetch.get(`/class`);

    this.class = data;
  }
  protected render(): unknown {
    return html`<div class="class-subject-page">
      <section class="class">
        ${this.class.length === 0
          ? html`<h1 class="no-staff">
              There is no class added to this organization
            </h1>`
          : html` <h1>Classes</h1>
              ${this.class
                .map(({ name }) => name.toUpperCase())
                .sort()
                .map((name) => html`<p>${name}</p>`)}`}
      </section>
      <hr />
      <section class="subject">
        <h1>There is no Subject added to this organization</h1>
      </section>
      <!-- ${this.class.map(({ name }) => html`${name}`)} -->
    </div>`;
  }
}
// This component is like the staff page required an API to fetch all the back end api
// Should only be accessable to only admin
