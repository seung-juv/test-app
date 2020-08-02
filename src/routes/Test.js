import React, { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import Progress from "react-progressbar";
import Problem from "../components/Problem";

const problems = [
  {
    title: "1번문제 타이틀",
    test: [{ text: "문항 1번" }, { text: "문항 2번" }]
  },
  {
    title: "2번문제 타이틀",
    test: [{ text: "문항 1번" }, { text: "문항 2번" }]
  },
  {
    title: "3번문제 타이틀",
    test: [{ text: "문항 1번" }, { text: "문항 2번" }]
  },
  {
    title: "4번문제 타이틀",
    test: [{ text: "문항 1번" }, { text: "문항 2번" }]
  },
  {
    title: "5번문제 타이틀",
    test: [{ text: "문항 1번" }, { text: "문항 2번" }]
  },
  {
    title: "6번문제 타이틀",
    test: [{ text: "문항 1번" }, { text: "문항 2번" }]
  },
  {
    title: "7번문제 타이틀",
    test: [{ text: "문항 1번" }, { text: "문항 2번" }]
  },
  {
    title: "8번문제 타이틀",
    test: [{ text: "문항 1번" }, { text: "문항 2번" }]
  },
  {
    title: "9번문제 타이틀",
    test: [{ text: "문항 1번" }, { text: "문항 2번" }]
  }
];
const Wrapper = styled.section``;

const ProblemWrapper = styled.div`
  width: 440px;
  overflow: hidden;
`;

const ProblemContainer = styled.section`
  display: flex;
  width: 440px;
  flex-flow: row nowrap;
  margin-bottom: 100px;
`;

const ProgressContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Page = styled.div`
  text-align: right;
  font-weight: 600;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
`;

const EProgress = styled(Progress)`
  border-radius: 7px;
  background-color: ${props => props.theme.lightColor};
  overflow: hidden;
`;

const Test = () => {
  const [nowPage, setNowPage] = useState(1);
  const progress = 100 / problems.length * nowPage;
  const theme = useContext(ThemeContext);
  const onClick = () => {
    nowPage < problems.length && setNowPage(nowPage + 1);
  };
  return (
    <Wrapper>
      <ProblemWrapper>
        <ProblemContainer>
          {problems.map((problem, idx) =>
            <Problem key={idx} idx={idx} {...problem} nowPage={nowPage} onClick={onClick} />
          )}
        </ProblemContainer>
      </ProblemWrapper>
      <ProgressContainer>
        <Page>
          {`${nowPage}/${problems.length}`}
        </Page>
        <EProgress completed={progress} color={theme.mainColor} height={7} />
      </ProgressContainer>
    </Wrapper>
  );
};

export default Test;
