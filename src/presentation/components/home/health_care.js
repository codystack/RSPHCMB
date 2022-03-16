import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import image from "../../../assets/images/health_care_access.png";
import upperDots from "../../../assets/images/dots_upper.svg";
import lowerDots from "../../../assets/images/dots_down.svg";

const HealthCare = () => {
  let align, deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    deviceType = "phone";
    align = "center";
  } else if (sm) {
    deviceType = "tablet";
  } else {
    deviceType = "big";
    align = "left";
  }

  return (
    <div
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "end",
        }}
      >
        <img src={upperDots} alt="" style={{ marginTop: -56 }} />
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingY: 12,
        }}
      >
        <div
          style={{
            width: deviceType === "phone" ? "94%" : "64%",
            justifyContent: "center",
          }}
        >
          <Typography
            fontSize={38}
            textAlign={"center"}
            fontWeight="700"
            color={"white"}
            gutterBottom={true}
          >
            Health Care Access
          </Typography>
          <Typography
            color="white"
            textAlign={"center"}
            fontSize={deviceType === "phone" ? 16 : 20}
            fontWeight="500"
          >
            We provide a network of services, benefits, and resources to empower
            the healthcare community in Rivers State to improve the
            effectiveness and efficiency of primary health care delivery. We aim
            to create healthy communities across Nigeria and make health and
            wellbeing a priority for everyone, especially the most vulnerable.
          </Typography>
        </div>
      </Container>
      <Container
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <img src={lowerDots} alt="" style={{ marginBottom: -56 }} />
      </Container>
    </div>
  );
};

export default HealthCare;
