import React from "react";
import { makeStyles } from "@mui/styles";
import image from "../../../assets/images/header_background.png";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import WhoWeAre from "./components/who_we_are";
import VisionMission from "./components/vision_mission";
import ManagementTeam from "./components/team";
import Careers from "./components/careers";
import Partners from "./components/partners";

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

const About = () => {
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
    mt = 165;
    fontSize = 48;
    deviceType = "pc";
  }

  return (
    <div>
      <div className={classes.header}>
        <div style={{ marginTop: -(fontSize + mt) }}>
          <Typography fontSize={fontSize} textAlign="center" fontWeight={"700"}>
            About Us
          </Typography>
          <Typography textAlign={"center"} maxWidth={286} gutterBottom={true}>
            To bring positive change to the Rivers State healthcare value chain.
          </Typography>
        </div>
      </div>
      <WhoWeAre />
      <VisionMission />
      <ManagementTeam />
      <Careers />
      <Partners />
    </div>
  );
};

export default About;
