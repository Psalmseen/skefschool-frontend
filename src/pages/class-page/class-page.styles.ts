import { css } from 'lit';

export const classPageStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .class-subject-page {
    font-family: poppins;
    min-height: calc(100vh - 120px);
    position: relative;
    padding: 32px;
    gap: 32px;
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    /* text-align: center; */
  }
  .no-staff {
    /* text-align: center; */
  }
`;
