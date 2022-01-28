import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LandingAuth from "../LandingAuth/LandingAuth";
import "./LoginRegister.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  // borderRadius: 3,
  boxShadow: 24,
  // p: 1,
};

export default function LoginRegister({ open, handleClose, value, isMobile }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={style}
        className={"modalBorderRadius" + (isMobile ? " mobileModal" : "")}
      >
        <LandingAuth valueFromNav={value} handleClose={handleClose} />
      </Box>
    </Modal>
  );
}
