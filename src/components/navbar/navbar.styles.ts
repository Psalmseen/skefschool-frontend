import { css } from 'lit';

export const navbarStyle = css`
  * {
    padding: 0;
    margin: 0;
    font-family: poppins;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  .navbar {
    background-color: #18233a;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    color: #fff;
    gap: 1rem;
    height: 120px;
  }
  .navbar-mob {
    padding: 1rem;
  }
  .logo {
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 2px;
    word-spacing: 1rem;
    line-height: 1.1;
    cursor: pointer;
  }
  .logo-mob {
    font-size: 1.7rem;
  }
  .logo span {
    color: #f5a425;
  }
  .nav {
    display: flex;
    font-size: 1.5rem;
    gap: 1rem;
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    max-width: 600px;
  }
  .nav-mob {
    position: absolute;
    left: 30%;
    right: 0;
    justify-content: space-evenly;
    height: 0;
    width: unset;
    max-width: unset;
    flex-direction: column;
    top: 100%;
    background-color: #18233a;
    transition: height 0.3s;
    z-index: 99;
  }
  .nav-mob > * {
    display: none;
  }
  .nav-mob-open {
    height: 50vh;
  }
  .nav-mob-open > * {
    display: unset;
  }
  .login {
    background-color: #f5a425;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
  }
  .login:hover {
    background-color: #efb14e;
  }
  .nav-item:hover {
    border-bottom: 2px solid #f5a425;
  }
  /*  Hamburger style here  */
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .hamRotate.active {
    transform: rotate(45deg);
  }
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #fff;
    stroke-width: 5.5;
    stroke-linecap: round;
  }
  .ham8 .top {
    stroke-dasharray: 40 160;
  }
  .ham8 .middle {
    stroke-dasharray: 40 142;
    transform-origin: 50%;
    transition: transform 400ms;
  }
  .ham8 .bottom {
    stroke-dasharray: 40 85;
    transform-origin: 50%;
    transition: transform 400ms, stroke-dashoffset 400ms;
  }
  .ham8.active .top {
    stroke-dashoffset: -64px;
  }
  .ham8.active .middle {
    transform: rotate(90deg);
  }
  .ham8.active .bottom {
    stroke-dashoffset: -64px;
  }
  /* Hamburger style ends here */
  .d-none {
    display: none;
  }
`;
