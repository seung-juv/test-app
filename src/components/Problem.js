import React from "react";
import styled from "styled-components";
import TestButton from "./TestButton";

const Wrapper = styled.section`
  width: 440px;
  transform: translateX(${props => (props.nowPage - 1) * -440}px);
  transition: .25s transform ease-out;
`;

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

const Problem = ({ idx = 0, title, test = [], nowPage, onClick }) => {
  return (
    <Wrapper nowPage={nowPage}>
      <Index>
        Q{idx + 1}
      </Index>
      <Title>
        {title}
      </Title>
      {test.map((test, idx) => <ETestButton key={idx} text={test.text} onClick={onClick} />)}
    </Wrapper>
  );
};

export default Problem;
