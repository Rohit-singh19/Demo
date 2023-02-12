import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/login.scss";

const Login = () => {
  return (
    <Box className="uppercontainer">
      <Container className="container">
        <Typography variant="h3" className="heading">
          Login
        </Typography>
        <Box className="formUpperContainer">
          <FormControl className="formcontainer">
            <TextField
              name="email"
              label="Email"
              placeholder="Last Name"
              size="small"
            />

            <TextField
              name="password"
              label="Password"
              placeholder="Password"
              size="small"
            />
            <Button variant="contained">Login</Button>
            <Typography className="smallText">
              Don't have an account?{" "}
              <NavLink to="/register">Register Now</NavLink>
            </Typography>
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
