import React from "react";
import styled from "styled-components";
import TestButton from "./TestButton";

const Wrapper = styled.section`
  width: 440px;
  margin-right: 50px;
  transform: translateX(${props => (props.nowPage - 1) * -490}px);
  transition: .35s transform ease-in;
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
  ${props =>
    props.animate
      ? `opacity: 0; transform: translateX(25px); pointer-event: none; cursor: default;`
      : `opacity: 1; transition: .25s all ease-in; transform: translateX(0); pointer-event: all;`}
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Problem = ({ idx = 0, title, test = [], nowPage, onClick, animate }) => {
  return (
    <Wrapper nowPage={nowPage}>
      <Index>
        Q{idx + 1}
      </Index>
      <Title>
        {title}
      </Title>
      {test.map((test, idx) =>
        <ETestButton key={idx} text={test.text} animate={animate} onClick={onClick} />
      )}
    </Wrapper>
  );
};

export default Problem;
