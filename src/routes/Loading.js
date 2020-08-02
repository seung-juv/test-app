import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h2`text-align: center;`;

export default props => {
  setTimeout(() => {
    props.history.push("/result");
  }, 3000);
  return (
    <Wrapper>
      <Text>결과를 기다리고 있습니다.</Text>
    </Wrapper>
  );
};
