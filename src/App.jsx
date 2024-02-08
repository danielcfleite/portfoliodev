import { ThemeProvider } from "styled-components";
import { Container, GlobalStyle } from "./global";
import { DarkTheme } from "./themes/dark";
import { SocialMediaNav } from "./components/socialMediaNav";
import { Navbar } from "./components/NavBar";
// import { PurpleTheme } from "./themes/purple";

function App() {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <GlobalStyle />
        <Container>
          <Navbar />
          <h1>Olá, Sou Daniel</h1>
        </Container>

        <SocialMediaNav />
      </ThemeProvider>
    </>
  );
}

export default App;
