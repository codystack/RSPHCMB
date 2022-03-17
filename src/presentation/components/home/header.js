import {
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Twitter,
} from "@mui/icons-material";
import {
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import image1 from "../../../assets/images/nphcda_logo.svg";
import image2 from "../../../assets/images/unicef_logo.svg";
import image3 from "../../../assets/images/clinton_health_logo.svg";
import image4 from "../../../assets/images/inst_human_viralogy_logo.svg";
import image5 from "../../../assets/images/tci_logo.svg";
import image6 from "../../../assets/images/who_logo.svg";

import headerImage from "../../../assets/images/home_header_img.png";

const partners = [
  { logo: image1 },
  { logo: image2 },
  { logo: image3 },
  { logo: image4 },
  { logo: image5 },
  { logo: image6 },
];

const Header = () => {
  return (
    <div
      style={{
        position: "relative",
        height: 625,
      }}
    >
      <Grid
        container
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          height: 625,
        }}
      >
        <Grid
          xs={12}
          sm={6}
          md={7}
          sx={{
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "stretch",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent={"start"}
              alignItems="start"
              sx={{ paddingX: 10 }}
            >
              <Typography
                fontSize={18}
                fontFamily="Manrope"
                fontWeight="400"
                color="#31353B"
              >
                Our Global Partners
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent={"space-between"}
                alignItems="center"
              >
                {partners?.map((elem, index) => (
                  <img src={elem.logo} alt="" width="10%" />
                ))}
              </Box>
            </Box>
          </div>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={5}
          sx={{
            backgroundColor: "#00B0EF",
          }}
        ></Grid>
      </Grid>

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifySelf: "end",
              alignItems: "center",
              padding: 10,
            }}
          >
            <IconButton>
              <Facebook
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
            <IconButton>
              <Instagram
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
            <IconButton>
              <Twitter
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
            <IconButton>
              <LinkedIn
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
          </div>
          <Box
            padding={4}
            sx={{
              position: "absolute",
              top: 75,
              right: 50,
              bottom: 75,
              left: 50,
              // backgroundColor: "greenyellow",
            }}
          >
            <Grid container>
              <Grid
                item
                sm={6}
                md={6}
                display="flex"
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems="start"
              >
                <Typography
                  fontSize={20}
                  fontWeight="700"
                  color="#00B0EF"
                  gutterBottom={true}
                >
                  OUR MANDATE
                </Typography>
                <Typography variant="h3" fontWeight="700" gutterBottom>
                  COVID-19 Vaccination Information
                </Typography>
                <Typography fontSize={16} fontWeight="400" gutterBottom>
                  Promoting wide-spread access to quality healthcare for all
                  Nigerians and improving the effectiveness of primary
                  healthcare.
                </Typography>
                <br />
                <Card elevation={0} sx={{ width: "123%" }}>
                  <Box
                    borderColor={"grey"}
                    display="flex"
                    flexDirection={"row"}
                    justifyContent="start"
                    alignItems={"stretch"}
                  >
                    <TextField
                      // variant="filled"
                      placeholder="Healthcare falicities close to me"
                      fullWidth={true}
                      sx={{
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOn />
                          </InputAdornment>
                        ),
                        // classes:{notchedOutline:classes.noBorder}
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#FF0000",
                        color: "white",
                        paddingX: 5,
                        maxLines: 1,
                        ":hover": {
                          bgcolor: "#d32f2f", // theme.palette.primary.main
                          color: "white",
                        },
                        alignSelf: "stretch",
                        textTransform: "capitalize",
                      }}
                    >
                      Search
                    </Button>
                  </Box>
                </Card>
              </Grid>
              <Grid
                item
                sm={6}
                md={6}
                display="flex"
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems="start"
              >
                <img src={headerImage} alt="" width="75%" />
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Header;
