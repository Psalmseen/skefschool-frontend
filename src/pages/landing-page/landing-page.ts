import { LitElement, html, CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { landingPageStyles } from './landing-page.styles';
import gradVid from '../../assets/graduation.mp4';
import '../../components/button/button';

@customElement('landing-page')
export class LandingPage extends LitElement {
  static styles: CSSResultGroup = landingPageStyles;
  protected render(): unknown {
    return html`<div class="landing-page">
      <div class="bg_vid_wrapper">
        <video class="bg_vid" src=${gradVid} autoplay loop></video>
      </div>
      <div class="content">
        <p>SKEF School online platform</p>
        <h1 class="main-text"><span> Your </span> Classroom</h1>
        <div @click=${() => Router.go('/dashboard')}>
          <button-component .label=${'Get Started'}></button-component>
        </div>
      </div>
    </div>`;
  }
}
