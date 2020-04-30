import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  display: inline;
  background: transparent;
  border 2px solid black;
  border-radius: 3px;
  color: black;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0.5rem;

  ${(props) =>
    props.primary
      ? `
    background: white;
    border: 2px solid white;
    color: palevioletred;
  `
      : ""}
`;

export default Button;
