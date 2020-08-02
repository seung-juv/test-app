import React from "react";
import styled from "styled-components";
import TestButton from "./TestButton";

const Wrapper = styled.section`width: 440px;`;

const Index = styled.h2`
  color: ${props => props.theme.mainColor};
  font-weight: bold;
  font-size: 35px;
  padding: 0 10px;
  margin-bottom: 75px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  line-height: 1.5;
  padding: 0 10px;
  margin-bottom: 75px;
`;

const ETestButton = styled(TestButton)`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Problem = ({ idx = 0, title, test = [], onClick }) => {
  return (
    <Wrapper>
      <Index>
        Q{idx + 1}
      </Index>
      <Title>
        {title}
      </Title>
      {test.map(test => <ETestButton text={test.text} onClick={onClick} />)}
    </Wrapper>
  );
};

export default Problem;
