import React from "react";
import { makeStyles } from "@mui/styles";
import image from "../../../assets/images/header_background.png";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";
import MobileSection from "./components/mobile_section";
import Section3 from "./components/section3";
import Section4 from "./components/section4";

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

const Department = () => {
  const classes = useStyles();
  const { departmentData } = useSelector((state) => state.department);

  let fontSize, fontSize2, mt, deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    fontSize2 = 24;
    fontSize = 32;
    mt = 150;
    deviceType = "phone";
  } else if (sm) {
    fontSize2 = 28;
    fontSize = 42;
    mt = 400;
    deviceType = "tablet";
  } else {
    mt = 150;
    fontSize2 = 32;
    fontSize = 48;
    deviceType = "pc";
  }

  return (
    <div>
      <div className={classes.header}>
        <div style={{ marginTop: -(fontSize + mt) }}>
          <Typography fontSize={fontSize} textAlign="center" fontWeight={"700"}>
            Departments
          </Typography>
        </div>
      </div>
      <div style={{ marginTop: -128 }}>
        {departmentData &&
          departmentData?.map((item, index) => (
            <>
              {deviceType === "phone" ? (
                <MobileSection
                  item={item}
                  id={item?.id}
                  image={item?.image}
                  title={item?.title}
                  fontSize={fontSize2}
                  description={item?.description}
                />
              ) : index % 2 === 0 ? (
                <Section3
                  id={item?.id}
                  title={item?.title}
                  description={item?.description}
                  image={item?.image}
                  fontSize={fontSize2}
                  deviceType={deviceType}
                  item={item}
                />
              ) : (
                <Section4
                  id={item?.id}
                  item={item}
                  title={item?.title}
                  description={item?.description}
                  image={item?.image}
                  fontSize={fontSize2}
                  deviceType={deviceType}
                />
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default Department;
