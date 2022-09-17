import { Container, Grid } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import whoLogo from "../../../../assets/images/who_logo.png";
import unicefLogo from "../../../../assets/images/unicef_logo.svg";
import tciLogo from "../../../../assets/images/tci_logo.svg";
import nphcdaLogo from "../../../../assets/images/nphcda_logo.svg";
import clintonHealthLogo from "../../../../assets/images/clinton_health_logo.svg";
import viralogyLogo from "../../../../assets/images/inst_human_viralogy_logo.svg";
// import { useSelector } from "react-redux";

const Partners = () => {
  let unicef = React.useRef({});
  // let who = React.useRef({});
  let chai = React.useRef({});
  let nphcda = React.useRef({});
  let tci = React.useRef({});
  let ihv = React.useRef({});

  let deviceType;
  const theme = useTheme();
  const history = useHistory();

  const xs = useMediaQuery(theme.breakpoints.down("sm"));

  if (xs) {
    deviceType = "small";
  } else {
    deviceType = "big";
  }

  // React.useEffect(() => {
  //   if (partnersData) {
  //     (partnersData || [])?.forEach((elem) => {
  //       if (elem?.name === "unicef") {
  //         unicef.current = elem;
  //       } else if (elem?.name === "who") {
  //         who.current = elem;
  //       } else if (elem?.name === "chai") {
  //         chai.current = elem;
  //       }
  //     });
  //   }
  // }, [partnersData]);

  return (
    <div
      style={{
        backgroundColor: "#E8F1FF",
      }}
    >
      <Container
        sx={{
          padding: 4,
        }}
      >
        <div>
          <Grid container padding={deviceType === "small" ? 4 : 12}>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              sx={{
                borderRightColor: "black",
                borderRightWidth: 1,
                borderRightStyle: "solid",
                borderBottomColor: "black",
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
              }}
            >
              <Box
                padding={4}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  // onClick={() =>
                  //   history.push({
                  //     pathname: "/partners/world-health-organization",
                  //     state: {
                  //       name: "World Health Organization",
                  //       data: who.current,
                  //     },
                  //   })
                  // }
                >
                  <img src={whoLogo} alt="" width="100%" />
                </div>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              sx={
                deviceType !== "small"
                  ? {
                      borderRightColor: "black",
                      borderRightWidth: 1,
                      borderRightStyle: "solid",
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      borderBottomStyle: "solid",
                    }
                  : {
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      borderBottomStyle: "solid",
                    }
              }
            >
              <Box
                padding={4}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    history.push({
                      pathname: "/partners/unicef",
                      state: {
                        name: "UNICEF",
                        data: unicef.current,
                      },
                    })
                  }
                >
                  <img src={unicefLogo} alt="" width="100%" />
                </div>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              sx={
                deviceType !== "small"
                  ? {
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      borderBottomStyle: "solid",
                    }
                  : {
                      borderRightColor: "black",
                      borderRightWidth: 1,
                      borderRightStyle: "solid",
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      borderBottomStyle: "solid",
                    }
              }
            >
              <Box
                padding={4}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    history.push({
                      pathname:
                        "/partners/nigeria-primary-health-care-development-agency",
                      state: {
                        name: "Nigeria Primary Health Care Development Agency",
                        data: nphcda.current,
                      },
                    })
                  }
                >
                  <img src={nphcdaLogo} alt="" width="100%" />
                </div>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              sx={
                deviceType === "small"
                  ? {
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      borderBottomStyle: "solid",
                    }
                  : {
                      borderRightColor: "black",
                      borderRightWidth: 1,
                      borderRightStyle: "solid",
                    }
              }
            >
              <Box
                padding={4}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    history.push({
                      pathname: "/partners/clinton-health-access-initiative",
                      state: {
                        name: "Clinton Health Access Initiative",
                        data: chai.current,
                      },
                    })
                  }
                >
                  <img src={clintonHealthLogo} alt="" width="80%" />
                </div>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              sx={{
                borderRightColor: "black",
                borderRightWidth: 1,
                borderRightStyle: "solid",
              }}
            >
              <Box
                padding={4}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    history.push({
                      pathname: "/partners/institue-of-human-virology",
                      state: {
                        name: "Institute Of Human Virology",
                        data: ihv.current,
                      },
                    })
                  }
                >
                  <img src={viralogyLogo} alt="" width="100%" />
                </div>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Box
                padding={4}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    history.push({
                      pathname: "/partners/the-challenge-initiative",
                      state: {
                        name: "The Challenge Initiative",
                        data: tci.current,
                      },
                    })
                  }
                >
                  <img src={tciLogo} alt="" width="80%" />
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Partners;
