import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import "./LandingAuth.css";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PropTypes from "prop-types";
import { userLogin } from "../../actions/index";
import { useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import theme from "../../theme/theme";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LandingAuth({ valueFromNav, handleClose }) {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPass, SetShowPass] = useState(false);

  // const [user, setUser] = useState({});

  const [value, setValue] = useState(valueFromNav);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  }); */

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }

    dispatch(userLogin(registerEmail));
    navigate(`/dashboard`);
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      console.log(error.message);
    }
    dispatch(userLogin(loginEmail));
    navigate(`/dashboard`);
  };

  /*   const logout = async () => {
    await signOut(auth);
    dispatch(userLogout());
  }; */

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickShowPassword = () => {
    SetShowPass(!showPass);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  /*   const handleForm = (e) => {
    e.preventDefault();
    login();
  }; */

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    /* signInWithPopup(auth, provider)
      .then((response) => {
        navigate(`/dashboard`);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      }); */

    const signGoogle = await signInWithPopup(auth, provider);
    console.log(signGoogle);
    if (signGoogle.user.email) {
      navigate(`/dashboard`);
      return;
    }

    /* console.log("Erro"); */ //pode estar dentro de um if, mas nao e necessario

    // console.log(signInWithPopup(auth, provider));
  };

  return (
    <div className="modalCtnr">
      <Box className="modalLeftBox">
        <Box className="modalLeftTop"></Box>
        <Box className="modalLeftBot">
          <Typography className="logo logoModal">
            Daycare S<span>O</span>S
          </Typography>
          <Typography className="modalLeftText">
            {value === 1 ? "Register as a Nursery" : "Login as a Nursery"}
          </Typography>
        </Box>
      </Box>
      <Box className="modalRightBox">
        <Box className="modalRightTop">
          <Button
            variant="main-text"
            // color="secondary"
            id="closeBtn"
            onClick={handleClose}
          >
            <ClearIcon /> {!isMobile && "Close"}
          </Button>

          {isMobile && (
            <Container>
              <Typography className="mobileTopReg">Register</Typography>{" "}
              <Typography className="logo logoModal">
                Daycare S<span>O</span>S
              </Typography>
            </Container>
          )}

          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            className="mobileTabs"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab className="loginRegLabel" label="Login" {...a11yProps(0)} />
              <Tab
                className="loginRegLabel"
                label="Register"
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
        </Box>
        <Box className="modalRightBot">
          <TabPanel className="loginRegCtnr" value={value} index={0}>
            {/* <form onSubmit={handleForm}> */}
            <Button
              className="googleBtn"
              variant="main"
              // type="submit"
              onClick={googleSignIn}
            >
              {" "}
              Sign In with Google
            </Button>
            <Typography className="orTypo">
              or use a previously created account
            </Typography>
            <InputLabel
              htmlFor="standard-adornment-email"
              className="labelEmail"
            >
              Email
            </InputLabel>
            <Input
              className="logRegInput"
              id="standard-adornment-email"
              type="text"
              placeholder="Your email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />

            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              className="logRegInput logRegInputPass"
              id="standard-adornment-password"
              type={showPass ? "text" : "password"}
              value={loginPassword}
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    className="eyeIcon"
                  >
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />

            <Button
              className={
                "logRegBtn" +
                (!(loginEmail && loginPassword) ? " btnDisabled" : "")
              }
              variant="main"
              // type="submit"
              onClick={login}
              disabled={loginEmail && loginPassword ? false : true}
            >
              {" "}
              Login
            </Button>
            {/* </form> */}

            <Typography className="logRegBotText">
              Don't have an account?
              <Button variant="main-text" onClick={() => setValue(1)}>
                Register
              </Button>
            </Typography>
          </TabPanel>
          <TabPanel className="loginRegCtnr" value={value} index={1}>
            <Button
              className="googleBtn"
              variant="main"
              // type="submit"
              onClick={googleSignIn}
            >
              {" "}
              Sign in with Google
            </Button>
            <Typography className="orTypo">or create a new login</Typography>
            <InputLabel
              htmlFor="standard-adornment-email"
              className="labelEmail"
            >
              Email
            </InputLabel>
            <Input
              className="logRegInput"
              id="standard-adornment-email"
              type="text"
              placeholder="Your email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />

            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              className="logRegInput logRegInputPass"
              id="standard-adornment-password"
              type={showPass ? "text" : "password"}
              value={registerPassword}
              placeholder="Create a password"
              onChange={(e) => setRegisterPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    className="eyeIcon"
                  >
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />

            <Button
              className={
                "logRegBtn" +
                (!(registerEmail && registerPassword) ? " btnDisabled" : "")
              }
              variant="main"
              onClick={register}
              disabled={registerEmail && registerPassword ? false : true}
            >
              {" "}
              Register
            </Button>

            <Typography className="logRegBotText">
              Already have an account?
              <Button variant="main-text" onClick={() => setValue(0)}>
                Sign In
              </Button>
            </Typography>
          </TabPanel>
        </Box>
      </Box>

      {/* <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button> */}
    </div>
  );
}
