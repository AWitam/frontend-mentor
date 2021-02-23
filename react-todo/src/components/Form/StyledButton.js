import styled from "styled-components";
import { device } from "../../theme/mediaQueries";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;
  color: inherit;

  > img {
    max-height: 1.4rem;

    @media ${device.laptop} {
      visibility: hidden;
    }
  }

  :focus {
    outline: none;
  }
`;

export default StyledButton;
