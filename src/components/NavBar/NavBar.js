import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginRegister from "../LoginRegister/LoginRegister";
import "./NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../../theme/theme";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { userLogout } from "../../actions";
import { auth } from "../../firebase-config";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  // const [isMobile, setIsMobile] = useState(false);

  const user = useSelector((state) => state);

  /* const handleResize = () => {
    if (window.innerWidth <= 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }; */
  /* useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []); */

  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); //Poderá ser metido num ficheiro helper a parte

  const handleOpen = (register) => {
    user ? logout() : setOpen(true);
    if (register) {
      setValue(1);
    } else {
      setValue(0);
    }
  };
  const handleClose = () => setOpen(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
    dispatch(userLogout());

    navigate(`/`);
  };

  return (
    <Box>
      {!isMobile ? (
        <AppBar position="static" elevation={0}>
          <Toolbar className="navbar">
            <Box className="leftContainer">
              <Typography className="logo">
                Daycare S<span>O</span>S
              </Typography>
              <Typography className="navText">I'm a parent</Typography>
              <Typography className="navText">I'm a nursery</Typography>
            </Box>
            <Box className="rightContainer">
              <Button
                variant="main-text"
                // color="secondary"
                id="loginBtn"
                onClick={() => handleOpen()}
              >
                {user ? "Logout" : "Login"}
              </Button>
              <Button
                variant="main"
                // color="secondary"
                // className="registerBtn"
                onClick={() => handleOpen(true)}
              >
                Register
              </Button>
              <LoginRegister
                open={open}
                handleClose={handleClose}
                value={value}
              />
            </Box>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="static" elevation={0}>
          <Toolbar className="navbar">
            <Box className="leftContainer">
              <Typography className="logo">
                Daycare S<span>O</span>S
              </Typography>
            </Box>
            <Box className="rightContainer">
              <Button
                // variant="main-text"
                // color="secondary"
                id="loginBtnMobile"
                onClick={() => handleOpen()}
              >
                {" "}
                {!open ? (
                  <MenuIcon
                    sx={{ fontSize: "40px", strokeWidth: 0.5, fontWeight: 100 }}
                  />
                ) : (
                  <ClearIcon
                    sx={{ fontSize: "40px", strokeWidth: 0.5, fontWeight: 100 }}
                  />
                )}
              </Button>
              <LoginRegister
                open={open}
                handleClose={handleClose}
                value={value}
                isMobile={isMobile}
              />
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </Box>
  );
}
