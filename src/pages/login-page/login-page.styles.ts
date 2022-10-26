import { css } from 'lit';

export const loginPageStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: poppins;
  }
  .login-page {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;
    width: 100%;
  }
  .video-wrapper {
    position: relative;
    height: 100vh;
  }
  .video-wrapper::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #18233acc;
  }
  video {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 25%;
  }
  .logo {
    font-size: 2.5rem;
    z-index: 2;
    padding: 2rem;
    color: white;
    position: absolute;
    top: 0;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 2px;
    word-spacing: 1rem;
    line-height: 1.1;
  }
  .logo-mob {
    font-size: 1.7rem;
  }
  .logo span {
    color: #f5a425;
  }
  .login-content {
    background-color: #18233a77;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-content-header {
    position: absolute;
    top: 2rem;
    left: 2rem;
    right: 2rem;
    height: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .login-content-header h1 {
    font-size: 2.5rem;
  }

  .login-content-header p {
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: 600;
  }
  .login-content-header p:hover {
    border-bottom: 2px solid #f5a425;
  }
  .login-form {
    background-color: #18233a;
    width: 80%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 60vh;
  }
  .email,
  .password {
    width: 80%;
  }
  .login-btn {
    font-size: 1.5rem;
    color: #e5e5e5;
  }
  @media screen and (max-width: 768px) {
    .login-page {
      grid-template-columns: 1fr;
    }
    .video-wrapper {
      display: none;
    }
  }
`;
