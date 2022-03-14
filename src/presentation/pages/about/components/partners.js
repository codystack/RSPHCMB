import { Container, Grid } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import whoLogo from "../../../../assets/images/who_logo.svg";
import unicefLogo from "../../../../assets/images/unicef_logo.svg";
import tciLogo from "../../../../assets/images/tci_logo.svg";
import nphcdaLogo from "../../../../assets/images/nphcda_logo.svg";
import clintonHealthLogo from "../../../../assets/images/clinton_health_logo.svg";
import viralogyLogo from "../../../../assets/images/inst_human_viralogy_logo.svg";

const Partners = () => {
  let deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));

  if (xs) {
    deviceType = "small";
  } else {
    deviceType = "big";
  }

  return (
    <div
      style={{
        backgroundColor: "#E8F1FF",
      }}
    >
      <Container
        sx={{
          padding: 4,
        }}
      >
        <div>
          <Grid container padding={deviceType === "small" ? 4 : 12}>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              sx={{
                borderRightColor: "black",
                borderRightWidth: 1,
                borderRightStyle: "solid",
                borderBottomColor: "black",
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
              }}
            >
              <Box
                padding={4}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <img src={whoLogo} alt="" width="100%" />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              sx={
                deviceType !== "small"
                  ? {
                      borderRightColor: "black",
                      borderRightWidth: 1,
                      borderRightStyle: "solid",
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      borderBottomStyle: "solid",
                    }
                  : {
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      borderBottomStyle: "solid",
                    }
              }
            >
              <Box
                padding={4}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <img src={unicefLogo} alt="" width="100%" />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              sx={
                deviceType !== "small"
                  ? {
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      borderBottomStyle: "solid",
                    }
                  : {
                      borderRightColor: "black",
                      borderRightWidth: 1,
                      borderRightStyle: "solid",
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      borderBottomStyle: "solid",
                    }
              }
            >
              <Box
                padding={4}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <img src={nphcdaLogo} alt="" width="100%" />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              sx={
                deviceType === "small"
                  ? {
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      borderBottomStyle: "solid",
                    }
                  : {
                      borderRightColor: "black",
                      borderRightWidth: 1,
                      borderRightStyle: "solid",
                    }
              }
            >
              <Box
                padding={4}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <img src={clintonHealthLogo} alt="" width="86%" />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              sx={{
                borderRightColor: "black",
                borderRightWidth: 1,
                borderRightStyle: "solid",
              }}
            >
              <Box
                padding={4}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <img src={viralogyLogo} alt="" width="100%" />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Box
                padding={4}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <img src={tciLogo} alt="" width="86%" />
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Partners;
