import { css } from 'lit';

export const buttonStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: poppins;
  }
  .btn {
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    text-transform: capitalize;
    cursor: pointer;
  }

  .py-1 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .py-2 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .py-3 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .px-1 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .px-2 {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .px-3 {
    padding-left: 4.5rem;
    padding-right: 4.5rem;
  }

  .primary {
    background-color: #f5a425;
  }
  .primary:hover {
    background-color: #efb14e;
  }
  .inactive {
    background-color: #ebc890 !important;
    cursor: not-allowed;
  }
`;
