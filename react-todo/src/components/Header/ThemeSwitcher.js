import styled from "styled-components";
import { useEffect, useState } from "react";
import { lightMode } from "../../theme/lightMode";
import { darkMode } from "../../theme/darkMode";
import StyledButton from "../Form/StyledButton";
import sun from "../../assets/img/icon-sun.svg";
import moon from "../../assets/img/icon-moon.svg";

const ThemeSwitcher = ({ themeToggle }) => {
  const [theme, setTheme] = useState(lightMode);

  useEffect(() => {
    themeToggle(theme);
  }, [theme, themeToggle]);

  return (
    <StyledButton
      onClick={() => setTheme(theme === lightMode ? darkMode : lightMode)}
    >
      <img src={theme === lightMode ? moon : sun} alt="Theme switcher icon" />
    </StyledButton>
  );
};

export default ThemeSwitcher;
