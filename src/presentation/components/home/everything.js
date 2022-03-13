import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import image1 from "../../../assets/images/vaccine1.png";
import image2 from "../../../assets/images/vaccine2.png";
import image3 from "../../../assets/images/vaccine3.png";

const EverythingYouNeed = () => {
  return (
    <div>
      <Container>
        <Typography
          color="#00B0EF"
          fontSize={36}
          fontWeight="700"
          width={"60%"}
        >
          Everything you need to know about COVID-19 Vaccination Across the
          state
        </Typography>
        <Box paddingY={4}>
          <Grid container>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                flexDirection={"column"}
                justifyContent="stretch"
                alignItems={"stretch"}
              >
                <Typography
                  fontSize={21}
                  fontWeight="700"
                  color="black"
                  textAlign={"justify"}
                >
                  Do you have questions or concerns about the COVID-19 vaccine?
                </Typography>
                <br />
                <br />
                <Typography textAlign="justify" fontSize={18} fontWeight="400">
                  Please Contact NPHCDA's COVID-19 call center on 09023929940
                </Typography>
                <br />
                <br />
                <Typography
                  fontSize={21}
                  fontWeight="700"
                  color="black"
                  textAlign={"justify"}
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
                paddingY={6}
                marginX={2}
                sx={{
                  backgroundImage: "url(" + image1 + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Typography
                  fontSize={16}
                  fontWeight="700"
                  color="white"
                  textAlign={"center"}
                >
                  Vaccination Registration
                </Typography>
                <br />
                <br />
                <Typography
                  color="white"
                  fontSize={12}
                  textAlign="center"
                  fontWeight="400"
                >
                  Get your COVID-19 vaccine at an approved site near you.
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
                    }}
                    variant="contained"
                  >
                    Register Here
                  </Button>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                flexDirection={"column"}
                justifyContent="space-between"
                paddingX={2}
                paddingY={6}
                marginX={2}
                sx={{
                  backgroundImage: "url(" + image2 + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
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
                  Updated list of approved COVID-19 vaccination sites across the
                  state.
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
                    }}
                    variant="contained"
                  >
                    View Sites
                  </Button>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                flexDirection={"column"}
                justifyContent="space-between"
                paddingX={2}
                paddingY={6}
                marginX={2}
                sx={{
                  backgroundImage: "url(" + image3 + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Typography
                  fontSize={16}
                  fontWeight="700"
                  color="white"
                  textAlign={"center"}
                >
                  Corporate Vaccination
                </Typography>
                <br />
                <br />
                <Typography
                  color="white"
                  fontSize={12}
                  textAlign="center"
                  fontWeight="400"
                >
                  Learn about vaccination arrangements for eligible staff,
                  retirees and dependents of select organizations.
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
                    }}
                    variant="contained"
                  >
                    Register Here
                  </Button>
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
