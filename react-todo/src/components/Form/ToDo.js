import styled from "styled-components";
import { useState } from "react";
import Checkbox from "./Checkbox";
import { ReactComponent as Cross } from "../../assets/img/icon-cross.svg";
import StyledButton from "../Form/StyledButton";
import { device } from "../../theme/mediaQueries";
import { Draggable } from "react-beautiful-dnd";

const appearDuration = 500;
const transitionName = `example`;

const StyledToDo = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  border-bottom: 0.1rem solid ${({ theme }) => theme.textSecondary};
  padding: 1.8rem 0;
  display: flex;

  @media ${device.laptop} {
    padding: 2rem 0;
  }

  :focus {
    outline: ${({ theme }) => theme.textSecondary} dashed 0.15rem;
  }

  .todo-wrapper {
    padding: 0 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media ${device.laptop} {
      padding: 0 2.4rem;
    }
  }

  label {
    display: flex;
    align-items: center;
    position: relative;
    transition: color 0.2s ease;

    :focus {
      outline: ${({ theme }) => theme.textSecondary} dashed 0.15rem;
    }

    p {
      display: inline-block;
      padding-top: 0.4rem;
      position: relative;
    }

    &.completed::before {
      content: "";
      position: absolute;
      width: 0%;
      height: 0.12rem;
      background: ${({ theme }) => theme.textSecondary};
      margin-left: 3.2rem;
      animation: strike 1s forwards;
      transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &.completed {
      color: ${({ theme }) => theme.textSecondary};
      position: relative;
    }
  }

  @keyframes strike {
    from {
      width: 0%;
    }
    to {
      width: calc(100% - 3.2rem);
    }
  }

  :hover {
    svg {
      @media ${device.laptop} {
        visibility: visible;
      }
    }
  }

  &.${transitionName}-appear {
    opacity: 0.01;
  }

  &.${transitionName}-appear-active {
    opacity: 1;
    transition: opacity ${appearDuration}ms ease-out;
  }
`;

const ToDo = ({ task, id, completed, onComplete, onDelete, index }) => {
  const [isCompleted, setCompleted] = useState(completed);

  const handleChange = (id, task) => {
    onComplete(id, task);
    setCompleted(!isCompleted);
  };

  const handleClick = (id) => {
    onDelete(id);
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <StyledToDo
          key={id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="todo-wrapper">
            <label className={isCompleted ? "completed" : null}>
              <Checkbox
                checked={isCompleted}
                onChange={() => handleChange(id, task)}
              />
              <p>{task}</p>
            </label>
            <StyledButton onClick={() => handleClick(id)}>
              <Cross />
            </StyledButton>
          </div>
        </StyledToDo>
      )}
    </Draggable>
  );
};

export default ToDo;
