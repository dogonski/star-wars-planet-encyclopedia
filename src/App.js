import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import data from './assets/data.json';
import GlobalStyle from './theme/GlobalStyles';
import theme from './theme/theme';
import logo from './assets/LOGO.svg';
import FilmTab from './components/FilmTab';

const Wrapper = styled.div`
  margin: 10vw auto;
  border-radius: 15px;
  width: 90vw;
  max-width: 1500px;
  height: auto;
  padding-bottom: 30px;
  background-color: ${theme.color.background};
  justify-content: center;
`;
const StyledLogo = styled.img`
  display: block;
  width: 40%;
  max-width: 315px;
  height: 20%;
  padding-top: 5%;
  margin: 20px auto;
`;
const FilmsWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <StyledLogo src={logo} alt="logo" />
        <FilmsWrapper>
          {data.data.films.map(({ title, id }) => (
            <>
              <FilmTab title={title} id={id} key={id} />
            </>
          ))}
        </FilmsWrapper>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
