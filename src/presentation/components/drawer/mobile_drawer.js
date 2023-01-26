import React from "react";
import {
  Button,
  Collapse,
  Drawer as MUIDrawer,
  ListItemButton,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useSelector } from "react-redux";

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

const CollapseSection = (props) => {
  let { item, index, history, setSelectedIndex, setMobileOpen, mobileOpen } =
    props;

  const [mItems, setMItems] = React.useState([]);

  React.useEffect(() => {
    if (item) {
      let newArray = [];

      // Declare an empty object
      let uniqueObject = {};

      // Loop for the array elements
      for (let i in item?.items) {
        // Extract the title
        let objTitle = item?.items[i]?.title;

        // Use the title as the index
        uniqueObject[objTitle] = item?.items[i];
      }

      // Loop to push unique object into array
      for (var i in uniqueObject) {
        newArray.push(uniqueObject[i]);
      }

      let result = newArray.sort((a, b) => a.title.localeCompare(b.title));

      setMItems(result);
    }
  }, [item, item?.items]);

  const handleListItemClick2 = (elem, index) => {
    history.push({
      pathname: "/services/" + elem?.title?.replaceAll("/", ""),
      state: { item: elem, image: item?.image },
    });
    setSelectedIndex(index);
    setMobileOpen(!mobileOpen);
  };

  return (
    <List>
      {mItems &&
        mItems?.map((elem, pos) => (
          <ListItemButton
            sx={{
              pl: 4,
              fontSize: 11,
              color: "#00B0EF",
            }}
            onClick={() => handleListItemClick2(elem, index)}
          >
            <ListItemText primary={elem?.title} />
          </ListItemButton>
        ))}
    </List>
  );
};

const MobileDrawer = (props) => {
  const classes = useStyles();
  const { newServiceData } = useSelector((state) => state.service);

  const drawerItems = [
    {
      text: "Home",
      hasChildren: false,
      to: "/",
    },
    {
      text: "About",
      hasChildren: true,
      to: "",
      children: [
        { title: "About RSPHCMB", to: "/about" },
        { title: "Board of Trustees", to: "/about/bot" },
        { title: "Departments", to: "/about/departments" },
        { title: "Health Authority", to: "/about/lga" },
        { title: "Health Centres", to: "/about/health-centres" },
        { title: "Ward Committees", to: "/about/wdc" },
      ],
    },
    {
      text: "Services",
      hasChildren: true,
      to: "",
      children: newServiceData,
    },
    {
      text: "Resources",
      hasChildren: true,
      to: "",
      children: [
        { title: "Publications", to: "/resources/publications" },
        { title: "Downloads", to: "/resources/downloads" },
        { title: "Reports", to: "/resources/reports" },
        { title: "Gallery", to: "/resources/gallery" },
        { title: "Research", to: "/resources/research" },
      ],
    },
    {
      text: "Blog",
      to: "",
      hasChildren: false,
    },
    {
      text: "Contact",
      to: "/contact",
      hasChildren: false,
    },
  ];

  const { history, mobileOpen, setMobileOpen } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [openAbout, setOpenAbout] = React.useState(false);
  const [openServices, setOpenServices] = React.useState(false);
  const [openResources, setOpenResources] = React.useState(false);
  const [openServicesItems, setOpenServicesItems] = React.useState(false);

  const handleClick1 = () => {
    setOpenAbout(!openAbout);
  };

  const handleClick2 = () => {
    setOpenResources(!openResources);
  };

  const handleClick3 = () => {
    setOpenServices(!openServices);
  };

  const handleClick4 = () => {
    setOpenServicesItems(!openServicesItems);
  };

  const handleListItemClick2 = (elem, index) => {
    history.push({
      pathname: "/services/" + elem?.title?.replaceAll("/", ""),
      state: { item: elem, image: elem?.image },
    });
    setSelectedIndex(index);
    setMobileOpen(!mobileOpen);
  };

  // const handleClick4 = (panel) => (event, openServicesItems) => {
  //   setOpenServicesItems(openServicesItems ? panel : false);
  // };

  let container =
    props.window !== undefined ? () => window().document.body : undefined;

  const handleListItemClick = (to, index) => {
    history.push(to);
    setSelectedIndex(index);
    setMobileOpen(!mobileOpen);
  };

  const myDrawer = (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
        <List
          className={classes.listRoot}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {drawerItems?.map((item, index) => {
            const { text, to, children } = item;
            return text === "About" ||
              text === "Resources" ||
              text === "Services" ? (
              <div key={index}>
                {" "}
                {text === "Services" ? (
                  <>
                    <ListItem
                      style={{ borderRadius: 6 }}
                      button
                      selected={selectedIndex === index}
                      onClick={handleClick3}
                    >
                      <ListItemText primary={text} />
                      {openServices ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openServices} timeout="auto" unmountOnExit>
                      <List component="div">
                        {children?.map((it, ke) => {
                          const { title, items } = it;
                          return items.length > 0 ? (
                            <>
                              <ListItem
                                sx={{ pl: 3 }}
                                button
                                onClick={handleClick4}
                                // selected={selectedIndex === index}
                              >
                                <ListItemText primary={title} />
                                {openServicesItems ? (
                                  <ExpandLess />
                                ) : (
                                  <ExpandMore />
                                )}
                              </ListItem>
                              <Collapse
                                in={openServicesItems}
                                timeout="auto"
                                unmountOnExit
                              >
                                <CollapseSection
                                  item={it}
                                  history={history}
                                  setSelectedIndex={setSelectedIndex}
                                  setMobileOpen={setMobileOpen}
                                  mobileOpen={mobileOpen}
                                />
                              </Collapse>
                            </>
                          ) : (
                            <ListItemButton
                              key={ke}
                              sx={{ pl: 3 }}
                              // selected={selectedIndex === index}
                              onClick={() => handleListItemClick2(it, index)}
                            >
                              <ListItemText primary={title} />
                            </ListItemButton>
                          );
                        })}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <>
                    <ListItem
                      style={{ borderRadius: 6 }}
                      button
                      selected={selectedIndex === index}
                      onClick={text === "About" ? handleClick1 : handleClick2}
                      // onClick={() => handleListItemClick(to, index)}
                    >
                      <ListItemText primary={text} />
                      {(text === "About" ? openAbout : openResources) ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItem>
                    <Collapse
                      in={text === "About" ? openAbout : openResources}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {children?.map((it, ke) => {
                          const { title, to } = it;
                          return (
                            <ListItemButton
                              key={ke}
                              sx={{ pl: 4 }}
                              selected={selectedIndex === index}
                              onClick={() => handleListItemClick(to, index)}
                            >
                              <ListItemText primary={title} />
                            </ListItemButton>
                          );
                        })}
                      </List>
                    </Collapse>
                  </>
                )}
              </div>
            ) : text === "Blog" ? (
              <ListItem
                button
                key={index}
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(to, index)}
              >
                <a
                  href="https://blog.rsphcmb.org.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    textTransform: "capitalize",
                    color: "inherit",
                  }}
                >
                  {text}
                </a>
              </ListItem>
            ) : (
              <ListItem
                style={{ borderRadius: 6 }}
                button
                key={index}
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(to, index)}
              >
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
          height: "50%",
          width: "75%",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "transparent",
            color: "#00B0EF",
            borderColor: "#00B0EF",
            textTransform: "capitalize",
            marginX: 2,
            fontSize: 12,
          }}
        >
          <a
            href="https://myhealth.ng"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              textTransform: "lowercase",
              color: "#00B0EF",
            }}
          >
            myhealth.ng
          </a>
        </Button>
        <br />
        <Button
          variant="contained"
          disableElevation={true}
          // endIcon={<ArrowDropDown />}
          sx={{
            backgroundColor: "#00B0EF",
            color: "white",
            textTransform: "capitalize",
            fontSize: 12,
            mx: 2,
          }}
          onClick={() => {
            setMobileOpen(!mobileOpen);
            history.push("/covid19-vaccination-sites");
          }}
        >
          Covid-19 Vaccination Info
        </Button>
      </div>
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
