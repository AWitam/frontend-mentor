import styled from "styled-components";
import sun from "../../assets/img/icon-sun.svg";
import moon from "../../assets/img/icon-moon.svg";

const StyledThemeSwitcher = styled.button`
  background-color: transparent;
  border: none;

  &:focus {
    outline: ${({ theme }) => theme.textSecondary} dashed 0.15rem;
  }
`;

const ThemeSwitcher = ({ theme, themeToggle }) => {
  return (
    <StyledThemeSwitcher onClick={themeToggle} onBlur={(e) => e.target.blur()}>
      <img src={theme === "lightMode" ? moon : sun} alt="Theme switcher icon" />
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;
