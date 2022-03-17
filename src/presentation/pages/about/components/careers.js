import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import bgImage from "../../../../assets/images/bg_shape.png";
import { Box } from "@mui/system";

const Careers = () => {
  let width;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  //   const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    width = "80%";
  } else {
    width = "64%";
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{ margin: "auto", paddingY: 8, padding: 6, borderRadius: 16 }}
      >
        <Box
          style={{
            margin: "auto",
            backgroundImage: "url(" + bgImage + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: width,
            padding: 21,
          }}
          padding={4}
        >
          <Box padding={3} justifyContent="center" alignItems={"center"}>
            <Typography
              variant="h3"
              textAlign={"center"}
              fontWeight="600"
              color="white"
              gutterBottom
            >
              Careers
            </Typography>
            <Typography
              sx={{
                paddingX: 6,
              }}
              textAlign={"center"}
              color="white"
              fontSize={15}
              fontWeight={"400"}
              gutterBottom
            >
              Join our team of hardworking and passionate people. We’re building
              a growth engine for modern healtcare in Rivers State.
            </Typography>
            <div
              style={{
                padding: 10,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  paddingX: 2,
                  backgroundColor: "white",
                  color: "#0658D4",
                  textTransform: "capitalize",
                  fontSize: 11,
                }}
              >
                See Job Openings
              </Button>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Careers;
