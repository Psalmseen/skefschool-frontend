import { css } from 'lit';

export const landingPageStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: poppins;
  }
  .landing-page {
    height: calc(100vh - 120px);
    position: relative;
    display: grid;
    place-content: center;
    color: #fff;
    font-size: 2rem;
    align-items: center;
  }
  .content > * {
    width: fit-content;
    margin: 0 auto;
  }
  .bg_vid_wrapper {
    position: absolute;
    inset: 0;
    z-index: -1;
  }
  .bg_vid_wrapper::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #18233acc;
  }
  .bg_vid {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .main-text {
    font-size: 5rem;
    text-transform: uppercase;
    margin: 2rem auto;
  }
  .main-text span {
    color: #f5a425;
  }
  @media screen and (max-width: 768px) {
    .content {
      font-size: 1.1rem;
    }
    .main-text {
      font-size: 3rem;
      text-align: center;
      margin: 1rem auto;
      line-height: 0.8;
    }
  }
`;
