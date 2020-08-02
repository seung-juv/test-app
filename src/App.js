import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter, Route } from "react-router-dom";
import Intro from "./routes/Intro";
import Test from "./routes/Test";
import GlobalStyles from "./Styles/GlobalStyles";
import theme from "./Styles/theme";

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
      <GlobalStyles />
      <HashRouter>
        <Wrapper>
          <Route path="/" component={Intro} exact={true} />
          <Route path="/test" component={Test} exact={true} />
        </Wrapper>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
