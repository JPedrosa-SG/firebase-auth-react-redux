import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import "./HomeMain.css";

export default function HomeMain() {
  return (
    <div className="homeMain">
      <Container className="homeContainer">
        <Typography color="primary" variant="h1" className="mainText">
          Revolutionising Emergency Childcare
        </Typography>
        <Container id="homeCardContainer">
          <Paper className="homeCard">
            <Typography color="primary" className="smallTextCard">
              Sign up as a
            </Typography>
            <Box className="cardBox">
              <Typography color="primary" className="bigTextCard">
                Parent
              </Typography>
              <Button variant="main">Register</Button>
            </Box>
          </Paper>
          <Paper className="homeCard">
            <Typography color="primary" className="smallTextCard">
              Sign up as a
            </Typography>
            <Box className="cardBox">
              <Typography color="primary" className="bigTextCard">
                Nursery
              </Typography>
              <Button variant="main">Register</Button>
            </Box>
          </Paper>
        </Container>
      </Container>
    </div>
  );
}
