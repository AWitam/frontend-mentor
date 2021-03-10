import styled from "styled-components";
import checkmark from "../../assets/img/icon-check.svg";
import { device } from "../../theme/mediaQueries";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  cursor: pointer;
`;

const StyledCheckbox = styled.div`
  margin-right: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ checked, theme }) =>
    checked ? `none` : `0.15rem solid ${theme.textSecondary}`};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: ${({ checked, theme }) =>
    checked ? " var(--linear-gradient)" : `${(theme) => theme.todoContainer}`};
  animation: ${({ checked }) => (checked ? " scale 0.4s" : "none")};

  ${HiddenCheckbox}:focus+ & {
    outline: ${({ theme }) => theme.textSecondary} dashed 0.15rem;
  }

  img {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
    animation: ${({ checked }) => (checked ? " check 0.4s" : "none")};
  }

  @keyframes scale {
    50% {
      transform: scale(1.2);
    }
  }

  @keyframes check {
    50% {
      transform: scale(0.8);
      opacity: 1;
      rotate: 15deg;
    }
  }

  @media ${device.laptop} {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Checkbox = ({ checked, ...props }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <img src={checkmark} alt="checkmark" />
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default Checkbox;
