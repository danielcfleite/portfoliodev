import { ThemeProvider } from "styled-components";
import { Container, GlobalStyle } from "./global";
import { DarkTheme } from "./themes/dark";
import { SocialMediaNav } from "./components/socialMediaNav";
import { Navbar } from "./components/NavBar";
import { Content } from "./components/Content";

function App() {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <GlobalStyle />
        <Container>
          <Navbar />
          <Content />
        </Container>
        <SocialMediaNav />
      </ThemeProvider>
    </>
  );
}

export default App;
