import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="ftrCtnr">
        <Typography className="logo logoFtr">
          Daycare S<span>O</span>S
        </Typography>
        <Box className="ftrRowCtnr">
          <Typography className="ftrRowText">Terms and Conditions</Typography>
          <Typography className="ftrRowText">Privacy Policy</Typography>
          <Typography className="ftrRowText">Cookie Policy</Typography>
        </Box>
        <Typography className="ftrBotText">
          © Copyright DaycareSOS. All rights reserved. • hello@daycaresos.com
        </Typography>
      </Container>
    </div>
  );
}
