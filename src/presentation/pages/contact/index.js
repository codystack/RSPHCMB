import React from "react";
import { makeStyles } from "@mui/styles";
import image from "../../../assets/images/header_background.png";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ContactDetails from "./components/contact_details";
import Decorator from "./components/decorator";
import Map from "./components/map";
import { Box } from "@mui/system";
// import { Grid } from "@mui/material";
// import ContactForm from "../../components/forms/contact";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#00B0EF",
  },
  header: {
    height: "96vh",
    backgroundImage: "url(" + image + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  rowEnd: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "end",
  },
}));

const Contact = () => {
  const classes = useStyles();

  let fontSize, mt, deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    fontSize = 32;
    mt = 150;
    deviceType = "phone";
  } else if (sm) {
    fontSize = 42;
    mt = 400;
    deviceType = "tablet";
  } else {
    mt = 150;
    fontSize = 48;
    deviceType = "pc";
  }

  return (
    <div>
      <div className={classes.header}>
        <div style={{ marginTop: -(fontSize + mt) }}>
          <Typography fontSize={fontSize} textAlign="center" fontWeight={"700"}>
            Hi! How can we help?
          </Typography>
          <Typography textAlign={"center"} gutterBottom={true}>
            For any enquiries, or to say hello, get in touch 👋
          </Typography>
        </div>
      </div>
      <div
        style={{
          marginTop: -75,
        }}
      >
        <ContactDetails />
      </div>
      <Decorator deviceType={deviceType} />
      <Box paddingY={4}>
        <Map address={"No 2 Olu-Obasanjo Road, Waterlines"} />
      </Box>
    </div>
  );
};

export default Contact;
