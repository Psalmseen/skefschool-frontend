// Email
import { css } from 'lit';

export const commonInputStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: poppins;
  }
  .input-container {
    position: relative;
    height: 64px;
  }
  .input-container-mobile {
    height: 48px;
  }

  .text-input {
    background-color: transparent;
    height: 100%;
    display: block;
    width: 100%;
    border-radius: 4px;
    position: relative;
    z-index: 1;
    color: #1d252d;
    outline: none;
    font-size: 18px;
    padding-left: 24px;
  }
  .text-input-mobile {
    font-size: 14px;
  }

  .placeholder-text {
    z-index: 0;
    position: absolute;
    text-transform: capitalize;
    top: 50%;
    color: #8ba6c1;
    font-size: 18px;
    padding: 4px;
    left: 20px;
    transform: translateY(-50%);
    transition: all 0.2s;
  }
  .placeholder-text > span {
    display: none;
  }
  .placeholder-text-mobile {
    font-size: 14px;
  }
  .focused-placeholder-text {
    font-size: 12px;
    top: 0;
    background-color: #fff;
    color: #506d85;
    z-index: 1;
  }
  .focused-placeholder-text-dark {
    background-color: #18233a;
    color: #c1cad1;
  }
  .focused-placeholder-text > span {
    display: inline;
  }

  .error {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #cc0c2f;
    gap: 4px;
    margin-top: 6px;
  }
  .error-icon {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    color: #fff;
    background: #cc0c2f;
    font-size: 7px;
    display: flex;
    justify-content: center;
    line-height: 1;
    align-items: center;
  }
  .eye-icon {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    display: flex;
    z-index: 1;
  }

  .d-none {
    display: none;
  }
`;
