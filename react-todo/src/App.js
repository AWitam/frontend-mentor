import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightMode } from "./theme/lightMode";
import { darkMode } from "./theme/darkMode";
import Header from "./components/Header/Header";
import Main from "./components/Form/Main";
import GlobalStyle from "./theme/globalStyles";
import Background from "./components/Background/Background";

function App() {
  const [theme, setTheme] = useState("lightMode");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const handleToggle = () => {
    setMode(theme === "lightMode" ? "darkMode" : "lightMode");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme === "lightMode" ? lightMode : darkMode}>
        <Background />
        <Header themeToggle={handleToggle} theme={theme} />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
