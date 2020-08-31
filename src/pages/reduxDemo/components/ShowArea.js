import React, { useContext } from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";

import { ColorContext } from "../colorReducer";

const ShowArea = () => {
  const { color } = useContext(ColorContext);
  return (
    <div style={{ padding: "40px 0" }}>
      <SnackbarContent
        style={{ color: color }}
        message={"This is the Redux Demo page"}
      />
    </div>
  );
};

export default ShowArea;
