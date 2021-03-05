import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Summary from "./Summary";
import StatusBar from "./StatusBar";

const StyledToDoContainer = styled.div`
  background-color: ${({ theme }) => theme.todoContainer};
  border-radius: 0.5rem;
  margin: 1.6rem 0;
  box-shadow: 0 3.5rem 5rem -1.5rem ${({ theme }) => theme.shadowColor};
`;

const ToDoContainer = ({ children, todosLeft, onClear, onFilterChange }) => {
  return (
    <StyledToDoContainer>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Summary todosLeft={todosLeft} onClear={onClear}>
        <StatusBar onFilterChange={onFilterChange} />
      </Summary>
    </StyledToDoContainer>
  );
};

export default ToDoContainer;
