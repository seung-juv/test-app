import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter, Route } from "react-router-dom";
import Intro from "../routes/Intro";
import Test from "../routes/Test";
import GlobalStyles from "../Styles/GlobalStyles";
import theme from "../Styles/theme";
import Result from "../routes/Result";
import Loading from "../routes/Loading";

const Wrapper = styled.section`
  min-width: 350px;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <HashRouter>
          <Wrapper>
            <Route path="/" component={Intro} exact />
            <Route path="/test" component={Test} exact />
            <Route path="/loading" component={Loading} exact />
            <Route path="/result" component={Result} />
          </Wrapper>
        </HashRouter>
      </>
    </ThemeProvider>
  );
};

export default App;
