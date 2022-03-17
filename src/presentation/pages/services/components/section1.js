import { Container, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import image from "../../../../assets/images/service_img1.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import pattern from "../../../../assets/images/pattern_dot.svg";

const Section1 = () => {
  let hideImage, align;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  //   const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    hideImage = true;
    align = "center";
  } else {
    hideImage = false;
    align = "left";
  }

  return (
    <div style={{ backgroundColor: "white", marginTop: -75 }}>
      <Container sx={{ paddingY: 8 }}>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <div>
              <Typography
                fontSize={46}
                fontWeight="600"
                gutterBottom
                textAlign={align}
              >
                Provide Best Health Care Treatments
              </Typography>
              <Typography textAlign="justify" gutterBottom={true}>
                With some 150 Model Primary Health Centres built and over 200
                standard Primary Health Centres across the state, the RSPHCMB is
                saddled with the management of these Primary Health Facilities.
                RSPHCMB is jointly funded by the Local Government Councils,
                Rivers State Government with technical support from the National
                Primary Health Care Development Agency (NPHCDA).
              </Typography>

              <Typography textAlign={"justify"} gutterBottom>
                With some 150 Model Primary Health Centres built and over 200
                standard Primary Health Centres across the state, the RSPHCMB is
                saddled with the management of these Primary Health Facilities.
                RSPHCMB is jointly funded by the Local Government Councils,
                Rivers State Government with technical support from the National
                Primary Health Care Development Agency (NPHCDA).
              </Typography>
            </div>
          </Grid>
          <Grid>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "end",
                marginTop: -48,
                marginBottom: 24,
              }}
            >
              <img
                hidden={hideImage}
                src={image}
                alt="who_we-are_img"
                width={"70%"}
                style={{ zIndex: 100 }}
              />
              <img
                src={pattern}
                alt=""
                width="36%"
                style={{
                  marginTop: -50,
                  marginRight: -75,
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Section1;
