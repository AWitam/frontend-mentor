import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 3.5rem 2.4rem;
  position: relative;
  z-index: 5;

  h1 {
    font-size: 2.7rem;
    letter-spacing: 0.35rem;
    color: var(--white);
  }

  img {
    max-height: 2rem;
  }
`;

const Header = ({ themeToggle }) => {
  return (
    <StyledHeader>
      <h1>TODO</h1>
      <ThemeSwitcher themeToggle={themeToggle} />
    </StyledHeader>
  );
};

export default Header;
