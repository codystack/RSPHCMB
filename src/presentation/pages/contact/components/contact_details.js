import { Avatar, Container, Typography } from "@mui/material";
import React from "react";
import image from "../../../../assets/images/pattern_dot.svg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Call, Email, LocationOn } from "@mui/icons-material";
import ContactForm from "../../../components/forms/contact";

const ContactDetails = (props) => {
  let wdt, align, align2;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  if (xs) {
    // hideImage = true;
    align = "center";
    // width = "96%";
    wdt = "25%";
  } else {
    // hideImage = false;
    align = "start";
    // width = "70%";
    wdt = "40%";
  }

  return (
    <div>
      <Container
        sx={{
          paddingTop: 4,
          paddingBottom: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={5} md={6}>
            <Box
              display={"flex"}
              flexDirection="row"
              justifyContent={align}
              alignItems={align}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: align,
                  alignItems: align,
                }}
              >
                <img
                  src={image}
                  alt="contact-pattern"
                  width={wdt}
                  //   style={{ marginBottom: -16, marginLeft: 48 }}
                />
              </div>
              <div>
                <Typography
                  fontWeight={"500"}
                  fontSize={36}
                  color="#012F74"
                  gutterBottom
                >
                  Contact Details
                </Typography>
                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    variant="circular"
                    sx={{
                      backgroundColor: "#012F74",
                      width: 32,
                      height: 32,
                    }}
                  >
                    <Email fontSize="14" />
                  </Avatar>
                  <div style={{ marginRight: 10 }} />
                  <Typography fontSize={18} fontWeight="400">
                    info@rsphcmb.org.ng
                  </Typography>
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    variant="circular"
                    sx={{
                      backgroundColor: "#012F74",
                      width: 32,
                      height: 32,
                    }}
                  >
                    <Call fontSize="14" />
                  </Avatar>
                  <div style={{ marginRight: 10 }} />
                  <Typography fontSize={18} fontWeight="400" textAlign={"left"}>
                    +234 902 392 9940
                  </Typography>
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    variant="circular"
                    sx={{
                      backgroundColor: "#012F74",
                      width: 32,
                      height: 32,
                    }}
                  >
                    <LocationOn fontSize="14" />
                  </Avatar>
                  <div style={{ marginRight: 10 }} />
                  <Typography fontSize={18} fontWeight="400" textAlign={"left"}>
                    Chief P.G. Warmate House, No 2 Chief Olu-Obasanjo Road,
                    Waterlines Junction, Port Harcourt, Rivers State.
                  </Typography>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            <Box paddingX={4}>
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactDetails;
