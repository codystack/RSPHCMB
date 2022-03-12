import { Container, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import image from "../../../../assets/images/we_are_img.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const VisionMission = () => {
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
    <div
      style={{ backgroundColor: "#E8F1FF", paddingTop: 24, paddingBottom: 24 }}
    >
      <Container>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <div>
              <Typography fontSize={46} fontWeight="700" textAlign={align}>
                Our Vision
              </Typography>
              <Typography gutterBottom={true} textAlign={align}>
                To deliver the highest standard of primary health care services
                and programmes, in order to improve the health status of
                residents of Rivers State.
              </Typography>
              <Typography fontSize={46} fontWeight="700" textAlign={align}>
                Mission Statement
              </Typography>
              <Typography textAlign={"justify"} gutterBottom>
                To promote and deliver the highest attainable level of primary
                health care services in Rivers State through: Formulation of
                policies based on best-practices and adequate planning;
                Provision of sustainable and high quality services to the
                people; Promotion of teamwork and capacity building for
                employees; Effective and efficient use of allocated resources.
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
              {/* <img
                hidden={hideImage}
                src={image}
                alt="who_we-are_img"
                width={"70%"}
              /> */}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default VisionMission;
