import styled from "styled-components";

const StyledToDoContainer = styled.div`
  background-color: ${({ theme }) => theme.todoContainer};
  border-radius: 0.5rem;
  margin: 1.6rem 0;
  box-shadow: 0px 6px 25px ${({ theme }) => theme.shadowColor};
`;

const ToDoContainer = ({ children }) => {
  return <StyledToDoContainer>{children}</StyledToDoContainer>;
};

export default ToDoContainer;
