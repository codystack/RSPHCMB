import { Container, Typography } from "@mui/material";
// import { Box } from "@mui/system";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import image from "../../../assets/images/health_care_access.png";
import upperDots from "../../../assets/images/dots_upper.svg";
import lowerDots from "../../../assets/images/dots_down.svg";
import { useSelector } from "react-redux";

const HealthCare = () => {
  const { healthAccessData } = useSelector((state) => state.home);

  let deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    deviceType = "phone";
    // align = "center";
  } else if (sm) {
    deviceType = "tablet";
  } else {
    deviceType = "big";
    // align = "left";
  }

  return (
    <div
      style={{
        backgroundImage: "url(" + healthAccessData?.image + ")",
        backgroundSize: deviceType === "big" ? "cover" : "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000000c0",
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
            paddingY: deviceType === "phone" ? 2 : 18,
          }}
        >
          <div
            style={{
              width: deviceType === "phone" ? "94%" : "64%",
              justifyContent: "center",
            }}
          >
            <Typography
              fontSize={deviceType === "phone" ? 28 : 36}
              fontWeight="700"
              textAlign={"center"}
              color={"white"}
              gutterBottom={true}
            >
              {healthAccessData?.title}
            </Typography>
            <Typography
              color="white"
              textAlign={"center"}
              fontSize={deviceType === "phone" ? 14 : 20}
              fontWeight="500"
            >
              {healthAccessData?.description}
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
    </div>
  );
};

export default HealthCare;
