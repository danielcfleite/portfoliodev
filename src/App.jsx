// import { ThemeProvider } from "styled-components";
// import { Container, GlobalStyle } from "./global";
// import { SocialMediaNav } from "./components/socialMediaNav";
// import { Navbar } from "./components/NavBar";
// import { Content } from "./components/Content";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppContent } from "./components/AppContent";
import ScrollManager from "./components/ScrollManager/ScrollManager";

function App() {
  return (
    <>
      <Provider store={store}>
        <ScrollManager />
        <AppContent />
      </Provider>
    </>
  );
}

export default App;
