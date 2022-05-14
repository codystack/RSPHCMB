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
          disableElevation: true,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.5,
        },
      },
    },
    MuiList: {
      onMouseLeave: (e) => {
        handleCloseDrop(e);
      },
    },
  },
};

const handleCloseDrop = (e, setOpenDrop) => {
  if (e.currentTarget.localName !== "ul") {
    const menu = document.getElementById("simple-menu").children[4];
    const menuBoundary = {
      left: menu.offsetLeft,
      top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
      right: menu.offsetLeft + menu.offsetHeight,
      bottom: menu.offsetTop + menu.offsetHeight,
    };
    if (
      e.clientX >= menuBoundary.left &&
      e.clientX <= menuBoundary.right &&
      e.clientY <= menuBoundary.bottom &&
      e.clientY >= menuBoundary.top
    ) {
      return;
    }
  }

  setOpenDrop(false);
};

export default theme;
