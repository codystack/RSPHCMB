const theme = {
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#00B0EF",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          borderRadius: 0,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.1,
        },
      },
    },
  },
};
export default theme;
