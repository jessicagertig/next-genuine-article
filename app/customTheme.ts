import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#172a4f",
      light: "#223F7C",
      dark: "#020b1c",
    },
    secondary: {
      main: "#FBE9EF",
      light: "#F0A6BD",
      dark: "#EC79A9",
    },
    error: {
      light: "#DA2929",
      main: "#C42121",
      dark: "#831616",
    },
  },
  typography: {
    fontFamily: "Bellota Text, serif",
  },
  breakpoints: {
    values: {
      xs: 480,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1200,
    },
  },
  components: {
    // Name of the component
    MuiMenuItem: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: "#020b1c",
          "&:hover": {
            backgroundColor: "rgba(211, 217, 229, 0.5)",
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        // Name of the slot
        option: {
          // Some CSS
          color: "#020b1c",
          "&:hover": {
            backgroundColor: "rgba(211, 217, 229, 0.5)",
          },
        },
        tag: {
          // Some CSS
          color: "#020b1c",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: "#020b1c",
        },
      },
    },
  },
});

export default customTheme;
