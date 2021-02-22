import styled from "styled-components";
import StyledButton from "../Form/StyledButton";

const StyledSummary = styled.div`
  padding: 1.8rem 2rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.textStatusBar};
`;

const Summary = ({ todosLeft, onClear }) => {
  return (
    <StyledSummary>
      <p>
        {todosLeft === 1 ? `${todosLeft} item left` : `${todosLeft} items left`}
      </p>
      <StyledButton onClick={onClear}>Clear completed</StyledButton>
    </StyledSummary>
  );
};

export default Summary;
