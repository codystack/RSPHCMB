import { Avatar, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import image from "../../../../assets/images/pattern_dot.svg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import {
  Call,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Twitter,
} from "@mui/icons-material";
import ContactForm from "../../../components/forms/contact";
import { useSelector } from "react-redux";

const ContactDetails = (props) => {
  const { contactData } = useSelector((state) => state.contact);

  let wdt, align, deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));

  if (xs) {
    // hideImage = true;
    align = "center";
    deviceType = "small";
    wdt = "25%";
  } else {
    deviceType = "pc";
    align = "start";
    wdt = "40%";
  }

  return (
    <div>
      <Container
        sx={{
          paddingY: 8,
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
                    {contactData?.email}
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
                    {contactData?.phone}
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
                    {contactData?.address}
                  </Typography>
                </div>
              </div>
            </Box>
            {deviceType === "pc" ? (
              <Box
                pt={5}
                display="flex"
                flexDirection={"row"}
                justifyContent="center"
                alignItems="center"
              >
                <IconButton>
                  <a
                    href="https://www.facebook.com/Rivers-State-Primary-Health-Care-Management-Board-2260891724188168/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook
                      sx={{
                        color: "#18113C",
                      }}
                    />
                  </a>
                </IconButton>

                <IconButton>
                  <a href="https://" target="_blank" rel="noopener noreferrer">
                    <Instagram
                      sx={{
                        color: "#18113C",
                      }}
                    />
                  </a>
                </IconButton>

                <IconButton>
                  <a
                    href="https://twitter.com/rivers_phcmb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter
                      sx={{
                        color: "#18113C",
                      }}
                    />
                  </a>
                </IconButton>

                <IconButton>
                  <a href="https://" target="_blank" rel="noopener noreferrer">
                    <LinkedIn
                      sx={{
                        color: "#18113C",
                      }}
                    />
                  </a>
                </IconButton>
              </Box>
            ) : (
              <></>
            )}
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            <Box paddingX={4}>
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
        {deviceType !== "pc" ? (
          <Box
            pt={5}
            display="flex"
            flexDirection={"row"}
            justifyContent="center"
            alignItems="center"
          >
            <IconButton>
              <a
                href="https://www.facebook.com/Rivers-State-Primary-Health-Care-Management-Board-2260891724188168/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  sx={{
                    color: "#18113C",
                  }}
                />
              </a>
            </IconButton>

            <IconButton>
              <a href="https://" target="_blank" rel="noopener noreferrer">
                <Instagram
                  sx={{
                    color: "#18113C",
                  }}
                />
              </a>
            </IconButton>

            <IconButton>
              <a
                href="https://twitter.com/rivers_phcmb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter
                  sx={{
                    color: "#18113C",
                  }}
                />
              </a>
            </IconButton>

            <IconButton>
              <a href="https://" target="_blank" rel="noopener noreferrer">
                <LinkedIn
                  sx={{
                    color: "#18113C",
                  }}
                />
              </a>
            </IconButton>
          </Box>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default ContactDetails;
