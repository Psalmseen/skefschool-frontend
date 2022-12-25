import { CSSResultGroup, html } from 'lit';
import { MobxLitElement } from '@adobe/lit-mobx';
import { customElement, state } from 'lit/decorators.js';
import { userStore } from '../../store/user-store';
import { Router } from '@vaadin/router';
import { dashboardPageStyles } from './dashboard-page.styles';
import student from '../../assets/student.jpg';
import { classMap } from 'lit/directives/class-map.js';
import { authFetch } from '../../utils/customAPI';
import { IUser } from '../../utils/interfaces';
import { backendHost } from '../../utils/utils';
import '../../components/input/input';

@customElement('dashboard-page')
export class DashboardPage extends MobxLitElement {
  static styles?: CSSResultGroup = dashboardPageStyles;
  @state() isChangeImgOpen = false;
  connectedCallback(): void {
    super.connectedCallback();
    if (!userStore.isloggedIn) {
      Router.go('login');
    }
  }
  handleChangeImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/png, image/gif, image/jpeg';

    input.addEventListener('change', async ({ target: { files } }: any) => {
      try {
        const file = files[0];
        const data = new FormData();
        data.append('image', file);

        await authFetch.post('/upload-profile-image', data);
        const {
          data: { user },
        } = await authFetch.get('/user');
        userStore.setUser(user as unknown as IUser);
      } catch (err) {
        console.log(err);
      }
    });
    input.click();
  }
  protected render(): unknown {
    return html`<div class="dashboard-page">
      <div class="profile-img">
        <img src=${student} />
      </div>
      <div class="dashboard-content">
        <div
          @mouseenter=${() => (this.isChangeImgOpen = true)}
          @mouseleave=${() => {
            this.isChangeImgOpen = false;
          }}
          class="user-profile-img"
        >
          ${userStore.user?.imageUrl
            ? html`<img src=${backendHost + '/' + userStore.user.imageUrl} />`
            : html`<div>
                ${userStore.user?.name.split(
                  ' '
                )[0][0]}${userStore.user?.name.split(' ')[1][0]}
              </div>`}
          <p
            @click=${this.handleChangeImage}
            class=${classMap({
              'change-img': true,
              'change-img-open': this.isChangeImgOpen,
            })}
          >
            change profile picture
          </p>
        </div>
        <div class="user-profile-detail">
          <div class="detail-container">
            <p class="title">name</p>
            <h2 class="detail">${userStore.user?.name}</h2>
          </div>
          <div class="detail-container">
            <p class="title">Email address</p>
            <h2 class="detail">${userStore.user?.email}</h2>
          </div>
          <div class="detail-container">
            <p class="title">Position</p>
            <h2 class="detail">${userStore.user?.role}</h2>
          </div>
        </div>
        <div class="user-profile-detail">
          ${userStore.user?.role === 'admin'
            ? html`
                <div
                  @click=${() => Router.go('/staff')}
                  class="detail-container link"
                >
                  <h2 class="detail2">Staffs</h2>
                </div>
                <div
                  @click=${() => Router.go('classes')}
                  class="detail-container link"
                >
                  <h2 class="detail2">Classes</h2>
                </div>
              `
            : userStore.user?.role === 'staff'
            ? html` <div class="detail-container link">
                <h2 class="detail2">Student</h2>
              </div>`
            : html` <div class="detail-container link">
                <h2 class="detail2">Result</h2>
              </div>`}

          <div class="detail-container link">
            <h2 class="detail2">Change password</h2>
          </div>
        </div>
      </div>
    </div>`;
  }
}
