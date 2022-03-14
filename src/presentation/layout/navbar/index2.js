import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import siteLogo from "../../../assets/images/logo.svg";
import { makeStyles } from "@mui/styles";
import { Link, useHistory } from "react-router-dom";
import { ArrowDropDown } from "@mui/icons-material";

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

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const classes = useStyles();
  const history = useHistory();

  //   const [isOpen, setIsOpen] = React.useState(false);
  //   const [isSolidAppBar, setSolidAppBar] = React.useState(true);
  const [navBackground, setNavBackground] = React.useState("appBarTransparent");
  const [colorSwitch, setColorSwtch] = React.useState("white");

  const navRef = React.useRef();
  navRef.current = navBackground;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };

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
    <AppBar id="appbar-id" position="fixed" className={classes[navRef.current]}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
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
            </Menu>
          </Box>
          <Link to={"/"}>
            <img src={siteLogo} alt="" width="75%" />
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
                    color: "black",
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
              onClick={() => {
                window.location.href = "https://myhealth.ng";
              }}
            >
              myhealth.ng
            </Button>

            <Button
              variant="contained"
              endIcon={<ArrowDropDown />}
              sx={{
                backgroundColor: "white",
                color: "#0D2344",
                textTransform: "capitalize",
                fontSize: 12,
              }}
            >
              Covid-19 Vaccination Info
            </Button>
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
export default ResponsiveAppBar;
