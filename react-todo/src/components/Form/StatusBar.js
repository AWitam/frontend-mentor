import { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../../theme/mediaQueries";
import StyledButton from "../Form/StyledButton";

const StyledStatusBar = styled.div`
  background-color: ${({ theme }) => theme.todoContainer};
  font-weight: 700;
  padding: 1.5rem 2rem;
  margin: 1.5rem 0;
  border-radius: 0.5rem;
  border: none;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0px 3px 35px ${({ theme }) => theme.shadowColor};

  @media ${device.mobileM} {
    font-size: var(--font-m);
  }
  button {
    padding: 0 0.8rem;
    color: ${({ theme }) => theme.textStatusBar};
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
