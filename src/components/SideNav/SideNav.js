import "./SideNav.css";
import { Button, Drawer } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../../actions/index";
import { Box, Typography } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import logo1 from "/Users/sgadmin/Desktop/SG/firebase-auth-react-redux/public/svg/Group 10209.svg";
// import { ReactComponent as YourSvg } from "/Users/sgadmin/Desktop/SG/firebase-auth-react-redux/public/svg/Group 10209.svg";

export default function SideNav() {
  const drawerWidth = 180;

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

  const url = window.location.pathname;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
      className="drawer"
    >
      <Box>
        <Typography className="logo logoSideNav">
          Daycare S<span>O</span>S
        </Typography>
        <Box className="sideNavLinks">
          {/* <YourSvg /> */}
          <Box
            className={
              "navLinksCtnr" + (url === "/dashboard" ? " activeNavLink" : "")
            }
          >
            {url === "/dashboard" && <span></span>}
            <NavLink to="/dashboard" className="navLink">
              {" "}
              {/* <img
              src={"/svg/noun_dashboard_3846734.svg"}
              alt="logotest"
              id="dashIcon"
            />{" "} */}
              <Box id="dashIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.852"
                  height="17.852"
                  viewBox="0 0 17.852 17.852"
                >
                  <g
                    id="noun_dashboard_3846734"
                    transform="translate(-1.43 -1.43)"
                  >
                    <path
                      id="Path_33439"
                      data-name="Path 33439"
                      d="M7.665,3.518v5.53a1.338,1.338,0,0,1-1.338,1.338H3.518A1.338,1.338,0,0,1,2.18,9.047V3.518A1.338,1.338,0,0,1,3.518,2.18H6.327A1.338,1.338,0,0,1,7.665,3.518Zm-1.338,9.4H3.518A1.338,1.338,0,0,0,2.18,14.251v2.943a1.338,1.338,0,0,0,1.338,1.338H6.327a1.338,1.338,0,0,0,1.338-1.338V14.251A1.338,1.338,0,0,0,6.327,12.913ZM17.194,9.622H11.531a1.338,1.338,0,0,0-1.338,1.338v6.234a1.338,1.338,0,0,0,1.338,1.338h5.663a1.338,1.338,0,0,0,1.338-1.338V10.96A1.338,1.338,0,0,0,17.194,9.622Zm0-7.442H11.531a1.338,1.338,0,0,0-1.338,1.338V5.756a1.338,1.338,0,0,0,1.338,1.338h5.663a1.338,1.338,0,0,0,1.338-1.338V3.518A1.338,1.338,0,0,0,17.194,2.18Z"
                      transform="translate(0 0)"
                      fill="#fff"
                    />
                    <path
                      id="Path_33439_-_Outline"
                      data-name="Path 33439 - Outline"
                      d="M3.518,1.43H6.327A2.09,2.09,0,0,1,8.415,3.518v5.53a2.09,2.09,0,0,1-2.088,2.088H3.518A2.09,2.09,0,0,1,1.43,9.047V3.518A2.09,2.09,0,0,1,3.518,1.43ZM6.327,9.635a.588.588,0,0,0,.588-.588V3.518a.588.588,0,0,0-.588-.588H3.518a.588.588,0,0,0-.588.588v5.53a.588.588,0,0,0,.588.588Zm5.2-8.205h5.663a2.09,2.09,0,0,1,2.088,2.088V5.756a2.09,2.09,0,0,1-2.088,2.088H11.531A2.09,2.09,0,0,1,9.443,5.756V3.518A2.09,2.09,0,0,1,11.531,1.43Zm5.663,4.914a.588.588,0,0,0,.588-.588V3.518a.588.588,0,0,0-.588-.588H11.531a.588.588,0,0,0-.588.588V5.756a.588.588,0,0,0,.588.588ZM11.531,8.872h5.663a2.09,2.09,0,0,1,2.088,2.088v6.234a2.09,2.09,0,0,1-2.088,2.088H11.531a2.09,2.09,0,0,1-2.088-2.088V10.96A2.09,2.09,0,0,1,11.531,8.872Zm5.663,8.91a.588.588,0,0,0,.588-.588V10.96a.588.588,0,0,0-.588-.588H11.531a.588.588,0,0,0-.588.588v6.234a.588.588,0,0,0,.588.588ZM3.518,12.163H6.327a2.09,2.09,0,0,1,2.088,2.088v2.943a2.09,2.09,0,0,1-2.088,2.088H3.518A2.09,2.09,0,0,1,1.43,17.194V14.251A2.09,2.09,0,0,1,3.518,12.163Zm2.809,5.619a.588.588,0,0,0,.588-.588V14.251a.588.588,0,0,0-.588-.588H3.518a.588.588,0,0,0-.588.588v2.943a.588.588,0,0,0,.588.588Z"
                      transform="translate(0 0)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </Box>
              <Typography>Dashboard</Typography>
            </NavLink>
          </Box>
          <Box
            className={
              "navLinksCtnr" + (url === "/employees" ? " activeNavLink" : "")
            }
          >
            {url === "/employees" && <span></span>}
            <NavLink to="/employees" className="navLink">
              {" "}
              <Box id="peopleIcon">
                <PeopleAltIcon />
              </Box>
              <Typography>Employees</Typography>
            </NavLink>
          </Box>
          <Box
            className={
              "navLinksCtnr" +
              (url === "/notifications" ? " activeNavLink" : "")
            }
          >
            {url === "/notifications" && <span></span>}
            <NavLink to="/notifications" className="navLink">
              {/* {" "}
            <img
              src={"/svg/noun_notification_1594309.svg"}
              alt="logotest"
            />{" "} */}
              <Box id="notificationsIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.847"
                  height="18.19"
                  viewBox="0 0 17.847 18.19"
                >
                  <g
                    id="noun_notification_1594309"
                    transform="translate(-24 -23.5)"
                  >
                    <g
                      id="Group_10161"
                      data-name="Group 10161"
                      transform="translate(24 23.5)"
                    >
                      <path
                        id="Path_33442"
                        data-name="Path 33442"
                        d="M41.847,36.542A2.062,2.062,0,0,1,39.784,38.6H26.063a2.059,2.059,0,1,1,0-4.118s0-4.119,0-4.119a6.864,6.864,0,0,1,13.728,0v4.118A2.062,2.062,0,0,1,41.847,36.542ZM29.834,38.6c.147-5.179,2.744-5.611,3.692-5.611s2.256,1.661,2.486,5.611a3.089,3.089,0,0,1-6.178,0Z"
                        transform="translate(-24 -23.5)"
                        fill="#bec9eb"
                      />
                    </g>
                  </g>
                </svg>
              </Box>
              <Typography>Notifications</Typography>
            </NavLink>
          </Box>
          <Box
            className={
              "navLinksCtnr" + (url === "/settings" ? " activeNavLink" : "")
            }
          >
            {url === "/settings" && <span></span>}
            <NavLink to="/settings" className="navLink">
              {/* {" "}
            <img
              src={process.env.PUBLIC_URL + "svg/Group 10209.svg"}
              alt="logotest"
            />{" "} */}
              <Box id="settingsIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.851"
                  height="17.893"
                  viewBox="0 0 17.851 17.893"
                >
                  <g
                    id="Group_10209"
                    data-name="Group 10209"
                    transform="translate(-1.962 -1.81)"
                  >
                    <path
                      id="Subtraction_1"
                      data-name="Subtraction 1"
                      d="M6.906,17.893H6.883l-.1-.012H6.778l-.086-.011c-.133-.055-.216-.09-.289-.121l-1.266-.522L4.4,16.92l-.022-.009A.82.82,0,0,1,4,16.651a.565.565,0,0,1-.132-.249l-.006-.048c0-.017,0-.033-.006-.05s-.007-.062-.012-.093l0-.064.007-.05c0-.045.007-.093.013-.139.051-.517.108-1.044.161-1.552v0l0-.007-.137-.168-.027-.034-.145-.176-.156-.192H1.54a.708.708,0,0,1-.438-.158.572.572,0,0,1-.189-.2L.891,13.4c-.017-.035-.033-.076-.047-.116l-.031-.078L.8,13.188C.783,13.146.765,13.1.745,13.06l-.3-.731c-.127-.308-.254-.615-.38-.92A.7.7,0,0,1,.252,10.7c.059-.056.124-.113.187-.166l.014-.012c.283-.255.574-.511.854-.759l.056-.049.318-.281V8.493c-.256-.207-.511-.414-.769-.62Q.569,7.595.221,7.316A.7.7,0,0,1,.032,6.61l0-.005c.017-.038.031-.076.048-.114l.055-.136L.36,5.807C.527,5.4.7,4.974.871,4.558a.8.8,0,0,1,.259-.377.558.558,0,0,1,.245-.131c.068-.007.128-.014.191-.024l.264.02.065,0c.492.035,1,.071,1.5.11q.163-.154.33-.308l.324-.3,0,0V1.565a.726.726,0,0,1,.154-.441A.844.844,0,0,1,4.583.866c.094-.034.182-.068.262-.1L5.517.5C5.915.339,6.3.184,6.692.032A.514.514,0,0,1,6.877,0a.7.7,0,0,1,.517.22c.02.026.041.051.062.076L7.465.3c.033.041.07.082.1.125.35.431.707.867,1.043,1.278h.72L10.5.338l.075-.087A.687.687,0,0,1,10.99.045h.017l.071-.01h.02l.017,0A.7.7,0,0,1,11.2.042a.273.273,0,0,1,.05.012l.006,0,.018.006h.006a.645.645,0,0,1,.111.047l.028.011.034.013.066.026L12.5.551l.7.281a.775.775,0,0,1,.376.259.7.7,0,0,1,.159.44V3.553l.053.052.158.153,0,0c.13.126.264.256.4.384l1.657-.232a.77.77,0,0,1,.391,0l.085.037.086.037a.77.77,0,0,1,.333.434l.115.272q.2.467.392.934l.171.4.24.576a.65.65,0,0,1-.037.474.833.833,0,0,1-.3.346l-.068.048-.03.022-.024.018c-.032.024-.065.048-.1.07-.475.346-.841.611-1.187.861v.945l0,.007L17.6,10.7a.7.7,0,0,1,.19.706c-.016.033-.031.068-.046.1l-.011.025c-.007.021-.017.042-.026.063l-.017.038c-.044.108-.09.216-.133.324s-.1.234-.147.351c-.143.356-.29.709-.4.976a.8.8,0,0,1-.259.377.708.708,0,0,1-.44.158H14.33l-.119.118c-.133.134-.29.29-.44.443.071.566.141,1.134.2,1.635l.024.2a.679.679,0,0,1-.154.44.51.51,0,0,1-.206.185l-.086.037-.085.037-.273.111-.478.2-.477.2-.951.391,0,0a.477.477,0,0,1-.184.033.7.7,0,0,1-.518-.221c-.046-.057-.09-.111-.132-.165l-.017-.022-.006-.008-.273-.349-.663-.845H8.458q-.236.321-.471.644c-.157.215-.315.435-.474.651a.832.832,0,0,1-.346.3A.583.583,0,0,1,6.906,17.893ZM8.925,6.108a3.633,3.633,0,0,0-.383.024,3.545,3.545,0,0,0-.72.192,3.646,3.646,0,0,0-.615.36,3.551,3.551,0,0,0-.553.548,3.51,3.51,0,0,0-.356.619,3.659,3.659,0,0,0-.2.726,3.724,3.724,0,0,0,0,.757,3.717,3.717,0,0,0,.2.72,3.459,3.459,0,0,0,.353.615,3.7,3.7,0,0,0,.552.552,3.986,3.986,0,0,0,.618.36,3.646,3.646,0,0,0,.726.2,3.535,3.535,0,0,0,.757,0,3.558,3.558,0,0,0,.72-.2,3.672,3.672,0,0,0,.619-.356,3.93,3.93,0,0,0,.548-.552,4.1,4.1,0,0,0,.361-.619,3.72,3.72,0,0,0,.195-.727,3.689,3.689,0,0,0,0-.753,3.583,3.583,0,0,0-.195-.723,4.221,4.221,0,0,0-.357-.615,3.944,3.944,0,0,0-.551-.551,3.638,3.638,0,0,0-.619-.357,3.648,3.648,0,0,0-.733-.2A3.343,3.343,0,0,0,8.925,6.108Z"
                      transform="translate(1.962 1.81)"
                      fill="#bec9eb"
                    />
                  </g>
                </svg>
              </Box>
              <Typography>Settings</Typography>
            </NavLink>
          </Box>
        </Box>
      </Box>
      <Button variant="main-text" className="sdNavLogoutBtn" onClick={logout}>
        <LogoutOutlinedIcon style={{ marginRight: "5px" }} />
        Logout
      </Button>
    </Drawer>
  );
}
