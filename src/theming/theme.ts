import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    body2: {
      fontSize: "20px",
    },
  },
  palette: {
    primary: {
      main: "#2877EE",
    },
    secondary: {
      main: "#2B3648",
    },
  },
  components: {
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: 9999,
          fontWeight: 700,
          fontSize: 17,
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
