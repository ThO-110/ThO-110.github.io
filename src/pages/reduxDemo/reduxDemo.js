import React from "react";
import ShowArea from "./components/ShowArea";
import Buttons from "./components/Buttons";
import { ColorReducer } from "./colorReducer";

const ReduxDemo = () => {
  return (
    <div>
      <ColorReducer>
        <ShowArea />
        <Buttons />
      </ColorReducer>
    </div>
  );
};

export default ReduxDemo;
