import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 70rem;
  color: white;

  h1 {
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 4px;
    padding: 15px;
    margin-bottom: 30px;
    color: #e1dfe6;
    position: relative;
    bottom: 40px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 16px;
    }
  }
`;
