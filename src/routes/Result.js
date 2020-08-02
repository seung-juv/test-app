import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin-top: 15px;
  font-size: 31px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Result = props => {
  const onClick = () => {
    props.history.push("/");
  };

  return (
    <Wrapper>
      <Title>테스트 결과</Title>
      <Button onClick={onClick} text="테스트 다시하기" />
    </Wrapper>
  );
};

export default Result;
