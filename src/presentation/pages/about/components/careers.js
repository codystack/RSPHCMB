import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// import bgImage from "../../../../assets/images/bg_shape.png";
import { Box } from "@mui/system";

const Careers = () => {
  let deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    // width = "96%";
    deviceType = "phone";
  } else if (sm) {
    // width = "80%";
    deviceType = "tablet";
  } else {
    // width = "64%";
    deviceType = "big";
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container sx={{ paddingY: 8 }}>
        <Box
          borderRadius={6}
          style={{
            backgroundColor: "#0056D6",
          }}
          padding={3}
        >
          <Box padding={2} justifyContent="center" alignItems={"center"}>
            <Typography
              variant={
                deviceType === "phone"
                  ? "h5"
                  : deviceType === "tablet"
                  ? "h4"
                  : "h3"
              }
              textAlign={"center"}
              fontWeight="600"
              color="white"
            >
              Careers
            </Typography>
            <Typography
              sx={{
                paddingX:
                  deviceType === "phone" ? 1 : deviceType === "tablet" ? 2 : 6,
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
                <a
                  href="https://rsphcmb.breezy.hr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    textTransform: "capitalize",
                    color: "#0658D4",
                  }}
                >
                  See Job Openings
                </a>
              </Button>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Careers;
