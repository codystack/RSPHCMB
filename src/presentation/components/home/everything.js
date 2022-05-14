import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import image1 from "../../../assets/images/vaccine1.png";
import image2 from "../../../assets/images/vaccine2.png";
import image3 from "../../../assets/images/vaccine3.png";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useHistory } from "react-router-dom";

const EverythingYouNeed = () => {
  let deviceType;
  const theme = useTheme();
  const history = useHistory();
  // const [element, controls] = useScroll();

  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    deviceType = "phone";
  } else if (sm) {
    deviceType = "tablet";
  } else {
    deviceType = "big";
  }

  return (
    <div>
      <Container sx={{ paddingY: 8 }}>
        <Typography
          color="#00B0EF"
          fontSize={
            deviceType === "phone" ? 24 : deviceType === "tablet" ? 30 : 36
          }
          fontWeight="700"
          lineHeight={1.35}
          width={
            deviceType === "phone"
              ? "98%"
              : deviceType === "tablet"
              ? "86%"
              : "60%"
          }
          textAlign={
            deviceType === "phone"
              ? "center"
              : deviceType === "tablet"
              ? "center"
              : "start"
          }
        >
          Everything you need to know about COVID-19 Vaccination Across the
          state
        </Typography>
        <Box
          paddingY={
            deviceType === "phone" ? 1 : deviceType === "tablet" ? 3 : 4
          }
        >
          <Grid
            container
            display={"flex"}
            justifyContent="stretch"
            alignItems={"stretch"}
            spacing={2}
          >
            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                flexDirection={"column"}
                justifyContent="space-between"
                alignItems={"stretch"}
                height="100%"
              >
                <Typography
                  fontSize={
                    deviceType === "phone"
                      ? 18
                      : deviceType === "tablet"
                      ? 20
                      : 21
                  }
                  marginTop={1}
                  fontWeight="700"
                  color="black"
                  textAlign={
                    deviceType === "phone"
                      ? "center"
                      : deviceType === "tablet"
                      ? "center"
                      : "start"
                  }
                >
                  Do you have questions or concerns about the COVID-19 vaccine?
                </Typography>

                <Typography
                  textAlign={
                    deviceType === "phone"
                      ? "center"
                      : deviceType === "tablet"
                      ? "center"
                      : "start"
                  }
                  fontSize={
                    deviceType === "phone"
                      ? 18
                      : deviceType === "tablet"
                      ? 20
                      : 21
                  }
                  fontWeight="400"
                >
                  Please Contact NPHCDA's COVID-19 call center on 09023929940
                </Typography>

                <Typography
                  textAlign={
                    deviceType === "phone"
                      ? "center"
                      : deviceType === "tablet"
                      ? "center"
                      : "start"
                  }
                  fontWeight="700"
                  color="black"
                  fontSize={
                    deviceType === "phone"
                      ? 18
                      : deviceType === "tablet"
                      ? 20
                      : 21
                  }
                  gutterBottom
                >
                  Say #YesToCOVID19Vaccine
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                flexDirection={"column"}
                justifyContent="space-between"
                paddingX={2}
                paddingY={
                  deviceType === "phone" ? 2 : deviceType === "tablet" ? 4 : 6
                }
                marginX={2}
                minHeight={200}
                height={225}
                sx={{
                  backgroundImage: "url(" + image2 + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: 2,
                }}
              >
                <div
                  style={{
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    fontSize={16}
                    fontWeight="700"
                    color="white"
                    textAlign={"center"}
                  >
                    Vaccination Sites
                  </Typography>
                  <br />
                  <br />
                  <Typography
                    color="white"
                    fontSize={12}
                    textAlign="center"
                    fontWeight="400"
                  >
                    Updated list of approved Covid-19 vaccination sites across
                    the state.
                  </Typography>
                  <br />
                  <br />
                  <div
                    style={{ margin: "auto" }}
                    // variants={imageAnimation}
                    // animate={controls}
                    // transition={{ type: "tween" }}
                  >
                    <Button
                      // variants={variantButton}
                      // whileHover="hover"
                      sx={{
                        backgroundColor: "#00B0EF",
                        color: "white",
                        paddingX: 2,
                        textTransform: "capitalize",
                        fontSize: 12,
                        fontWeight: "400",
                        borderRadius: 0,
                      }}
                      variant="contained"
                      onClick={() => history.push("/covid19-vaccination-sites")}
                    >
                      View Sites
                    </Button>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                flexDirection={"column"}
                justifyContent="space-between"
                paddingX={2}
                paddingY={
                  deviceType === "phone" ? 2 : deviceType === "tablet" ? 4 : 6
                }
                marginX={2}
                minHeight={200}
                height={225}
                sx={{
                  backgroundImage: "url(" + image1 + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: 2,
                }}
              >
                <div
                  style={{
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    fontSize={16}
                    fontWeight="700"
                    color="white"
                    textAlign={"center"}
                  >
                    Test Your Covid Knowledge
                  </Typography>
                  <br />
                  <br />
                  <Typography
                    color="white"
                    fontSize={12}
                    textAlign="center"
                    fontWeight="400"
                  >
                    Take the Covid-19 Knowledge Assessment Test
                  </Typography>
                  <br />
                  <br />
                  <div style={{ margin: "auto" }}>
                    <Button
                      sx={{
                        backgroundColor: "#00B0EF",
                        color: "white",
                        paddingX: 2,
                        textTransform: "capitalize",
                        fontSize: 12,
                        fontWeight: "400",
                        borderRadius: 0,
                      }}
                      variant="contained"
                    >
                      <a
                        href="https://rsphims.org.ng/tools/covid-raf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          color: "white",
                        }}
                      >
                        Take Test
                      </a>
                    </Button>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                flexDirection={"column"}
                justifyContent="space-between"
                paddingX={2}
                paddingY={
                  deviceType === "phone" ? 2 : deviceType === "tablet" ? 4 : 6
                }
                marginX={2}
                minHeight={200}
                height={225}
                sx={{
                  backgroundImage: "url(" + image3 + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: 2,
                }}
              >
                <div
                  style={{
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    fontSize={16}
                    fontWeight="700"
                    color="white"
                    textAlign={"center"}
                  >
                    Check Your Covid Status
                  </Typography>
                  <br />
                  <br />
                  <Typography
                    color="white"
                    fontSize={12}
                    textAlign="center"
                    fontWeight="400"
                  >
                    Take Covid-19 Self Assessment Response Test
                  </Typography>
                  <br />
                  <br />
                  <div style={{ margin: "auto" }}>
                    <Button
                      sx={{
                        backgroundColor: "#00B0EF",
                        color: "white",
                        paddingX: 2,
                        textTransform: "capitalize",
                        fontSize: 12,
                        fontWeight: "400",
                        borderRadius: 0,
                      }}
                      variant="contained"
                    >
                      <a
                        href="https://rsphims.org.ng/tools/csar"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          color: "white",
                        }}
                      >
                        Check Status
                      </a>
                    </Button>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default EverythingYouNeed;
