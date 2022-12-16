import React from "react";
import { makeStyles } from "@mui/styles";
import image from "../../../assets/images/header_background.png";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import MobileSection from "./components/mobile_section";

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
 
const Services = () => {
  const classes = useStyles();
  const { serviceData } = useSelector((state) => state.service);

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
  }

  return (
    <div>
      <div className={classes.header}>
        <div style={{ marginTop: -(fontSize + mt) }}>
          <Typography fontSize={fontSize} textAlign="center" fontWeight={"700"}>
            What we do
          </Typography>
          <Typography textAlign={"center"} maxWidth={365} gutterBottom={true}>
            In pursuance of our overall mission, the RSPHCMB strives to fulfil
            it's corporate goal.
          </Typography>
        </div>
      </div>
      <Section1 fontSize={fontSize} deviceType={deviceType} />
      <Section2 fontSize={fontSize} deviceType={deviceType} />
      {serviceData &&
        serviceData?.map((item, index) => (
          <>
            {deviceType === "phone" ? (
              <MobileSection
                image={item?.image}
                title={item?.title}
                summary={item?.summary}
                body={item?.body}
              />
            ) : index % 2 === 0 ? (
              <Section3
                title={item?.title}
                summary={item?.summary}
                body={item?.body}
                image={item?.image}
                fontSize={fontSize}
                deviceType={deviceType}
              />
            ) : (
              <Section4
                title={item?.title}
                summary={item?.summary}
                body={item?.body}
                image={item?.image}
                fontSize={fontSize}
                deviceType={deviceType}
              />
            )}
          </>
        ))}
    </div>
  );
};

export default Services;
