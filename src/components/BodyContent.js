import React from "react";
import { makeStyles, Container, Typography, Paper } from "@material-ui/core";

import pic2016 from "../asset/images/2016.jpg";
import pic1 from "../asset/images/pic1.jpg";
import pic2 from "../asset/images/pic2.jpg";
import pic3 from "../asset/images/pic3.jpg";
import pic4 from "../asset/images/pic4.jpg";

const useStyle = makeStyles({
  coverImage: {
    width: "100%",
  },
  container: {
    position: "relative",
    top: "-40px",
    borderRadius: "50px",
    margin: "0 24px 0 24px",
  },
  pictureList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: "50px 0",
    },
  },
  picture: {
    maxWidth: "700px",
    maxHeight: "550px",
  },
});

function BodyContent() {
  const classes = useStyle();
  const picList = [pic1, pic2, pic3, pic4];
  return (
    <>
      <img src={pic2016} alt="2016" className={classes.coverImage} />
      <Paper className={classes.container}>
        <div className={classes.pictureList}>
          {picList.map((pic, index) => {
            return <img src={pic} key={index} className={classes.picture} />;
          })}
        </div>
      </Paper>
    </>
  );
}

export default BodyContent;
