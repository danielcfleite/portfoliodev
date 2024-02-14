import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Container, GlobalStyle } from "../../global";
import { Navbar } from "../NavBar";
import { Content } from "../Content";
import { SocialMediaNav } from "../socialMediaNav";

export const AppContent = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Content />
      </Container>
      <SocialMediaNav />
    </ThemeProvider>
  );
};
