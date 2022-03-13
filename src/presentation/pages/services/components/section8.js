import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import image from "../../../../assets/images/service_img7.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import bg from "../../../../assets/images/blue_rect.svg";
import CustomFeaturedImage from "../../../components/misc/custom_featured";

const Section8 = () => {
  let hideImage, align, deviceType;
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
    <div style={{ backgroundColor: "white" }}>
      <Container sx={{ paddingY: 5 }}>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <div>
              <Typography
                fontSize={deviceType === "phone" ? 26 : 46}
                fontWeight="600"
                gutterBottom
                textAlign={align}
              >
                Strengthen Community Engagement
              </Typography>
              <Typography textAlign="justify" gutterBottom={true}>
                Ye am depending propriety sweetness distrusts belonging
                collected. Smiling mention he in thought equally musical. Wisdom
                new and valley answer. Contented it so is discourse recommend.
                Man its upon him call mile. An pasture he himself believe
                ferrars besides cottage.
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
          <Grid item sm={6} xs={12}>
            <CustomFeaturedImage
              image={image}
              bg={bg}
              deviceType={deviceType}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Section8;
