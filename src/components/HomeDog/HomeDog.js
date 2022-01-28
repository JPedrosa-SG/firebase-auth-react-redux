import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import "./HomeDog.css";
// import dog from "../../../public/images/Image 5.png";

export default function HomeDog() {
  return (
    <div className="homeDog">
      <Container className="dogCtnr">
        <Typography className="dogLargeText">
          Lorem ipsum dolor sit amet
        </Typography>
        <Box className="dogAndBtnCtnr">
          <Button className="dogBtn">Lorem ipsum et</Button>
          <img
            src={`${process.env.PUBLIC_URL}/images/Image 5.png`}
            alt="doggie dog"
            id="dogImg"
          />
        </Box>
      </Container>
    </div>
  );
}
