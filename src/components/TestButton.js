import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 0 30px;
  height: 100px;
  font-size: 20px;
  align-items: center;
  border-radius: 15px;
  font-weight: 500;
  cursor: pointer;
  width: 440px;
  background-color: ${props => props.theme.lightColor};
  opacity: 1;
  transform: translate(0px, 0px);
  &:hover {
    background-color: ${props => props.theme.mainColor};
    color: white;
  }
`;

const TestButton = ({ text, onClick, className }) => {
  return (
    <Container onClick={onClick} className={className}>
      {text}
    </Container>
  );
};

export default TestButton;
