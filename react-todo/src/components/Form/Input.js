import { useState } from "react";
import styled from "styled-components";
import { device } from "../../theme/mediaQueries";
import Checkbox from "./Checkbox";

const StyledInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Create a new todo...",
}))`
  background-color: ${({ theme }) => theme.todoContainer};

  border: none;
  width: 100%;

  ::placeholder {
    font-size: var(--font-sm);
    font-family: "Josefin Sans", sans-serif;
    color: ${({ theme }) => theme.textStatusBar};
    line-height: 1.7;
  }
  ::-moz-placeholder {
    opacity: 1;
  }

  :focus {
    outline: none;
  }
`;

const StyledForm = styled.form`
  padding: 1.6rem 2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.todoContainer};
  display: flex;
  align-items: center;
`;

const Input = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    setValue("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {" "}
      <Checkbox disabled={true} />
      <StyledInput onChange={handleChange} value={value} />
    </StyledForm>
  );
};

export default Input;
