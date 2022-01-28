import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import * as React from "react";
import "./Dashboard.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector } from "react-redux";

const data = [
  {
    name: "Revenue",
    value: "£150.000",
    // style: " paperTopLeft",
  },
  {
    name: "No. of bookings",
    value: "3,000",
  },
  {
    name: "Registered children",
    value: "350",
  },
  {
    name: "Capacity across all nurseries",
    value: "380",
    // style: " paperTopRight",
  },
  {
    name: "Most popular",
    value: "Battersea",
    // style: " paperBotLeft",
  },
  {
    name: "Least popular",
    value: "Shoreditch",
  },
  {
    name: "Highest revenue",
    value: "Hackney",
  },
  {
    name: "Lowest revenue",
    value: "Chigwell",
    // style: " paperBotRight",
  },
];

const data2 = ["Battersea", "Chigwell", "Clerkenwell", "Hampstead"];
const data3 = [0, 1, 2, 3, 4, 5];

export default function Dashboard() {
  const [activeNot, setActiveNot] = React.useState([]);

  const toogleNotification = (index) => {
    if (activeNot.includes(index)) {
      setActiveNot((prev) => prev.filter((item) => item !== index));
    } else {
      setActiveNot((prev) => [...prev, index]);
    }
  };

  const user = useSelector((state) => state);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box className="topBar">
        <Typography className="topBarTitle">Alphabet Nursery</Typography>
        <Typography>{user}</Typography>
      </Box>

      <Box className="dashMainCtnr">
        <Box className="dashMainLeft">
          <Container>
            <Box className="dashMainLeftTopRow">
              <Typography className="dashMainTypo">Performance</Typography>
              {/* <Button variant="main" id="allTimeBtn">
                All time <KeyboardArrowDownIcon />
              </Button> */}
              <Box sx={{ minWidth: 120 }} className="select">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    id="allTimeBtn"
                  >
                    <MenuItem value="">
                      <em>All time</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box className="dashMainPaperCtnr">
              {data.map((obj, index) => {
                return (
                  <Paper
                    key={index}
                    square
                    elevation={0}
                    className="dashMainPaper"
                  >
                    <Typography className="paperTopTypo">{obj.name}</Typography>
                    <Typography className="paperBotTypo">
                      {obj.value}
                    </Typography>
                  </Paper>
                );
              })}
            </Box>
            <Box className="dashMainLeftTopRow">
              <Typography className="dashMainTypo">Locations</Typography>
              <Button variant="main">Add location</Button>
            </Box>
            <Box className="dashMainPaperBotCtnr">
              {data2.map((obj, index) => {
                return (
                  <Paper key={index} elevation={0} className="dashMainPaperBot">
                    <Box className="botPaperTop">
                      <Typography>{obj}</Typography>
                      <Box>
                        {" "}
                        <ArrowForwardIosIcon />
                      </Box>
                    </Box>
                    <Box className="botPaperBlue">
                      <Box>
                        <Typography>10/12</Typography>
                      </Box>
                      <Typography>Bookings today</Typography>
                    </Box>
                  </Paper>
                );
              })}
            </Box>
          </Container>
        </Box>
        <Box className="dashMainRight">
          <Box className="dashMainRightTopTypo">
            <Typography className="dashMainTypo">Notifications</Typography>
          </Box>
          {data3.map((obj, index) => {
            return (
              <Box
                key={index}
                onClick={() => toogleNotification(index)}
                className={activeNot.includes(index) ? "activeNot" : ""}
                data-testid="notification"
              >
                <Box
                  className={
                    "notificationCtnr" +
                    (activeNot.includes(index) ? " activeNot" : "")
                  }
                >
                  <Box className="notificationBell">
                    {activeNot.includes(index) && (
                      <span className="redDot"></span>
                    )}
                    <img
                      src={process.env.PUBLIC_URL + "svg/Union 1.svg"}
                      alt="logotest"
                    />
                  </Box>
                  <Box className="notificationTextCtnr">
                    <Box className="notificationTopTextCtnr">
                      <Typography className="notificationTopTextBooking">
                        New booking
                      </Typography>
                      <Typography className="notificationTopTextDate">
                        16:15, 19th Apr
                      </Typography>
                    </Box>
                    <Typography>
                      You have a new booking in Battersea for Friday 18th June
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
