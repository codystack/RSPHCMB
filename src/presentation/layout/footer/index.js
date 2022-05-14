import { Button, Divider, Grid, IconButton, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../../assets/images/logo_footer.svg";
import curvedBg from "../../../assets/images/curved_pattern_white.svg";
import { Box } from "@mui/system";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

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
    // position: "absolute",
    // background: "#00B0EF",

    // left: 0,
    // right: 0,
    // zIndex: 10,
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
  const history = useHistory();

  // const [hover1, setHover1] = React.useState("outlined");
  // const [hover2, setHover2] = React.useState("contained");

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
                // variant={hover1}
                // onMouseEnter={() => {
                //   setHover1("contained");
                // }}
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  borderColor: "white",
                  textTransform: "capitalize",
                  paddingX: 4,
                  paddingY: 1,
                  ":hover": {
                    backgroundColor: "white",
                    color: "#00B0EF",
                    borderColor: "#fff",
                  },
                }}
                disableElevation={true}
                // onMouseLeave={() => {
                //   setHover1("outlined");
                // }}
                onClick={() => history.push("/covid19-vaccination-sites")}
                size="large"
                // sx={{
                //   color: "#FFF",
                //   textTransform: "capitalize",
                //   paddingY: 1,
                //   paddingX: 4,
                //   borderColor: "#fff",
                //   borderRadius: 0,
                //   ":hover": {
                //     backgroundColor: "white",
                //     color: "#00B0EF",
                //     borderColor: "#fff",
                //   },
                // }}
              >
                View Sites
              </Button>
              <div style={{ margin: 10 }} />
              {/* <Button
                variant={hover2}
                onMouseEnter={() => {
                  setHover2("outlined");
                }}
                disableElevation={true}
                onMouseLeave={() => {
                  setHover2("contained");
                }}
                size="large"
                sx={{
                  color: "#00B0EF",
                  textTransform: "capitalize",
                  paddingY: 1,
                  paddingX: 4,
                  backgroundColor: "#fff",
                  borderColor: "#fff",
                  borderRadius: 0,
                  ":hover": {
                    backgroundColor: "#white",
                    color: "white",
                    borderColor: "#fff",
                  },
                }}
              >
                View Sites
              </Button> */}
            </Grid>
          </Grid>
          <br />
          <br />
          <Divider color="white" />
          <br />
          <br />
        </Container>
        <div
          style={{
            backgroundImage: "url(" + curvedBg + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Container>
            <Grid container>
              <Grid item md={3} sm={4} xs={12}>
                <div>
                  <img src={logo} alt="footer-img" />
                  <Typography
                    color="white"
                    fontSize={15}
                    gutterBottom
                    lineHeight={1.35}
                    textAlign={"left"}
                  >
                    We provide a network of services, benefits, and resources
                    for the healthcare community in Rivers State to improve the
                    effectiveness and efficiency of primary health care
                    delivery.
                  </Typography>
                  <Box
                    display={"flex"}
                    flexDirection="row"
                    justifyContent={"start"}
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
                            color: "white",
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
                            color: "white",
                          }}
                        />
                      </a>
                    </IconButton>
                    <IconButton>
                      <LinkedIn
                        sx={{
                          color: "white",
                        }}
                      />
                    </IconButton>
                  </Box>
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
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Typography
                            variant="h6"
                            gutterBottom={true}
                            color="white"
                          >
                            Free Services
                          </Typography>
                          <Link
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                            to="/services"
                          >
                            Immunization
                          </Link>
                          <Link
                            to="/services"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            Family Planning
                          </Link>
                          <Link
                            to="/services"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            Tuberculosis & Leprosy Treatment
                          </Link>
                          <Link
                            to="/services"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            HIV & AIDS Testing & Treatment
                          </Link>
                          <Link
                            to="/services"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            Cervical Cancer Screening
                          </Link>
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

                          {/* <Link
                            to="/"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            Privacy Policy
                          </Link> *
                          <Link
                            to="/about"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            About Us
                          </Link>
                          <Link
                            to="/about/lga"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            LGPHCA's
                          </Link>
                          <Link
                            to="/about/wdc"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            WDC
                          </Link>
                          <div
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            <a
                              href="http://rsphcmb.xyz/blog"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                textDecoration: "none",
                                textTransform: "capitalize",
                                color: "white",
                              }}
                            >
                              Blog
                            </a>
                          </div>
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
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Typography
                            variant="h6"
                            gutterBottom={true}
                            color="white"
                          >
                            Resources
                          </Typography>
                          <Link
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                            to="/faqs"
                          >
                            FAQ’s
                          </Link>
                          <Link
                            to="/resources/gallery"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            Gallery
                          </Link>
                          <Link
                            to="/"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            Publications
                          </Link>
                          <Link
                            to="/resources/research"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            Research
                          </Link>
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
                          <Link
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                            to="/contact"
                          >
                            Contact Us
                          </Link>
                          <Link
                            to="/"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            Sitemap
                          </Link>
                          <Link
                            to="/"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            Chat Us
                          </Link>
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
                          <Link
                            color=""
                            to="/"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            Control Diseases
                          </Link>
                          <Link
                            to="/"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            Health Access
                          </Link>
                          <Link
                            to="/"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            Quality Health
                          </Link>
                          <Link
                            to="/"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            Health Workforce
                          </Link>
                          <Link
                            to="/"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            Community Engagement
                          </Link>
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

                          {/* <Link
                            to="/"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            Privacy Policy
                          </Link> */}
                          <Link
                            to="/about"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            About Us
                          </Link>
                          <Link
                            to="/about/lga"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            Health Authority
                          </Link>
                          <Link
                            to="/about/wdc"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            Ward Committees
                          </Link>
                          <div
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                            }}
                          >
                            <a
                              href="http://rsphcmb.xyz/blog"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                textDecoration: "none",
                                textTransform: "capitalize",
                                color: "white",
                              }}
                            >
                              Blog
                            </a>
                          </div>
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
                      <Grid sm={6} xs={6}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "start",
                            alignItems: "start",
                          }}
                        >
                          <Typography
                            variant="h6"
                            gutterBottom={true}
                            color="white"
                          >
                            Resources
                          </Typography>
                          <Link
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                            to="/faqs"
                          >
                            FAQ’s
                          </Link>
                          <Link
                            to="/resources/gallery"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            Gallery
                          </Link>
                          <Link
                            to="/"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            Publications
                          </Link>
                          <Link
                            to="/resources/research"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            Research
                          </Link>
                        </div>
                      </Grid>

                      <Grid item sm={6} xs={6}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "end",
                            alignItems: "end",
                          }}
                        >
                          <Typography
                            variant="h6"
                            gutterBottom={true}
                            color="white"
                          >
                            Support
                          </Typography>
                          <Link
                            color=""
                            to="/contact"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            Contact Us
                          </Link>
                          <Link
                            to="/"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            Sitemap
                          </Link>
                          <Link
                            to="/"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            Chat Us
                          </Link>
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
                            Free Service
                          </Typography>
                          <Link
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                            to="/services"
                          >
                            Immunization
                          </Link>
                          <Link
                            to="/services"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            Family Planning
                          </Link>
                          <Link
                            to="/services"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            Tuberculosis & Leprosy Treatment
                          </Link>
                          <Link
                            to="/services"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            HIV & AIDS Testing & Treatment
                          </Link>
                          <Link
                            to="/services"
                            style={{
                              color: "white",
                              fontSize: 15,
                              textDecoration: "none",
                              marginTop: 2,
                              marginBottom: 2,
                            }}
                          >
                            Cervical Cancer Screening
                          </Link>
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

                          {/* <Box paddingY={1}>
                            <Link
                              to="/"
                              style={{
                                color: "white",
                                fontSize: 15,
                                textDecoration: "none",
                              }}
                            >
                              Privacy Policy
                            </Link>
                          </Box> */}
                          <Box paddingY={1}>
                            <Link
                              to="/about"
                              style={{
                                color: "white",
                                fontSize: 15,
                                textDecoration: "none",
                                marginTop: 2,
                                marginBottom: 2,
                              }}
                            >
                              About Us
                            </Link>
                          </Box>
                          <Box paddingY={1}>
                            <Link
                              to="/about/lga"
                              style={{
                                color: "white",
                                fontSize: 15,
                                textDecoration: "none",
                              }}
                            >
                              Health Authority
                            </Link>
                          </Box>
                          <Box paddingY={1}>
                            <Link
                              to="/about/wdc"
                              style={{
                                color: "white",
                                fontSize: 15,
                                textDecoration: "none",
                              }}
                            >
                              Ward Committees
                            </Link>
                          </Box>
                          <Box paddingY={1}>
                            <div
                              style={{
                                color: "white",
                                fontSize: 15,
                                textDecoration: "none",
                              }}
                            >
                              <a
                                href="http://rsphcmb.xyz/blog"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  textDecoration: "none",
                                  textTransform: "capitalize",
                                  color: "white",
                                }}
                              >
                                Blog
                              </a>
                            </div>
                          </Box>
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
                          <Box paddingY={1}>
                            <Link
                              to="/faqs"
                              style={{
                                color: "white",
                                fontSize: 15,
                                textDecoration: "none",
                              }}
                            >
                              FAQ’s
                            </Link>
                          </Box>
                          <Box paddingY={1}>
                            <Link
                              to="/resources/gallery"
                              style={{
                                color: "white",
                                fontSize: 15,
                                textDecoration: "none",
                              }}
                            >
                              Gallery
                            </Link>
                          </Box>
                          <Box paddingY={1}>
                            <Link
                              to="/"
                              style={{
                                color: "white",
                                fontSize: 15,
                                textDecoration: "none",
                              }}
                            >
                              Publications
                            </Link>
                          </Box>

                          <Box paddingY={1}>
                            <Link
                              to="/resources/research"
                              style={{
                                color: "white",
                                fontSize: 15,
                                textDecoration: "none",
                              }}
                            >
                              Research
                            </Link>
                          </Box>
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
                          <Box paddingY={1}>
                            <Link
                              color=""
                              to="/contact"
                              style={{
                                color: "white",
                                fontSize: 15,
                                textDecoration: "none",
                              }}
                            >
                              Contact Us
                            </Link>
                          </Box>
                          <Box paddingY={1}>
                            <Link
                              to="/"
                              style={{
                                color: "white",
                                fontSize: 15,
                                textDecoration: "none",
                              }}
                            >
                              Sitemap
                            </Link>
                          </Box>
                          <Box paddingY={1}>
                            <Link
                              to="/"
                              style={{
                                color: "white",
                                fontSize: 15,
                                textDecoration: "none",
                              }}
                            >
                              Chat Us
                            </Link>
                          </Box>
                        </div>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Grid>
            </Grid>
          </Container>
        </div>
        <br />
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
