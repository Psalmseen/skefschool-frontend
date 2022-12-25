import { css } from 'lit';
export const staffPageStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .staff-page {
    font-family: poppins;
    min-height: calc(100vh - 120px);
    position: relative;
    padding: 32px;
  }
  .no-staff {
    text-align: center;
  }
  .add-staff {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 32px;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    display: grid;
    place-content: center;
    background-color: #18233a;
    color: #fff;
    cursor: pointer;
  }
  .add-staff-modal {
    position: fixed;
    inset: 0;
    background-color: #000a;
    display: grid;
    place-content: center;
  }
  .staff-modal-form {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: 500px;
    max-width: 90vw;
    padding: 32px 16px;
    border-radius: 8px;
  }
  .add-btn {
    align-self: center;
    padding: 16px 48px;
    border: none;
    outline: none;
    background-color: #18233a;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
  .add-btn:hover {
    background-color: #213154;
  }
  .staff {
    border: 1px solid #18233a;
    display: grid;
    grid-template-columns: max-content 1fr repeat(2, max-content);
    padding: 1rem 2rem;
    border-radius: 1rem;
    align-items: center;
    margin-bottom: 2rem;
    text-transform: capitalize;
  }
  .staff > * {
    padding: 0 0.5rem;
  }
  .staff__name {
    text-transform: uppercase;
  }
  .staff__img-wrapper {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    font-size: 24px;
    text-transform: uppercase;
    line-height: 1;
    background-color: #18233a;
    color: #fff;
    display: grid;
    place-content: center;
    cursor: default;
  }
  .staff__class,
  .staff__more {
    cursor: pointer;
    transition: all 0.2s;
  }
  .staff__class:hover,
  .staff__more:hover {
    transform: scale(1.1);
    font-weight: 600;
  }
  .d-none {
    display: none;
  }
  .staff__error {
    position: fixed;
    background-color: #cc2323;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    left: 50%;
    top: 12vh;
    transform: translateX(-50%);
  }
`;
