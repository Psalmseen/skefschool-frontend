import { CSSResultGroup, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { userStore } from '../../store/user-store';
import { Router } from '@vaadin/router';
import { authFetch } from '../../utils/customAPI';
import { staffPageStyles } from './staff-page.styles';
import '../../components/input/input';
import { CommonInput } from '../../components/input/input';
import { backendHost } from '../../utils/utils';

@customElement('staff-page')
export class StaffPage extends LitElement {
  static styles: CSSResultGroup = staffPageStyles;
  @state() staffs:
    | {
        name: string;
        email: string;
        role: string;
        imageUrl?: string;
        clas?: string;
      }[]
    | [] = [];
  @state() staffCredentials = {
    name: '',
    email: '',
    password: '',
  };
  @state() inputErrors = {
    email: true,
    name: true,
    password: true,
  };
  @state() isAddStaffModalOpen = false;

  @state() hasAddError = false;
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
    } = await authFetch.get(`/staffs`);
    this.staffs = data;
  }
  handleInput({ detail: { value } }: CustomEvent, name: string) {
    this.staffCredentials = { ...this.staffCredentials, [name]: value };
    console.log(this.staffCredentials);
  }
  handleInputError({ detail: { value } }: CustomEvent, name: string) {
    this.inputErrors = { ...this.inputErrors, [name]: value };
    console.log(this.inputErrors);
  }
  async handleAddStaff(e: Event) {
    e.preventDefault();
    let error = false;
    const inputs = this.shadowRoot?.querySelectorAll(
      'common-input'
    ) as NodeListOf<CommonInput>;
    const { email, name, password } = this.inputErrors;
    if (name) {
      error = true;
      inputs[0].handleFocusOut();
    }
    if (email) {
      error = true;
      inputs[1].handleFocusOut();
    }
    if (password) {
      error = true;
      inputs[2].handleFocusOut();
    }
    if (error) return;
    try {
      await authFetch.post('/signup', {
        ...this.staffCredentials,
        role: 'staff',
      });
      this.toggleIsAddStaffModalOpen();
    } catch (error) {
      console.log(error);
      this.popAddError();
    }
    try {
      const {
        data: { data },
      } = await authFetch.get(`/staffs`);
      this.staffs = data;
    } catch (error) {
      console.log(error);
    }
    /*  Work on adding the staff both in thr frontend and at the backend
    implement adding class to staff
    Add the functionality of adding new claass by Admin
    Admin can route to a staff dashboard 
     */
  }
  toggleIsAddStaffModalOpen() {
    this.isAddStaffModalOpen = !this.isAddStaffModalOpen;
  }
  closeModal({ target: { className } }: any) {
    if (className.trim() !== 'add-staff-modal') return;
    this.isAddStaffModalOpen = false;
  }
  popAddError() {
    this.hasAddError = true;

    setTimeout(() => {
      this.hasAddError = false;
    }, 3000);
  }
  protected render(): unknown {
    return html`<div class="staff-page">
      ${this.staffs.length === 0
        ? html`<h1 class="no-staff">
            There is no staff added to this organization
          </h1>`
        : html`<div>
            ${this.staffs.map(
              ({ name, imageUrl, clas }) => html`
                <div class="staff">
                  <div class="staff__img-wrapper">
                    ${imageUrl
                      ? html`<img src=${backendHost + imageUrl} />`
                      : name[0]}
                  </div>
                  <div class="staff__name">${name}</div>
                  <div class="staff__class">
                    ${clas ? clas : 'High school 3A'}
                  </div>
                  <div class="staff__more">View more</div>
                </div>
              `
            )}
          </div>`}

      <div @click=${this.toggleIsAddStaffModalOpen} class="add-staff">+</div>
      <!-- Modal for adding staff -->
      <div
        @click=${this.closeModal}
        class=${classMap({
          'add-staff-modal': true,
          'd-none': !this.isAddStaffModalOpen,
        })}
      >
        <form class="staff-modal-form">
          <common-input
            width="100%"
            inputPlaceholder="Staff Name"
            errorText="Please enter staff name"
            @input-error=${(e: CustomEvent) => this.handleInputError(e, 'name')}
            @input-changed=${(e: CustomEvent) => this.handleInput(e, 'name')}
            isRequired
          ></common-input>
          <common-input
            inputType="email"
            width="100%"
            @input-error=${(e: CustomEvent) =>
              this.handleInputError(e, 'email')}
            @input-changed=${(e: CustomEvent) => this.handleInput(e, 'email')}
            isRequired
          ></common-input>
          <common-input
            inputType="password"
            @input-error=${(e: CustomEvent) =>
              this.handleInputError(e, 'password')}
            @input-changed=${(e: CustomEvent) =>
              this.handleInput(e, 'password')}
            width="100%"
            isRequired
          ></common-input>
          <button @click=${this.handleAddStaff} class="add-btn">
            Add Staff
          </button>
        </form>
      </div>
      <!-- staff add error -->
      <div
        class=${classMap({ staff__error: true, 'd-none': !this.hasAddError })}
      >
        Error adding staff
      </div>
    </div>`;
  }
}
//  Create a class page for performing crud oooooperations on classes
