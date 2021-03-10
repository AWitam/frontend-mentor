import { useState } from "react";
import styled from "styled-components";
import { device } from "../../theme/mediaQueries";
import Checkbox from "./Checkbox";

const StyledInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Create a new todo...",
}))`
  background-color: ${({ theme }) => theme.todoContainer};
  font-family: inherit;
  font-size: var(--font-sm);
  color: ${({ theme }) => theme.textPrimary};
  border: none;
  width: 100%;

  @media ${device.tablet} {
    font-size: var(--font-m);
  }

  @media ${device.laptop} {
    font-size: var(--font-l);
    padding-top: 0.4rem;
  }

  ::placeholder {
    font-size: var(--font-sm);
    font-family: "Josefin Sans", sans-serif;
    color: ${({ theme }) => theme.textStatusBar};
    line-height: 1.7;

    @media ${device.tablet} {
      font-size: var(--font-m);
    }

    @media ${device.laptop} {
      font-size: var(--font-l);
      line-height: 1.2;
    }
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

  @media ${device.laptop} {
    padding: 1.6rem 2.4rem;
  }

  :focus-within {
    outline: dashed 0.15rem ${({ theme }) => theme.textSecondary};
  }
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
      <Checkbox className="input-checkbox" disabled={true} />
      <StyledInput onChange={handleChange} value={value} />
    </StyledForm>
  );
};

export default Input;
