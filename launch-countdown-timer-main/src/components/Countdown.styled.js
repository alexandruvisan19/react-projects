import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 30px;
  max-width: 70rem;
  margin: 0 auto;

  div > div {
    padding-bottom: 25px;
    width: 120px;
    position: relative;
    overflow: hidden;
    margin: 0 20px;
  }

  div > div > span {
    font-size: 72px;
    color: hsl(345, 95%, 68%);
    font-weight: 800;
    background-color: hsl(235, 20%, 25%);
    width: 120px;
    text-align: center;
    margin: 0 auto;
    display: inline-block;
    box-shadow: 0px 8px 0px 0px #191a24;
    border-radius: 8px;
  }

  div > div:before,
  div > div:after {
    content: "";
    position: absolute;
    z-index: 6;
    top: calc(50% - 15px);
    background: #191b2a;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  div > div:before {
    left: -5px;
  }

  div > div:after {
    right: -5px;
  }

  span {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: hsl(237, 18%, 59%);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    div > div > span {
      font-size: 35px;
      width: 80px;
    }
    div > div {
      width: 80px;
      margin: 0 8px;
    }
    span {
      font-size: 10px;
    }
`;
