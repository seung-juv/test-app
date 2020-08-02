import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";

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

const ELink = styled(Link)`
  width: 100%;
  max-width: 300px;
`;

const Intro = () => {
  return (
    <Wrapper>
      <Title>테스트</Title>
      <ELink to="/test">
        <Button text="테스트 시작하기" />
      </ELink>
    </Wrapper>
  );
};

export default Intro;
