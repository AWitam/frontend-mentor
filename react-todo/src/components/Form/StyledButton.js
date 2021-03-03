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

  > svg {
    transform: scale(0.7);

    @media ${device.laptop} {
      visibility: hidden;
      transform: scale(1);
    }
  }

  :focus {
    outline: none;
  }

  &:hover {
    transform: scale(0.95);
    path {
      filter: brightness(1.7);
    }
  }
`;

export default StyledButton;
