import styled from "styled-components";
import { device } from "../../theme/mediaQueries";
import Input from "./Input";
import ToDoContainer from "./ToDoContainer";
import ToDo from "./ToDo";
import Summary from "./Summary";
import StatusBar from "./StatusBar";
import Info from "./Info";
import { useState, useReducer, useEffect } from "react";
import store from "../../reducer/store";
import initialState from "../../reducer/initialState";

const StyledMain = styled.main`
  @media ${device.mobileM} {
    width: 32.7rem;
    margin: 0 auto;
    font-size: var(--font-sm);
  }
`;

const Main = () => {
  const [state, dispatch] = useReducer(store, initialState);
  const [filter, setFilter] = useState("ALL");
  console.log(initialState);
  console.log(state);

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

  return (
    <StyledMain>
      <Input addTask={handleAddTask} />
      <ToDoContainer>
        {filteredTodos.map((todo) => (
          <ToDo
            key={todo.id}
            task={todo.task}
            id={todo.id}
            completed={todo.completed}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        ))}
        <Summary
          todosLeft={state.todos.length}
          onClear={handleClearCompleted}
        ></Summary>
      </ToDoContainer>
      <StatusBar onFilterChange={handleFilterChange} />
      <Info />
    </StyledMain>
  );
};

export default Main;
