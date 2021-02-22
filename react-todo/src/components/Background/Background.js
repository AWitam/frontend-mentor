import styled from "styled-components";

import { lightMode } from "../../theme/lightMode";

const StyledBackground = styled.div`
  background-color: ${({ theme }) => theme.background};
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const StyledImg = styled.div`
  background-image: ${({ theme }) => theme.bgImage};
  background-position: center;
  height: 20rem;
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
