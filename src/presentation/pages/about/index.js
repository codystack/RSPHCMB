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
import Governor from "./components/governor";
// import { Box } from "@mui/system";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#00B0EF",
  },
  header: {
    height: "86vh",
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
  const { rsphcmbData } = useSelector((state) => state.about);

  let fontSize, mt;
  // let deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    fontSize = 32;
    mt = 200;
    // deviceType = "phone";
  } else if (sm) {
    fontSize = 42;
    mt = 400;
    // deviceType = "tablet";
  } else {
    mt = 150;
    fontSize = 48;
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
      <WhoWeAre data={rsphcmbData} />
      <VisionMission data={rsphcmbData} />
      <Governor data={rsphcmbData} />
      {/* <Container
        sx={{
          marginTop: deviceType === "phone" ? 4 : -10,
          marginBottom: 5,
          display: "flex",
          paddingY: 5,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          display="flex"
          flexDirection={"row"}
          justifyContent="left"
          alignItems={"stretch"}
          width={deviceType === "phone" ? "90%" : "75%"}
        >
          <div
            style={{
              backgroundColor: "#C0D4F3",
              padding: 24,
              flex: 1,
            }}
          >
            <Typography
              fontSize={deviceType === "phone" ? 16 : 21}
              color={"#012F74"}
            >
              Speech by the Deputy Governor of Rivers State
            </Typography>
          </div>
          <Button
            variant="contained"
            disableElevation={true}
            sx={{
              textTransform: "capitalize",
              paddingX: 4,
              cursor: "pointer",
              color: "white",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Container> */}
      <ManagementTeam />
      <Careers />
      <Partners />
    </div>
  );
};

export default About;
