import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import siteLogo from "../../../assets/images/logo.svg";
import whiteSiteLogo from "../../../assets/images/logo_white.svg";
import { makeStyles } from "@mui/styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import { ArrowDropDown } from "@mui/icons-material";
import {
  Avatar,
  Hidden,
  List,
  ListItem,
  ListItemButton,
  Popover,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import "./navbar.css";

// import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

const pages = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Services",
    to: "/services",
  },
  {
    title: "Resources",
    to: "/resources",
  },
  {
    title: "Blog",
    to: "/blog",
  },
  {
    title: "Contact",
    to: "/contact",
  },
];

const resources = [
  { title: "Publications", to: "/resources/publications" },
  { title: "Fact Sheets", to: "/resources/fact_sheets" },
  { title: "Downloads", to: "/resources/downloads" },
  { title: "Reports", to: "/resources/reports" },
  { title: "Gallery", to: "/resources/gallery" },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const theme = useTheme();
  //   const [isOpen, setIsOpen] = React.useState(false);
  //   const [isSolidAppBar, setSolidAppBar] = React.useState(true);
  const [navBackground, setNavBackground] = React.useState("appBarTransparent");
  const [colorSwitch, setColorSwtch] = React.useState("white");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [logo, setLogo] = React.useState(siteLogo);
  const [navColor, setNavColor] = React.useState("black");
  const [blue, setBlue] = React.useState(false);
  // const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   setOpen((previousOpen) => !previousOpen);
  // };

  // const canBeOpen = open && Boolean(anchorEl);
  // const id = canBeOpen ? "transition-popper" : undefined;

  const navRef = React.useRef();
  navRef.current = navBackground;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    if (location.pathname === "/about") {
      setBlue(true);
      setLogo(siteLogo);
      setNavColor("black");
    } else if (location.pathname === "/contact") {
      setBlue(true);
      setLogo(siteLogo);
      setNavColor("black");
    } else if (location.pathname === "/blog") {
      setLogo(siteLogo);
      setBlue(true);
      setNavColor("black");
    } else if (location.pathname === "/services") {
      setBlue(true);
      setLogo(siteLogo);
      setNavColor("black");
    } else if (location.pathname === "/lga") {
      setLogo(whiteSiteLogo);
      setNavColor("white");
    } else {
      setBlue(false);
      setLogo(siteLogo);
      setNavColor("black");
    }
  }, [location]);

  React.useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 150;
      if (location.pathname === "/lga") {
        if (show) {
          setNavBackground("appBarSolid");
          setColorSwtch(blue ? "#00B0EF" : "black");
          setLogo(siteLogo);
          setNavColor("black");
        } else {
          setNavBackground("appBarTransparent");
          setColorSwtch(blue ? "#00B0EF" : "white");
          setLogo(whiteSiteLogo);
          setNavColor("white");
        }
      } else {
        if (show) {
          if (location.pathname === "/") {
            setBlue(true);
          }
          setNavBackground("appBarSolid");
          setColorSwtch(blue ? "#00B0EF" : "black");
          setLogo(siteLogo);
          setNavColor("black");
        } else {
          if (location.pathname === "/") {
            setBlue(false);
          }
          setNavBackground("appBarTransparent");
          setColorSwtch(blue ? "#00B0EF" : "white");
          setLogo(siteLogo);
          setNavColor("black");
        }
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <AppBar
      color={navBackground === "appBarTransparent" ? "transparent" : "inherit"}
      id="appbar-id"
      elevation={0}
      position="fixed"
      className={classes[navRef.current]}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              onClick={handleDrawerToggle}
              color="primary"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Box>
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
          <Link to={"/"}>
            <img src={logo} alt="" width="75%" />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: 10,
            }}
          >
            {pages.map((page) => (
              <div>
                {page.title === "Resources" ? (
                  <>
                    <div>
                      <Button
                        className="nav__menu-item"
                        endIcon={
                          page.title === "About" ||
                          page.title === "Resources" ? (
                            <ArrowDropDown />
                          ) : null
                        }
                        sx={{
                          my: 2,
                          color: navColor,
                          // display: "block",
                          textTransform: "capitalize",
                        }}
                      >
                        {page.title}
                      </Button>
                      <ul className="nav__submenu">
                        <li className="nav__submenu-item ">
                          <a>Our Company</a>
                        </li>
                        <li className="nav__submenu-item ">
                          <a>Our Team</a>
                        </li>
                        <li className="nav__submenu-item ">
                          <a>Our Portfolio</a>
                        </li>
                      </ul>
                      {/* <Popover
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                      >
                        <Box
                          sx={{
                            b: 0.5,
                            borderRadius: 3,
                            p: 1,
                            bgcolor: "background.paper",
                          }}
                        >
                          <List disablePadding={true}>
                            {resources?.map((elem, index) => (
                              <ListItem
                                key={index}
                                divider={
                                  index === resources.length - 1 ? false : true
                                }
                                disablePadding={true}
                                disableGutters={true}
                              >
                                <ListItemButton
                                  onClick={(e) => {
                                    // handleClick(e);
                                    history.push(elem.to);
                                  }}
                                >
                                  {elem.title}
                                </ListItemButton>
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      </Popover> */}
                    </div>
                  </>
                ) : (
                  <>
                    <Button
                      // aria-describedby={id}
                      key={page.title}
                      endIcon={
                        page.title === "About" || page.title === "Resources" ? (
                          <ArrowDropDown />
                        ) : null
                      }
                      onClick={
                        page.title === "Resources"
                          ? null
                          : () => history.push(page.to)
                      }
                      sx={{
                        my: 2,
                        color: navColor,
                        // display: "block",
                        textTransform: "capitalize",
                      }}
                    >
                      {page.title}
                    </Button>
                  </>
                )}

                {/* <Popover
                  id="mouse-over-popover"
                  sx={{
                    pointerEvents: "none",
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <Box
                    sx={{
                      b: 0.5,
                      borderRadius: 3,
                      p: 1,
                      bgcolor: "background.paper",
                    }}
                  >
                    <List disablePadding={true}>
                      {resources?.map((elem, index) => (
                        <ListItem
                          key={index}
                          divider={true}
                          disablePadding={true}
                          disableGutters={true}
                        >
                          <ListItemButton
                            onClick={(e) => {
                              // handleClick(e);
                              history.push(elem.to);
                            }}
                          >
                            {elem.title}
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Popover> */}

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    hidden={location.pathname !== page.to}
                    style={{
                      height: 6,
                      width: 6,
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 3,
                      marginTop: -40,
                    }}
                  />
                </div>
              </div>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "transparent",
                color: colorSwitch,
                borderColor: colorSwitch,
                textTransform: "capitalize",
                marginX: 2,
                fontSize: 12,
              }}
              // onClick={() => {
              //   window.location.href = "";
              // }}
            >
              <a
                href="https://myhealth.ng"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  textTransform: "lowercase",
                  color: colorSwitch,
                }}
              >
                myhealth.ng
              </a>
            </Button>

            <Button
              variant="contained"
              disableElevation={true}
              endIcon={<ArrowDropDown />}
              sx={{
                backgroundColor: blue ? "#00B0EF" : "white",
                color: blue ? "white" : "#0D2344",
                textTransform: "capitalize",
                fontSize: 12,
              }}
              // onClick={() => history.push("/lga")}
            >
              Covid-19 Vaccination Info
            </Button>
            {/* <Link to={"/lga"}>LGA</Link> */}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MainNavbar;
