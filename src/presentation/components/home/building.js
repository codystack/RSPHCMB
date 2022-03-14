import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import imageSigma from "../../../assets/images/decorator.svg";
import ImageMasonry from "../misc/masonry";

import image1 from "../../../assets/images/home_masonry1.png";
import image2 from "../../../assets/images/home_masonry2.png";
import image3 from "../../../assets/images/home_masonry3.png";
import image4 from "../../../assets/images/home_masonry4.png";

const tempList = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
];

const BuildingSection = () => {
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
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "end",
          marginTop: 48,
        }}
      >
        <img src={imageSigma} alt="" width={"7%"} style={{ marginLeft: -5 }} />
      </div>
      <Container sx={{ paddingTop: -16, paddingBottom: 2 }}>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <ImageMasonry list={tempList} factor={"1.15x"} width="" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <div>
              <Typography
                fontSize={deviceType === "phone" ? 24 : 36}
                fontWeight="600"
                gutterBottom
                textAlign={align}
              >
                Building a culture of health and well-being in Rivers State.
              </Typography>
              <Typography textAlign="justify" gutterBottom={true}>
                On July 11th 2011, the government of Rivers State inaugurated
                the Rivers State Primary Health Care Management Board (RSPHCMB)
                to actualize its laudable efforts in the promotion of health
                care delivery in the State in a bid to meet with the Millennium
                Development Goals (MDGs).
              </Typography>
              <br />
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "transparent",
                  color: "#000F37",
                  borderColor: "#000F37",
                  textTransform: "capitalize",
                }}
              >
                Learn More
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BuildingSection;
