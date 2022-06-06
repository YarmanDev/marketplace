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
      main: red[900],
    },
  },
  components: {
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
    },
  },
});

export default theme;
