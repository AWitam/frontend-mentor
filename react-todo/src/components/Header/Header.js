import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";
import { device } from "../../theme/mediaQueries";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 3.5rem auto;
  position: relative;
  z-index: 5;
  width: 90vw;

  h1 {
    font-size: 2.7rem;
    letter-spacing: 0.35rem;
    color: var(--white);
  }

  img {
    max-height: 2rem;
  }

  @media ${device.mobileM} {
    width: 32.7rem;
    h1 {
      font-size: 3rem;
    }
  }

  @media ${device.mobileL} {
    width: 40rem;
    margin: 4.5rem auto;
  }

  @media ${device.tablet} {
    width: 44rem;
    h1 {
      font-size: 4.2rem;
    }
  }

  @media ${device.laptop} {
    width: 54rem;
    margin: 7.5rem auto 5rem auto;
  }

  @media ${device.laptopL} {
    width: 65rem;
  }
`;

const Header = ({ themeToggle, theme }) => {
  return (
    <StyledHeader>
      <h1>TODO</h1>
      <ThemeSwitcher themeToggle={themeToggle} theme={theme} />
    </StyledHeader>
  );
};

export default Header;
