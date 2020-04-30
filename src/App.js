import React, { useState } from "react";
import { hot } from "react-hot-loader/root";

import Button from "./components/button";
import Rotate from "./components/rotate";
import Title from "./components/title";
import Wrapper from "./components/wrapper";

const App = () => {
  const [titleColor, setTitleColor] = useState("palevioletred");
  const [wrapperColor, setWrapperColor] = useState("papayawhip");

  return (
    <Wrapper color={wrapperColor}>
      <Rotate>
        <Title color={titleColor}>Hello World</Title>
      </Rotate>
      <Rotate>
        <Button
          primary
          onClick={() =>
            setWrapperColor(
              wrapperColor === "papayawhip" ? "aquamarine" : "papayawhip"
            )
          }
        >
          Change Wrapper
        </Button>
      </Rotate>
      <Rotate>
        <Button
          onClick={() =>
            setTitleColor(
              titleColor === "palevioletred" ? "seagreen" : "palevioletred"
            )
          }
        >
          Change Title
        </Button>
      </Rotate>
    </Wrapper>
  );
};

export default hot(App);
