import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF"
    },
    secondary: {
      main: "#FFFFFF"
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF"
    },
    text: {
      primary: "#111111",
      secondary: "#242B2E"
    }
  }
});

export default lightTheme;
