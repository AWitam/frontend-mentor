import styled from "styled-components";

const StyledInfo = styled.h4`
  color: ${({ theme }) => theme.textStatusBar};
  margin-top: 3rem;
  text-align: center;
  font-size: var(--font-m);
  font-weight: 600;
`;

const Info = () => {
  return <StyledInfo>Drag and drop to reorder list</StyledInfo>;
};

export default Info;
