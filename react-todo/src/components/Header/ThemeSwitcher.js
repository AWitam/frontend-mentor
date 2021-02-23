import styled from "styled-components";
import { useEffect, useState } from "react";
import { lightMode } from "../../theme/lightMode";
import { darkMode } from "../../theme/darkMode";
import sun from "../../assets/img/icon-sun.svg";
import moon from "../../assets/img/icon-moon.svg";

const StyledThemeSwitcher = styled.button`
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`;

const ThemeSwitcher = ({ themeToggle }) => {
  const [theme, setTheme] = useState(lightMode);

  useEffect(() => {
    themeToggle(theme);
  }, [theme, themeToggle]);

  return (
    <StyledThemeSwitcher
      onClick={() => setTheme(theme === lightMode ? darkMode : lightMode)}
    >
      <img src={theme === lightMode ? moon : sun} alt="Theme switcher icon" />
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;
