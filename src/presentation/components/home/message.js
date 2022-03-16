import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import imageSigma from "../../../assets/images/decorator_home.svg";
import CustomFeaturedImage from "../misc/custom_featured";

import bg from "../../../assets/images/blue_rect.svg";
import image from "../../../assets/images/dg.png";

const MessageFromSec = () => {
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
      <img src={imageSigma} alt="" width={"7%"} style={{ marginLeft: -5 }} />
      <Container sx={{ paddingY: 5, marginTop: -18 }}>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <CustomFeaturedImage
              image={image}
              bg={bg}
              deviceType={deviceType}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <div>
              <Typography
                fontSize={deviceType === "phone" ? 24 : 36}
                fontWeight="600"
                gutterBottom
                textAlign={align}
              >
                Message from the Parmanent Secretary
              </Typography>
              <Typography textAlign="justify" gutterBottom={true}>
                Rivers State Primary Health Care Management Board (RSPHCMB) is a
                specialized agency of the Rivers State Government with a clear
                mandate to plan, implement, monitor and evaluate all Primary
                Health Care programmes and activities in Rivers State.
              </Typography>
              <Typography textAlign="justify" gutterBottom={true}>
                Since its establishment in 2011, it has embarked on high impact
                interventions to improve the health of under-5 children and
                women with attendant reduction in morbidity and mortality among
                this population. However, all age groups have equal access to
                385 health facilities spread across the state.
              </Typography>
              <br />
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "transparent",
                  color: "#000F37",
                  borderColor: "#000F37",
                  textTransform: "capitalize",
                  borderRadius: 0,
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

export default MessageFromSec;
