import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import image from "../../../../assets/images/wike.png";
// import image2 from "../../../../assets/images/wike_deputy.png";

const Governor = (props) => {
  let { data } = props;

  let deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    // hideImage = true;
    // align = "center";
    deviceType = "phone";
  } else if (sm) {
    // hideImage = true;
    // align = "center";
    deviceType = "tablet";
  } else {
    // hideImage = false;
    deviceType = "pc";
    // align = "left";
  }

  return (
    <div>
      <Container
        sx={{
          paddingTop: 8,
        }}
      >
        <Grid
          container
          spacing={1}
          paddingX={
            deviceType === "phone" ? 0 : deviceType === "tablet" ? 2 : 5
          }
        >
          <Grid
            xs={12}
            sm={12}
            md={12}
            display="flex"
            flexDirection="row"
            justifyContent={"center"}
            alignItems="center"
            padding={
              deviceType === "phone" ? 1 : deviceType === "tablet" ? 2 : 4
            }
          >
            <Box
              width={
                deviceType === "phone"
                  ? "100%"
                  : deviceType === "tablet"
                  ? "80%"
                  : "50%"
              }
              padding={2}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="stretch"
            >
              <img src={data?.governorImage} alt="" width={"100%"} />
              <Box
                bgcolor={"#00B0EF"}
                padding={2}
                marginY={
                  deviceType === "phone" ? 1.5 : deviceType === "tablet" ? 2 : 4
                }
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
              >
                <Typography fontSize={12} color="white" textAlign={"center"}>
                  HIS EXCELLENCY
                </Typography>
                <Box
                  display="flex"
                  flexDirection={"row"}
                  justifyContent="center"
                  alignItems="baseline"
                >
                  <Typography color="white" textAlign={"center"}>
                    {data?.governorName}
                  </Typography>
                </Box>
                <Typography fontSize={12} color="white" textAlign={"center"}>
                  GOVERNOR, RIVERS STATE
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={12}
            display="flex"
            flexDirection="row"
            justifyContent={"center"}
            alignItems="center"
            width="40%"
            padding={
              deviceType === "phone" ? 1 : deviceType === "tablet" ? 3 : 5
            }
          >
            <Box
              width={
                deviceType === "phone"
                  ? "80%"
                  : deviceType === "tablet"
                  ? "70%"
                  : "36%"
              }
              padding={2}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="stretch"
            >
              <img src={data?.deputyGovImage} alt="" width={"100%"} />
              <Box
                bgcolor={"#00B0EF"}
                padding={2}
                marginY={
                  deviceType === "phone" ? 1.5 : deviceType === "tablet" ? 2 : 4
                }
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
              >
                <Typography fontSize={12} color="white" textAlign={"center"}>
                  HER EXCELLENCY
                </Typography>
                <Box
                  display="flex"
                  flexDirection={"row"}
                  justifyContent="center"
                  alignItems="baseline"
                >
                  <Typography color="white" textAlign={"center"}>
                    {data?.deputyGovName}
                  </Typography>
                  {/* <Typography
                    color="white"
                    textAlign={"center"}
                    fontSize={12}
                    paddingLeft={0.5}
                  >
                    CON.
                  </Typography> */}
                </Box>
                <Typography fontSize={12} color="white" textAlign={"center"}>
                  DEPUTY GOVERNOR, RIVERS STATE
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Governor;
