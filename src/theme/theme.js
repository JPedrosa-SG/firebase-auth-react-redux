import { createTheme } from "@mui/material/styles";

const green = "#98CB8C";
const blue = "#5C78CC";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: blue,
    },
    secondary: {
      main: green,
    },
  },
  typography: {
    fontFamily: "PT Sans",
    h1: {
      fontSize: 80,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "main" },
          style: {
            borderRadius: "20px",
            color: "white",
            padding: "1px 40px",
            height: "40px",
            textTransform: "none",
            fontSize: "18px",
            fontWeight: "bold",
            boxShadow: "none",
            backgroundColor: green,
          },
        },
        {
          props: { variant: "main-text" },
          style: {
            borderRadius: "20px",
            color: green,
            padding: "0 30",
            textTransform: "none",
            fontSize: "18px",
            fontWeight: "bold",
            boxShadow: "none",
            backgroundColor: "transparent",
          },
        },
      ],
    },
  },
});

export default theme;
