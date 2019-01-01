import styled, { css } from 'styled-components';

export default styled.button`
  display:inline
  background: transparent;
  border: 2px solid black;
  border-radius: 3px;
  color: black;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  width 11rem;

  ${({ primary }) =>
    primary &&
    css`
      background: white;
      border: 2px solid white;
      color: palevioletred;
    `}
`;
