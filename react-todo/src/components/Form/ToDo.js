import styled from "styled-components";
import { useState } from "react";
import Checkbox from "./Checkbox";
import cross from "../../assets/img/icon-cross.svg";
import StyledButton from "../Form/StyledButton";

const StyledToDo = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  border-bottom: 0.1rem solid ${({ theme }) => theme.textSecondary};
  padding: 1.8rem 0;
  display: flex;

  .todo-wrapper {
    padding: 0 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  label {
    display: flex;
    align-items: center;

    p {
      display: inline-block;

      padding-top: 0.4rem;
    }

    &.completed {
      text-decoration: line-through;
      color: ${({ theme }) => theme.textSecondary};
    }
  }

  img {
    max-height: 1.4rem;
  }
`;

const ToDo = ({ task, id, completed, onComplete, onDelete }) => {
  const [isCompleted, setCompleted] = useState(completed);

  const handleChange = (id, task) => {
    onComplete(id, task);
    setCompleted(!isCompleted);
  };

  const handleClick = (id) => {
    onDelete(id);
  };

  return (
    <StyledToDo key={id}>
      <div className="todo-wrapper">
        <label className={isCompleted ? "completed" : null}>
          <Checkbox
            checked={isCompleted}
            onComplete={() => handleChange(id, task)}
          />
          <p>{task}</p>
        </label>
        <StyledButton onClick={() => handleClick(id)}>
          <img src={cross} alt="delete icon" />
        </StyledButton>
      </div>
    </StyledToDo>
  );
};

export default ToDo;
