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
import { Hidden } from "@mui/material";

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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  //   const [isOpen, setIsOpen] = React.useState(false);
  //   const [isSolidAppBar, setSolidAppBar] = React.useState(true);
  const [navBackground, setNavBackground] = React.useState("appBarTransparent");
  const [colorSwitch, setColorSwtch] = React.useState("white");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [logo, setLogo] = React.useState(siteLogo);
  const [navColor, setNavColor] = React.useState("black");

  const [blue, setBlue] = React.useState(false);

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
          setNavBackground("appBarSolid");
          setColorSwtch(blue ? "#00B0EF" : "black");
          setLogo(siteLogo);
          setNavColor("black");
        } else {
          setNavBackground("appBarTransparent");
          setColorSwtch(blue ? "#00B0EF" : "white");
          setLogo(siteLogo);
          setNavColor("black");
        }
        // setLogo(siteLogo);
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
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                marginLeft: 10,
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  divider={true}
                  onClick={() => history.push(page.to)}
                  focusVisibleClassName=""
                  sx={{
                    textTransform: "capitalize",
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ textTransform: "capitaliza" }}
                  >
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu> */}
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
                <Button
                  key={page.title}
                  onClick={() => history.push(page.to)}
                  sx={{
                    my: 2,
                    color: navColor,
                    display: "block",
                    textTransform: "capitalize",
                  }}
                >
                  {page.title}
                </Button>
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
