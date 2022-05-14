import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import image from "../../../../assets/images/service_bg.png";

const Section2 = () => {
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
          paddingY: 8,
        }}
      >
        <Box
          width={deviceType === "phone" ? "100%" : "70%"}
          justifyContent={"center"}
          paddingY={5}
        >
          <Typography
            color="white"
            textAlign={"center"}
            fontSize={deviceType === "phone" ? 18 : 24}
            fontWeight="500"
          >
            We aim ​to improve the health status of the population, satisfy our
            client and reduce financial catastrophic effect
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Section2;
