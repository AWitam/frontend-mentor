import { useState } from "react";
import styled from "styled-components";
import checkmark from "../../assets/img/icon-check.svg";
import { device } from "../../theme/mediaQueries";

const StyledCheckbox = styled.div`
  margin-right: 1.2rem;
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    display: none;
  }

  input + span {
    display: inline-block;
    border-radius: 50%;
    border: 0.1rem solid ${({ theme }) => theme.textSecondary};
    width: 2rem;
    height: 2rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media ${device.laptop} {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  input:checked + span {
    background: var(--linear-gradient);
    border: none;
  }

  input:not(:checked) + span {
    img {
      display: none;
    }
  }

  
`;

const Checkbox = ({ checked, onComplete }) => {
  const [isChecked, setChecked] = useState(checked);

  const handleChange = (e) => {
    setChecked(!isChecked);
    onComplete();
  };

  return (
    <StyledCheckbox>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span>
        <img src={checkmark} alt="checkmark" />
      </span>
    </StyledCheckbox>
  );
};

export default Checkbox;
