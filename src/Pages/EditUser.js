import { AccountCircleRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "../assets/css/login.scss";

const EditUser = () => {
  const navigate = useNavigate();
  return (
    <Box className="uppercontainer">
      <Container className="container">
        <Typography variant="h3" className="heading">
          User Profile
        </Typography>
        <Box className="formUpperContainer">
          <FormControl className="formcontainer">
            <Box className="uploadBox">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                size="large"
              >
                <input hidden accept="image/*" type="file" />
                <AccountCircleRounded fontSize="large" />
              </IconButton>
            </Box>
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
            <TextField
              name="address"
              label="Address"
              placeholder="Address"
              size="small"
            />
            <Button variant="contained">Update Profile</Button>
            <Button
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </Button>
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
};

export default EditUser;
