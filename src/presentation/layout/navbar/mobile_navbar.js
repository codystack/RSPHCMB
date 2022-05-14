import React from "react";
import { makeStyles, useTheme } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import siteLogo from "../../../assets/images/logo.svg";
// import whiteSiteLogo from "../../../assets/images/logo_white.svg";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useHistory, withRouter } from "react-router-dom";
import Hidden from "@mui/material/Hidden";
import MobileDrawer from "../../components/drawer/mobile_drawer";

const drawerWidth = 270;
const useStyles = makeStyles((theme) => ({
  appBarRoot: {
    backgroundColor: "white",
  },
  grow: {
    flexGrow: 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
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
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const MobileNavbar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  // let { window } = props;

  // const [navBackground, setNavBackground] = React.useState("appBarTransparent");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // let deviceType;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const tabletMini = useMediaQuery(theme.breakpoints.only("sm"));

  const navRef = React.useRef();
  // navRef.current = navBackground;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (smallScreen) {
    // deviceType = "mobile";
  } else if (tabletMini) {
    // deviceType = "tablet";
  } else {
    // deviceType = "big";
  }

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ backgroundColor: "#ffffffe8" }}
        className={classes[navRef.current]}
      >
        <Toolbar>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={siteLogo}
              alt=""
              width="40%"
              onClick={() => history.push("/")}
            />
            <IconButton
              edge="start"
              onClick={handleDrawerToggle}
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <MobileDrawer
            setMobileOpen={setMobileOpen}
            drawerVariant="temporary"
            anchor="left"
            mobileOpen={mobileOpen}
            // handleBackdrop={handleBackdrop}
            handleDrawerToggle={handleDrawerToggle}
            // window={window}
          />
        </Hidden>
      </nav>
    </div>
  );
};

export default withRouter(MobileNavbar);
