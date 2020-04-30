import styled, { keyframes } from "styled-components";

const rotateKeyframe = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const rotate = styled.div`
  animation: ${rotateKeyframe} 2s linear infinite;
`;

export default rotate;
