import styled from "styled-components";
import StyledButton from "../Form/StyledButton";
import { device } from "../../theme/mediaQueries";

const StyledSummary = styled.div`
  padding: 1.8rem 2rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.textStatusBar};
  position: relative;
  margin-bottom: 9rem;

  @media ${device.laptop} {
    font-size: var(--font-m);
    padding: 1.8rem 2.4rem;
    margin-bottom: 5rem;
  }

  :focus {
    outline: 1px solid red;
  }
`;

const Summary = ({ todosLeft, onClear, children }) => {
  return (
    <StyledSummary>
      <p>
        {todosLeft === 1 ? `${todosLeft} item left` : `${todosLeft} items left`}
      </p>
      {children}
      <StyledButton onClick={onClear}>Clear completed</StyledButton>
    </StyledSummary>
  );
};

export default Summary;
