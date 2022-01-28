import { Box } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import SideNav from "../SideNav/SideNav";

export default function PrivateRoute({ children }) {
  const isAuthenticated = JSON.parse(window.localStorage.getItem("isLoggedIn"));

  return isAuthenticated ? (
    <Box sx={{ display: "flex" }}>
      <SideNav />{" "}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
        {children}
      </Box>
    </Box>
  ) : (
    <Navigate to="/" />
  );
}
