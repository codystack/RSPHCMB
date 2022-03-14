import React from "react";
import { AppBar, makeStyles } from "@mui/material";
import NavbarActions from "./nav_actions";

import siteLogo from "../../../assets/images/logo_footer.svg";

const useStyles = makeStyles((theme) => ({
  abRoot: {
    background: "transparent",
    boxShadow: "none",
    color: "white",
  },
  abScroll: {
    background: "primary",
    color: "black",
    boxShadow: "none",
  },
  appBarTransparent: {
    backgroundColor: "rgba(255, 255, 255, 0.01)",
    boxShadow: "none",
  },
  appBarSolid: {
    backgroundColor: "rgba(255, 255, 255)",
  },
  solidAppBar: {
    background: "white",
    color: "black",
  },
}));

const MainNavbar = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = React.useState(false);
  //   const [isNavbar, setIsNavbar] = React.useState(true);
  //   const [isScroll, setIsScroll] = React.useState(false);
  const [isSolidAppBar, setSolidAppBar] = React.useState(true);
  //const [isSolidBg, setIsSolidBg] = React.useState(false);
  const [navBackground, setNavBackground] = React.useState("appBarTransparent");
  const [colorSwitch, setColorSwtch] = React.useState("white");

  const navRef = React.useRef();
  navRef.current = navBackground;

  React.useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 150;
      if (show) {
        setNavBackground("appBarSolid");
        setColorSwtch("black");
      } else {
        setNavBackground("appBarTransparent");
        setColorSwtch("white");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      {isSolidAppBar ? (
        <AppBar
          id="appbar-id"
          // className={classes.solidAppBar}
          className={classes[navRef.current]}
          position="fixed"
        ></AppBar>
      ) : (
        <AppBar
          id="appbar-id"
          position="fixed"
          className={classes[navRef.current]}
        ></AppBar>
      )}
    </div>
  );
};

export default MainNavbar;
