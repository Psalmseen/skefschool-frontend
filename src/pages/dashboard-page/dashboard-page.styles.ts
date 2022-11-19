import { css } from 'lit';

export const dashboardPageStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .dashboard-page {
    font-family: poppins;
    min-height: calc(100vh - 120px);
    background-color: #18233a;
  }
  .profile-img {
    height: calc(50vh - 60px);
    position: relative;
  }
  .profile-img::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #18233acc;
  }
  img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }
  .user-profile-img {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    border: 0.5rem solid #fff;
    color: #fff;
    font-size: 7rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5a425;
    line-height: 1;
    position: absolute;
    right: 2rem;
    transform: translateY(-50%);
    overflow: hidden;
  }
  .user-profile-img > div {
    font-family: 'Lora', serif;
    letter-spacing: 5px;
  }
  .dashboard-content {
    position: relative;
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 0rem 2rem;
  }

  .detail-container {
    border: 1px solid #f5a425;
    border-radius: 2rem;
    color: #f5a425;
    padding: 1rem 2rem;
    margin: 2rem 0;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-family: 'lora';
    transition: all 0.7s;
  }
  .link:hover {
    border-color: #f5a425;
    background-color: #fff;
    cursor: pointer;
  }
  .detail2 {
    line-height: 2;
  }
  .change-img {
    position: absolute;
    background-color: #fff;
    font-family: poppins;
    color: #18233a;
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 16px;
    transition: all 0.5s;
    transform: translateY(150px);
  }
  .change-img-open {
    transform: translateY(50px);
  }
`;
