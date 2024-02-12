import { ThemeProvider } from "styled-components";
import { Container, GlobalStyle } from "./global";
import { SocialMediaNav } from "./components/socialMediaNav";
import { Navbar } from "./components/NavBar";
import { Content } from "./components/Content";
import { PurpleTheme } from "./themes/purple";
// import { ThemeContext } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={PurpleTheme}>
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
