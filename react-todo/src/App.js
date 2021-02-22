import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightMode } from "./theme/lightMode";
import Header from "./components/Header/Header";
import Main from "./components/Form/Main";
import GlobalStyle from "./theme/globalStyles";

import Background from "./components/Background/Background";

function App() {
  const [theme, setTheme] = useState(lightMode);

  const handleToggle = (theme) => {
    setTheme(theme);
  };

  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Background />
        <Header themeToggle={handleToggle} />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
