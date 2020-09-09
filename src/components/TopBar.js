import React from "react";
import { AppBar, Typography, Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  title: {
    margin: "0 auto",
  },
});

function TopBar() {
  const classes = useStyle();
  return (
    <>
      <AppBar position="sticky">
        <Typography variant="h4" className={classes.title}>
          <Box m={2}>Tho's Gallery</Box>
        </Typography>
      </AppBar>
    </>
  );
}

export default TopBar;
