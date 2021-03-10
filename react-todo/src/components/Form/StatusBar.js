import { useState } from "react";
import styled from "styled-components";
import { device } from "../../theme/mediaQueries";
import StyledButton from "../Form/StyledButton";

const StyledStatusBar = styled.div`
  background-color: ${({ theme }) => theme.todoContainer};
  font-weight: 700;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  border: none;
  position: absolute;
  top: 5rem;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  box-shadow: 0px 3px 35px ${({ theme }) => theme.shadowColor};
  font-size: var(--font-m);
  margin-top: 1.6rem;

  @media ${device.mobileL} {
    margin-top: 2rem;
  }

  @media ${device.laptop} {
    position: initial;
    background: transparent;
    box-shadow: none;
    margin: 0 auto;
    width: auto;
    padding: 0;
  }

  button {
    padding: 0 0.8rem;
    color: ${({ theme }) => theme.textStatusBar};
    cursor: pointer;
  }
  .active {
    color: var(--primary-blue);
  }
`;

const StatusBar = ({ onFilterChange }) => {
  const [highlight, setHighlight] = useState("ALL");

  const handleChange = (filter) => {
    onFilterChange(filter);
    setHighlight(filter);
  };

  return (
    <StyledStatusBar>
      <StyledButton
        className={highlight === "ALL" ? "active" : ""}
        onClick={(e) => {
          handleChange("ALL", e);
        }}
      >
        All
      </StyledButton>
      <StyledButton
        className={highlight === "ACTIVE" ? "active" : ""}
        onClick={(e) => {
          handleChange("ACTIVE", e);
        }}
      >
        Active
      </StyledButton>
      <StyledButton
        className={highlight === "COMPLETED" ? "active" : ""}
        onClick={(e) => {
          handleChange("COMPLETED", e);
        }}
      >
        Completed
      </StyledButton>
    </StyledStatusBar>
  );
};

export default StatusBar;
