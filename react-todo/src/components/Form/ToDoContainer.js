import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const StyledToDoContainer = styled.div`
  background-color: ${({ theme }) => theme.todoContainer};
  border-radius: 0.5rem;
  margin: 1.6rem 0;
  box-shadow: 0 3.5rem 5rem -1.5rem ${({ theme }) => theme.shadowColor};
`;

const ToDoContainer = ({ children }) => {
  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <StyledToDoContainer
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {children}
          {provided.placeholder}
        </StyledToDoContainer>
      )}
    </Droppable>
  );
};

export default ToDoContainer;
