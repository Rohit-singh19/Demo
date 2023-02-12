import { AccountCircleRounded, Image } from "@mui/icons-material";
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

const EditCompanyProfile = () => {
  const navigate = useNavigate();

  return (
    <Box className="uppercontainer">
      <Container className="container">
        <Typography variant="h3" className="heading">
          Company Profile
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
            <Box className="uploadBox">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                size="large"
              >
                <input hidden accept="image/*" type="file" />
                <Image fontSize="large" />
              </IconButton>
            </Box>
            <Box className="alignRow">
              <TextField
                name="company_name"
                label="Company Name"
                placeholder="Company Name"
                size="small"
              />
              <TextField
                name="company_address"
                label="Company Address"
                placeholder="Company Address"
                size="small"
              />
            </Box>

            <Box className="alignRow">
              <TextField
                name="gst"
                label="GST"
                placeholder="GST"
                size="small"
              />
              <TextField
                name="email"
                label="Email"
                placeholder="Email"
                size="small"
              />
            </Box>
            <TextField
              name="address"
              label="Address"
              placeholder="Address"
              size="small"
            />
            <TextField
              name="company_description"
              label="Company Description"
              placeholder="Company Description"
              size="small"
              multiline
              minRows={4}
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

export default EditCompanyProfile;
