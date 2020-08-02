import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 35px;
  font-weight: 800;
  margin-bottom: 50px;
`;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Intro = props => {
  const onClick = () => {
    props.history.push("/test");
  };
  return (
    <Wrapper>
      <Title>테스트</Title>
      <Button onClick={onClick} text="테스트 시작하기" />
    </Wrapper>
  );
};

export default Intro;
