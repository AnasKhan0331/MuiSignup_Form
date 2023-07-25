import { Box, Grid } from "@mui/material";
import React from "react";
import bgImg from "../assets/images/bgImage.jpg";
import { makeStyles } from "@mui/styles";
import IndexForm from "./IndexForm";

const useStyles = makeStyles({
  imageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "relative",
    zIndex: 1,
  },
  boxStyle: {
    width: "100%",
    height: "100vh",
    position: "relative",
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "black",
    top: "0px",
    opacity: 0.4,
    zIndex: 2,
  },
});

const Form = () => {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ overflow: "hidden" }}>
        <Grid container>
          <Grid
            item
            lg={7}
            md={6}
            sm={4}
            sx={{
              display: { xs: "none", md: "block", lg: "block", sm: "block" },
            }}
          >
            <Box className={classes.boxStyle}>
              <img src={bgImg} className={classes.imageStyle} alt="/" />
              <div className={classes.overlay}></div>
            </Box>
          </Grid>
          <Grid item lg={5} md={6} sm={8}>
            <IndexForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Form;
