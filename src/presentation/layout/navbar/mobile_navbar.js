import React from "react";
import { makeStyles, useTheme } from "@mui/material/styles";
// import { makeStyles } from "@mui/styles"
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import fullLogo from "../../../assets/images/logo.svg";
import mobileLogo from "../../../assets/images/logo.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation, withRouter, useHistory } from "react-router-dom";
// import MobileDrawer from "../../components/drawer/mobile_drawer";
import Hidden from "@mui/material/Hidden";
import ResponsiveDrawer from "./index2";
// import Button from "@mui/material/Button";

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
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.black, 0.15),
    // "&:hover": {
    // //   backgroundColor: fade(theme.palette.common.black, 0.25),
    // },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  inputRoot: {
    color: "#000",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "13ch",
      // '&:focus': {
      //     width: '14ch',
      // },
    },
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
  //   const { window } = props;
  //   let history = useHistory();
  //   const location = useLocation();
  //   const [anchorEl, setAnchorEl] = React.useState(null);
  //   const [openModal, setOpenModal] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  //   const [anchorEl2, setAnchorEl2] = React.useState(null);
  //   const [openSignoutBackDrop, setOpenSignoutBackDrop] = React.useState(false);

  //   const isMenuOpen = Boolean(anchorEl);
  //   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  let //   respMargin,
    //   elevation,
    deviceType;
  //   logo;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const tabletMini = useMediaQuery(theme.breakpoints.only("sm"));

  //   const openPopper2 = Boolean(anchorEl2);
  // //   const popperId2 = openPopper2 ? "simple-popper2" : undefined;

  //   const handleProfileMenuOpen = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handleMobileMenuClose = () => {
  //     setMobileMoreAnchorEl(null);
  //   };

  //   const handleBackdrop = (value) => {
  //     setOpenSignoutBackDrop(value);
  //   };

  //   const handleMenuClose = () => {
  //     setAnchorEl(null);
  //     handleMobileMenuClose();
  //   };

  //   const handleMobileMenuOpen = (event) => {
  //     setMobileMoreAnchorEl(event.currentTarget);
  //   };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //   const mobileMenuId = "primary-search-account-menu-mobile";
  //   const renderMobileMenu = (
  //     <Menu
  //       anchorEl={mobileMoreAnchorEl}
  //       anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //       id={mobileMenuId}
  //       keepMounted
  //       transformOrigin={{ vertical: "top", horizontal: "right" }}
  //       open={isMobileMenuOpen}
  //       onClose={handleMobileMenuClose}
  //     >
  //       {/* <MenuItem>
  //         <Typography style={{ textTransform: "capitalize" }}>
  //           {fullname}
  //         </Typography>
  //       </MenuItem> */}
  //       {/* <MenuItem>
  //         <Button
  //           variant="text"
  //           style={{ color: theme.palette.secondary.main }}
  //           onClick={gotoDashboard}
  //         >
  //           Go to dashboard
  //         </Button>
  //       </MenuItem> */}
  //     </Menu>
  //   );

  if (smallScreen) {
    // elevation = 0;
    // respMargin = 0;
    deviceType = "mobile";
    // logo = mobileLogo;
  } else if (tabletMini) {
    // elevation = 0;
    // respMargin = 0;
    deviceType = "tablet";
    // logo = fullLogo;
  } else {
    // elevation = 1;
    // respMargin = "auto";
    deviceType = "big";
    // logo = fullLogo;
  }

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" classes={{ root: classes.appBarRoot }}>
        <Toolbar className="container">
          {deviceType !== "big" ? (
            <IconButton
              edge="start"
              className={classes.menuButton}
              onClick={handleDrawerToggle}
              color="primary"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          {deviceType === "mobile" ? (
            <img src={mobileLogo} alt="" width={36} height={36} />
          ) : (
            <img src={fullLogo} className="site__logo" alt="" />
          )}

          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          {/* <ResponsiveDrawer /> */}
          {/* <MobileDrawer
            setMobileOpen={setMobileOpen}
            drawerVariant="temporary"
            anchor="left"
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            window={window}
          /> */}
        </Hidden>
      </nav>
    </div>
  );
};

export default withRouter(MobileNavbar);
