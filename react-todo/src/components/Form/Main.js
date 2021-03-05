import styled from "styled-components";
import { device } from "../../theme/mediaQueries";
import Input from "./Input";
import ToDoContainer from "./ToDoContainer";
import ToDo from "./ToDo";

import Info from "./Info";
import { useState, useReducer, useEffect } from "react";
import store from "../../reducer/store";
import initialState from "../../reducer/initialState";
import { DragDropContext } from "react-beautiful-dnd";

const StyledMain = styled.main`
  margin: 0 auto;
  font-size: var(--font-sm);
  position: relative;
  width: 90vw;

  @media ${device.mobileM} {
    width: 32.7rem;
  }

  @media ${device.mobileL} {
    width: 40rem;
  }

  @media ${device.tablet} {
    width: 44rem;
    font-size: var(--font-m);
  }

  @media ${device.laptop} {
    width: 54rem;
    font-size: var(--font-l);
  }

  @media ${device.laptopL} {
    width: 65rem;
  }
`;

const Main = () => {
  const [state, dispatch] = useReducer(store, initialState);
  const [filter, setFilter] = useState("ALL");

  const filteredTodos = state.todos.filter((todo) => {
    if (filter === "ALL") {
      return true;
    }
    if (filter === "COMPLETED" && todo.completed) {
      return true;
    }
    if (filter === "ACTIVE" && !todo.completed) {
      return true;
    }
    return false;
  });

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handleComplete = (idCompleted, taskCompleted) => {
    dispatch({
      type: "COMPLETE_TODO",
      taskName: taskCompleted,
      id: idCompleted,
    });
  };

  const handleAddTask = (value) => {
    dispatch({ type: "ADD_TODO", taskName: value, completed: false });
  };

  const handleDelete = (idToDelete) => {
    dispatch({ type: "DELETE_TODO", id: idToDelete });
  };

  const handleClearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state]);

  const itemsLeft = state.todos.filter((task) => (task.completed ? null : task))
    .length;

  const onDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }
    dispatch({
      type: "DRAG",
      todoList: state.todos,
      startIndex: source.index,
      endIndex: destination.index,
    });
  };

  return (
    <StyledMain>
      <Input addTask={handleAddTask} />
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <ToDoContainer
            todosLeft={itemsLeft}
            onClear={handleClearCompleted}
            onFilterChange={handleFilterChange}
          >
            {filteredTodos.map((todo, index) => (
              <ToDo
                key={todo.id}
                task={todo.task}
                id={todo.id}
                completed={todo.completed}
                onComplete={handleComplete}
                onDelete={handleDelete}
                index={index}
              />
            ))}
          </ToDoContainer>
        </DragDropContext>
      </div>

      <Info />
    </StyledMain>
  );
};

export default Main;
