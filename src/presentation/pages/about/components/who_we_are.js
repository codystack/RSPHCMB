import { Container, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import image from "../../../../assets/images/we_are_img.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const WhoWeAre = () => {
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
      <Container
        sx={{
          paddingY: 8,
        }}
      >
        <Grid container>
          <Grid item sm={6} xs={12}>
            <div>
              <Typography
                fontSize={46}
                fontWeight="600"
                gutterBottom
                textAlign={align}
              >
                Who we are
              </Typography>
              <Typography gutterBottom={true}>
                We provide promotive, preventive, curative and rehabilitative
                care that is available, accessible, affordable and of quality
                standard in our Primary Health Centers (PHCs)
              </Typography>
              <Typography variant="h6">
                Provide Best Health Care Treatments
              </Typography>
              <Typography textAlign={"justify"} gutterBottom>
                With some 150 Model Primary Health Centres built and over 200
                standard Primary Health Centres across the state, the RSPHCMB is
                saddled with the management of these Primary Health Facilities.
                RSPHCMB is jointly funded by the Local Government Councils,
                Rivers State Government with technical support from the National
                Primary Health Care Development Agency (NPHCDA). With some 150
                Model Primary Health Centres built and over 200 standard Primary
                Health Centres across the state, the RSPHCMB is saddled with the
                management of these Primary Health Facilities. RSPHCMB is
                jointly funded by the Local Government Councils, Rivers State
                Government with technical support from the National Primary
                Health Care Development Agency (NPHCDA).
              </Typography>
            </div>
          </Grid>
          <Grid>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
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
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WhoWeAre;
