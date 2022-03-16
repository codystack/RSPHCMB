import React from "react";
import { Drawer as MUIDrawer } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import DashBoardIcon from '@material-ui/icons/DashboardOutlined';
// import CardTravelOutlinedIcon from '@material-ui/icons/CardTravelOutlined';
import { withRouter, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/material/styles";
// import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import logo from "../../../assets/images/logo.svg";
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { setUserRole, setUserData, setUserStatus } from '../../redux/slice/user';
// import { pusher } from '../../utils/pusher-config';
// import { useSnackbar } from "notistack";
// import { setRemoveNavbar, setHomeNavbar } from '../../redux/slice/navbar';
// import Skeleton from '@material-ui/lab/Skeleton';
// import Popper from '@mui/material/Popper';
// import Fade from '@mui/material/Fade';
// import EmptyModal2 from '../modal/EmptyModal2';

const drawerWidth = 270;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "275px",
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  listRoot: {
    width: "100%",
    padding: theme.spacing(1),
  },
}));

const MobileDrawer = (props) => {
  const classes = useStyles();

  const drawerItems = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Features",
      to: "/",
    },
    {
      text: "Vendors",
      to: "/vendor",
    },
    {
      text: "Scholarship",
      to: "/scholarship",
    },
    {
      text: "Skill",
      to: "/skill-acquisition",
    },
    {
      text: "About",
      to: "/about",
    },
    {
      text: "Contact us",
      to: "/contact",
    },
  ];

  const { history, mobileOpen, setMobileOpen } = props;
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [dItems, setDItems] = React.useState(drawerItems);
  const [buttonCase, setButtonCase] = React.useState(null);
  //   const [openFeaturesModal, setOpenFeaturesModal] = React.useState(false);

  //   const handleClick = () => {
  //     setOpenFeaturesModal(true);
  //     //alert('Youu')
  //   };

  // const open = Boolean(anchorEl);
  // const id = open ? 'transitions-popper' : undefined;

  let container =
    props.window !== undefined ? () => window().document.body : undefined;

  const vendordrawerItems = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "About",
      to: "/vendor/about",
    },
    {
      text: "FAQs",
      to: "/vendor/faqs",
    },
  ];

  const scholarsdrawerItems = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "About",
      to: "/scholarship/about",
    },
    {
      text: "How To Apply",
      to: "/scholarship/how-to-apply",
    },
    {
      text: "Conditions",
      to: "/scholarship/conditions",
    },
    {
      text: "FAQs",
      to: "/scholarship/faqs",
    },
  ];

  //   const getStarted = () => {
  //     setMobileOpen(!mobileOpen);
  //     setOpenModal(true);
  //   };

  const handleListItemClick = (to, index) => {
    history.push(to);
    setSelectedIndex(index);
    setMobileOpen(!mobileOpen);
  };

  //   const scholarsLoginButton = (
  //     <div
  //       style={{
  //         flexDirection: "column",
  //         justifyContent: "flex-start",
  //         alignItems: "center",
  //         padding: 24,
  //       }}
  //     >
  //       <Button
  //         variant="contained"
  //         color="primary"
  //         style={{ textTransform: "none" }}
  //         onClick={() => history.push("/scholarship/login")}
  //       >
  //         Login
  //       </Button>
  //     </div>
  //   );

  React.useLayoutEffect(() => {
    if (location.pathname === "/") {
      setSelectedIndex(0);
      setDItems(drawerItems);
      // if (!userData) {
      //     setButtonCase(getStartedButton);
      // }
    } else if (location.pathname === "/vendor") {
      setDItems(vendordrawerItems);
      //   setButtonCase(vendorLoginButton);
    } else if (location.pathname === "/scholarship") {
      setDItems(scholarsdrawerItems);
      //   setButtonCase(scholarsLoginButton);
    } else if (location.pathname === "/skill-acquisition") {
      //   setButtonCase(skillsLoginButton);
    } else if (location.pathname === "/about") {
      setSelectedIndex(5);
      setButtonCase(null);
    } else if (location.pathname === "/contact") {
      setSelectedIndex(6);
      setButtonCase(null);
    }
  }, [location]);

  const myDrawer = (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className={classes.toolbar}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href="/">
          <img src={logo} style={{ width: 100 }} alt="site logo" />
        </a>
      </div>

      <Divider />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <List className={classes.listRoot}>
          {dItems.map((item, index) => {
            const { text, icon, to } = item;
            return text === "Features" ? (
              <ListItem
                style={{ borderRadius: 6 }}
                button
                key={index}
                selected={selectedIndex === index}
                // onClick={handleClick}
              >
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            ) : (
              <ListItem
                style={{ borderRadius: 6 }}
                button
                key={index}
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(to, index)}
              >
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </div>

      {buttonCase}
    </div>
  );

  return (
    <MUIDrawer
      variant={props.drawerVariant}
      container={container}
      className={classes.drawer}
      anchor={props.anchor}
      open={mobileOpen}
      onClose={props.handleDrawerToggle}
      classes={{ paper: classes.drawerPaper }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      {myDrawer}
    </MUIDrawer>
  );
};

export default withRouter(MobileDrawer);
