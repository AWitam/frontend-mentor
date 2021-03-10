import styled from "styled-components";
import { device } from "../../theme/mediaQueries";

const StyledBackground = styled.div`
  background-color: ${({ theme }) => theme.background};
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.2s ease;
`;

const StyledImg = styled.div`
  background-image: ${({ theme }) => theme.bgImage};
  background-position: center top;
  height: 20rem;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${device.mobileL} {
    background-image: ${({ theme }) => theme.bgImageLarge};
    background-size: auto;
    height: 22rem;
  }

  @media ${device.tablet} {
    height: 24rem;
  }

  @media ${device.laptop} {
    height: 30rem;
  }

  @media ${device.laptopL} {
    background-size: cover;
  }
`;

const Background = ({ children }) => {
  return (
    <StyledBackground>
      <StyledImg />
      {children}
    </StyledBackground>
  );
};

export default Background;
