import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { changeColor, ColorContext } from "../colorReducer";

const Buttons = () => {
  const { dispatch } = useContext(ColorContext);
  return (
    <div>
      <Button
        style={{ color: "orange" }}
        onClick={() => dispatch({ type: changeColor, color: "orange" })}
      >
        Orange
      </Button>
      <Button
        style={{ color: "green" }}
        onClick={() => dispatch({ type: changeColor, color: "green" })}
      >
        Green
      </Button>
    </div>
  );
};

export default Buttons;
