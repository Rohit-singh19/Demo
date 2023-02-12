import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/login.scss";

const Register = () => {
  return (
    <Box className="uppercontainer">
      <Container className="container">
        <Typography variant="h3" className="heading">
          Register
        </Typography>
        <Box className="formUpperContainer">
          <FormControl className="formcontainer">
            <Box className="alignRow">
              <TextField
                name="first_name"
                label="First Name"
                placeholder="First Name"
                size="small"
              />
              <TextField
                name="last_name"
                label="Last Name"
                placeholder="Last Name"
                size="small"
              />
            </Box>
            <TextField
              name="email"
              label="Email"
              placeholder="Last Name"
              size="small"
            />
            <Box className="alignRow">
              <TextField
                name="password"
                label="Password"
                placeholder="Password"
                size="small"
              />
              <TextField
                name="password"
                label="Confirm Password"
                placeholder="Confirm Password"
                size="small"
              />
            </Box>

            <Button variant="contained">Register</Button>
            <Typography className="smallText">
              Already have an account? <NavLink to="/login">Login Now</NavLink>
            </Typography>
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
