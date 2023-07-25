import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
const IndexForm = () => {
  return (
    <>
      <Box sx={{ pt: 6 }}>
        <Paper
          elevation={3}
          style={{
            padding: "2rem",
            height: "100%",
            border: "none",
            boxShadow: "none",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton sx={{ backgroundColor: "#9C27B0", p: 1, mb: 1 }}>
              <LockOutlinedIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", mb: 2 }}
            gutterBottom
          >
            Sign In
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  placeholder="Email"
                  variant="outlined"
                  fullWidth
                  type="email"
                  name="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  name="password"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Remember Me"
                  />
                </FormGroup>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="primary"
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <a href="#!" style={{ fontSize: "13px", color: "#1976D2" }}>
                  Forgot password
                </a>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12} sx={{ textAlign: "end" }}>
                <a href="#!" style={{ fontSize: "13px", color: "#1976D2" }}>
                  Don't have an account? Sign Up
                </a>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  sx={{
                    py: 4,
                    textAlign: "center",
                    color: "rgba(0, 0, 0, 0.6);",
                  }}
                >
                  CopyRight &#169;{" "}
                  <a href="#!" style={{ color: "rgba(0, 0, 0, 0.6)" }}>
                    Your Website
                  </a>{" "}
                  2023{" "}
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default IndexForm;
