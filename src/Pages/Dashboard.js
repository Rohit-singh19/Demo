import { Edit } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <Box className="uppercontainer">
      <Container className="container" style={{ minHeight: "80vh" }}>
        <Typography variant="h3" className="heading">
          Dashboard
        </Typography>

        <Card>
          <CardHeader
            avatar={<Avatar aria-label="recipe">R</Avatar>}
            action={
              <IconButton
                LinkComponent={NavLink}
                to="user"
                aria-label="settings"
              >
                <Edit />
              </IconButton>
            }
            title="Rohit singh"
            subheader="email@gmail.com"
          />
          <CardContent>
            <Typography paragraph>Address</Typography>
          </CardContent>
        </Card>

        <Box sx={{ marginBottom: "2rem" }} />

        <Card>
          <CardHeader
            avatar={<Avatar aria-label="recipe">C</Avatar>}
            action={
              <IconButton
                LinkComponent={NavLink}
                to="comapny-profile"
                aria-label="settings"
              >
                <Edit />
              </IconButton>
            }
            title="Company Name (GST Number)"
            subheader="company@gmail.com"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60"
            alt="Paella dish"
          />
          <CardContent>
            <Typography paragraph className="bold">
              Description
            </Typography>
            <Typography paragraph>Description text</Typography>
            <Typography paragraph className="bold">
              Address
            </Typography>
            <Typography paragraph>Description text</Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Dashboard;
