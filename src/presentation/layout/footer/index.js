import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo_footer.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#00B0EF",
  },
  bottom: {
    backgroundColor: "#21313B",
    padding: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "stretch",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 28,
  },
  rowEnd: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "end",
  },
}));

const Footer = () => {
  const classes = useStyles();

  let alignment, alignLeft, deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    alignment = "center";
    alignLeft = "center";
    deviceType = "phone";
  } else if (sm) {
    alignment = "end";
    alignLeft = "left";
    deviceType = "tablet";
  } else {
    alignment = "end";
    alignLeft = "left";
    deviceType = "pc";
  }

  return (
    <div>
      <div className={classes.root}>
        <Container className={classes.container}>
          <Grid container justifyContent="center">
            <Grid item sm={5} xs={12} md={5}>
              <Typography
                gutterBottom={true}
                variant="body2"
                color={"white"}
                fontSize={32}
                textAlign={alignLeft}
              >
                Everything you need to know about COVID-19 Vaccination
              </Typography>
            </Grid>
            <Grid
              item
              sm={7}
              xs={12}
              md={7}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: alignment,
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#FFF",
                  textTransform: "capitalize",
                  paddingY: 2,
                  paddingX: 4,
                  backgroundColor: "transparent",
                  borderColor: "#fff",
                }}
              >
                Register Here
              </Button>
              <div style={{ margin: 10 }} />
              <Button
                variant="contained"
                size="large"
                sx={{
                  color: "#00B0EF",
                  textTransform: "capitalize",
                  paddingY: 2,
                  paddingX: 4,
                  backgroundColor: "#fff",
                }}
              >
                View Sites
              </Button>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container>
            <Grid item md={3} sm={4} xs={12}>
              <div>
                <img src={logo} alt="footer-img" />
                <Typography
                  color="white"
                  fontSize={15}
                  gutterBottom
                  textAlign={"justify"}
                >
                  We provide a network of services, benefits, and resources to
                  empower the healthcare community in Nigeria to improve the
                  effectiveness and efficiency of primary health care delivery.
                </Typography>
              </div>
            </Grid>
            <Grid item md={9} sm={8} xs={12}>
              {deviceType === "phone" ? (
                <>
                  <Grid
                    container
                    xs={12}
                    sx={{
                      marginTop: 4,
                    }}
                  >
                    <Grid xs={6}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          variant="h6"
                          gutterBottom={true}
                          color="white"
                        >
                          Service
                        </Typography>
                        <Link color="" to="/">
                          Control Diseases
                        </Link>
                        <Link to="/">Health Access</Link>
                        <Link to="/">Quality Health</Link>
                        <Link to="/">Health Workforce</Link>
                        <Link to="/">Community Engagement</Link>
                      </div>
                    </Grid>

                    <Grid item xs={6}>
                      <div className={classes.rowEnd}>
                        <Typography
                          variant="h6"
                          gutterBottom={true}
                          color="white"
                        >
                          Useful Links
                        </Typography>
                        <Link color="" to="/">
                          Knowledge Base
                        </Link>
                        <Link to="/">Terms of Service</Link>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">About Us</Link>
                        <Link to="/">Blog</Link>
                      </div>
                    </Grid>
                  </Grid>
                  <br />

                  <Grid
                    container
                    xs={12}
                    sx={{
                      marginTop: 4,
                    }}
                  >
                    <Grid xs={6}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          variant="h6"
                          gutterBottom={true}
                          color="white"
                        >
                          Resources
                        </Typography>
                        <Link color="" to="/">
                          FAQ’s
                        </Link>
                        <Link to="/">Gallery</Link>
                        <Link to="/">Publications</Link>
                        <Link to="/">COVID-19 FAQ's</Link>
                      </div>
                    </Grid>

                    <Grid item xs={6}>
                      <div className={classes.rowEnd}>
                        <Typography
                          variant="h6"
                          gutterBottom={true}
                          color="white"
                        >
                          Support
                        </Typography>
                        <Link color="" to="/">
                          Contact Us
                        </Link>
                        <Link to="/">Sitemap</Link>
                        <Link to="/">Chat Us</Link>
                        <Link to="/">Consultation</Link>
                      </div>
                    </Grid>
                  </Grid>
                </>
              ) : deviceType === "tablet" ? (
                <>
                  <Grid container sm={12}>
                    <Grid sm={6}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          gutterBottom={true}
                          color="white"
                        >
                          Service
                        </Typography>
                        <Link color="" to="/">
                          Control Diseases
                        </Link>
                        <Link to="/">Health Access</Link>
                        <Link to="/">Quality Health</Link>
                        <Link to="/">Health Workforce</Link>
                        <Link to="/">Community Engagement</Link>
                      </div>
                    </Grid>

                    <Grid item sm={6}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          gutterBottom={true}
                          color="white"
                        >
                          Useful Links
                        </Typography>
                        <Link color="" to="/">
                          Knowledge Base
                        </Link>
                        <Link to="/">Terms of Service</Link>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">About Us</Link>
                        <Link to="/">Blog</Link>
                      </div>
                    </Grid>
                  </Grid>
                  <br />

                  <Grid
                    container
                    sm={12}
                    sx={{
                      marginTop: 4,
                    }}
                  >
                    <Grid sm={6}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          gutterBottom={true}
                          color="white"
                        >
                          Resources
                        </Typography>
                        <Link color="" to="/">
                          FAQ’s
                        </Link>
                        <Link to="/">Gallery</Link>
                        <Link to="/">Publications</Link>
                        <Link to="/">COVID-19 FAQ's</Link>
                      </div>
                    </Grid>

                    <Grid item sm={6}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          gutterBottom={true}
                          color="white"
                        >
                          Support
                        </Typography>
                        <Link color="" to="/">
                          Contact Us
                        </Link>
                        <Link to="/">Sitemap</Link>
                        <Link to="/">Chat Us</Link>
                        <Link to="/">Consultation</Link>
                      </div>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid container>
                    <Grid item md={3} paddingX={4} paddingY={1}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          variant="h6"
                          gutterBottom={true}
                          color="white"
                        >
                          Service
                        </Typography>
                        <Link color="" to="/">
                          Control Diseases
                        </Link>
                        <Link to="/">Health Access</Link>
                        <Link to="/">Quality Health</Link>
                        <Link to="/">Health Workforce</Link>
                        <Link to="/">Community Engagement</Link>
                      </div>
                    </Grid>

                    <Grid item md={3} paddingX={4} paddingY={1}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          variant="h6"
                          gutterBottom={true}
                          color="white"
                        >
                          Useful Links
                        </Typography>
                        <Link color="" to="/">
                          Knowledge Base
                        </Link>
                        <Link to="/">Terms of Service</Link>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">About Us</Link>
                        <Link to="/">Blog</Link>
                      </div>
                    </Grid>

                    <Grid item md={3} paddingX={4} paddingY={1}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          variant="h6"
                          gutterBottom={true}
                          color="white"
                        >
                          Resources
                        </Typography>
                        <Link color="" to="/">
                          FAQ’s
                        </Link>
                        <Link to="/">Gallery</Link>
                        <Link to="/">Publications</Link>
                        <Link to="/">COVID-19 FAQ's</Link>
                      </div>
                    </Grid>

                    <Grid item md={3} paddingX={4} paddingY={1}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          variant="h6"
                          gutterBottom={true}
                          color="white"
                        >
                          Support
                        </Typography>
                        <Link color="" to="/">
                          Contact Us
                        </Link>
                        <Link to="/">Sitemap</Link>
                        <Link to="/">Chat Us</Link>
                        <Link to="/">Consultation</Link>
                      </div>
                    </Grid>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
          <br />
          <br />
        </Container>
      </div>
      <div className={classes.bottom}>
        <Typography
          style={{ margin: "auto" }}
          color="white"
          textAlign={"center"}
        >
          Copyright © Rivers State Primary Health Care Management Board | All
          Rights Reserved
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
