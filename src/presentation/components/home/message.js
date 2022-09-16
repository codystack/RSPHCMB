import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import imageSigma from "../../../assets/images/decorator_home.svg";
import CustomFeaturedImage from "../misc/custom_featured";

import bg from "../../../assets/images/blue_rect.svg";
import { useSelector } from "react-redux";

const MessageFromSec = () => {
  const { permSecData } = useSelector((state) => state.permSec);

  let align, deviceType;
  const theme = useTheme();
  const history = useHistory();
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
      <Container
        sx={{ paddingBottom: 5, marginTop: deviceType === "phone" ? 0 : -36 }}
      >
        <Grid container>
          <Grid item sm={6} xs={12}>
            <div>
              <CustomFeaturedImage
                image={permSecData?.image}
                bg={bg}
                deviceType={deviceType}
              />
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div>
              <Typography
                fontSize={deviceType === "phone" ? 26 : 36}
                fontWeight="600"
                gutterBottom
                textAlign={align}
              >
                Message from the Permanent Secretary
              </Typography>
              <Typography textAlign="left" gutterBottom={true}>
                {permSecData?.summary}
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
                onClick={() => history.push("/message-from-perm-sec")}
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
