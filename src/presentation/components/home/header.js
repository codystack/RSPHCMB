import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTheme } from "@mui/material/styles";
// import { useHistory } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";

import image1 from "../../../assets/images/nphcda_logo.svg";
import image2 from "../../../assets/images/unicef_logo.svg";
import image3 from "../../../assets/images/clinton_health_logo.svg";
import image4 from "../../../assets/images/inst_human_viralogy_logo.svg";
import image5 from "../../../assets/images/tci_logo.svg";
import image6 from "../../../assets/images/who_logo.png";

import MyCarousel from "../carousel";

const partners = [
  { logo: image1 },
  { logo: image2 },
  { logo: image3 },
  { logo: image4 },
  { logo: image5 },
  { logo: image6 },
];

const Header = () => {
  const [setActiveIndex] = React.useState(0);
  const { homeBannerData } = useSelector((state) => state.home);

  let height, deviceType;
  const theme = useTheme();
  // const history = useHistory();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    height = 400;
    deviceType = "xs";
  } else if (sm) {
    height = 500;
    deviceType = "sm";
  } else {
    height = "97vh";
  }

  return (
    <div
      style={{
        position: "relative",
        height: height,
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
          height: height,
        }}
      >
        <Grid
          item
          display={deviceType === "xs" ? "none" : "flex"}
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
              hidden={deviceType === "xs" ? true : false}
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
          item
          xs={12}
          sm={6}
          md={5}
          sx={{
            backgroundColor: "#00B0EF",
            paddingBottom: 1,
            marginBottom: -0.5,
          }}
        >
          <Box
            bgColor="red"
            // paddingY={2}
            display={deviceType === "xs" ? "none" : "flex"}
            flexDirection={"column"}
            justifyContent="end"
            alignItems={"center"}
            height="100%"
          >
            {/* <Box
              sx={{ marginTop: -72 }}
              marginRight={18}
              display="flex"
              flexDirection="row"
              justifyContent="end"
              alignItems="end"
              width="100%"
            >
              <label htmlFor="next-btn">
                <ArrowBackIos
                  sx={{
                    color:
                      activeIndex === homeBannerData?.length - 1
                        ? "gray"
                        : "white",
                  }}
                />
              </label>

              <label htmlFor="prev-btn">
                <ArrowForwardIos
                  sx={{
                    color: activeIndex === 0 ? "gray" : "white",
                  }}
                />
              </label>
            </Box> */}
          </Box>
        </Grid>
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
        {deviceType !== "xs" ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: deviceType !== "xs" ? "end" : "space-between",
              alignItems: "center",
              position: deviceType !== "xs" ? "relative" : "none",
            }}
          >
            {/* <Typography>Lorem ipsum kjsdk</Typography> */}
            {deviceType === "xs" && (
              <Box bgcolor={"red"}>
                <MyCarousel
                  deviceType={deviceType}
                  setActiveIndex={setActiveIndex}
                  carouselItems={homeBannerData}
                  btnPrevId="prev-btn"
                  btnNextId="next-btn"
                />
              </Box>
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                justifySelf: "end",
                alignItems: "center",
                padding: 12,
                marginRight: 10,
              }}
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
                <Instagram
                  sx={{
                    color: "white",
                  }}
                />
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
            </div>

            <Box
              padding={4}
              sx={{
                position: "absolute",
                top: 75,
                right: 50,
                bottom: 75,
                left: deviceType === "xs" ? 8 : 50,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "brown",
              }}
            >
              {/* Put carousel component right here */}
              {deviceType !== "xs" && (
                <MyCarousel
                  deviceType={deviceType}
                  setActiveIndex={setActiveIndex}
                  carouselItems={homeBannerData}
                  btnPrevId="prev-btn"
                  btnNextId="next-btn"
                />
              )}
            </Box>
          </div>
        ) : (
          <div
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <MyCarousel
              deviceType={deviceType}
              setActiveIndex={setActiveIndex}
              carouselItems={homeBannerData}
              btnPrevId="prev-btn"
              btnNextId="next-btn"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                justifySelf: "end",
                alignItems: "center",
                padding: 12,
                marginRight: 10,
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
