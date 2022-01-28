import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "./HomeWhoWeAre.css";

export default function HomeWhoWeAre() {
  return (
    <div className="whoWeAre">
      <Container className="whoCtnr">
        <Typography className="whoLargeText">Who we are</Typography>
        <Typography className="whoSmallText">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua orem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua
        </Typography>
      </Container>
    </div>
  );
}
