import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import image from "../../../../assets/images/service_bg.png";

const Section2 = () => {
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
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          width={deviceType === "phone" ? "94%" : "56%"}
          justifyContent={"center"}
        >
          <Typography
            color="white"
            textAlign={"center"}
            fontSize={deviceType === "phone" ? 18 : 24}
            fontWeight="500"
            marginTop={12}
            marginBottom={21}
          >
            We aim ​to improve the effectiveness and efficiency of primary
            health care delivery in Nigeria and promote inclusive access to
            quality healthcare for all Nigerians regardless of who or where they
            are.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Section2;
