import { createTheme } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2877EE",
    },
    secondary: {
      main: red[900],
    },
  },
});

export default theme;
