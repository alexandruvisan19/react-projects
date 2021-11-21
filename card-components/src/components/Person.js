import alex from "../images/alex.jpg";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Info = styled.div`
  padding: 10px;
  text-align: center;
`;

const HeaderBig = styled.h1`
  margin-bottom: 0;
`;

const HeaderMedium = styled.h3`
  margin-top: 2px;
  font-weight: 300;
  color: #eaac5f;
  font-size: 1em;
`;

const HeaderLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const ButtonWhite = styled.button`
  display: block;
  padding: 8px 15px;
  margin: 10px;
  background-color: #ffffff;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  width: 115px;
  transition: ease 0.5s;
  &:before {
    content: "🦄";
    padding: 0 3px 0 0;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

const ButtonBlue = styled.button`
  display: inline-block;
  padding: 8px 15px;
  margin: 10px;
  background-color: #5093e2;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 1rem;
  width: 115px;
  transition: ease 0.5s;
  &:before {
    content: "🦄";
    padding: 0 3px 0 0;
    display: inline-block;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

const Person = (props) => {
  return (
    <>
      <Image src={alex} alt="alex" />
      <Info>
        <HeaderBig>Visan Alexandru</HeaderBig>
        <HeaderMedium>Front End Developer</HeaderMedium>
        <HeaderLink href="#">alexvisan.website.com</HeaderLink>
        <ButtonContainer>
          <ButtonWhite>Email</ButtonWhite>
          <ButtonBlue>Linkedin</ButtonBlue>
        </ButtonContainer>
      </Info>
    </>
  );
};

export default Person;
