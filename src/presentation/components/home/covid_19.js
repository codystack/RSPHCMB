import React from "react";
import imageSigma from "../../../assets/images/coro_sketch.svg";
import image1 from "../../../assets/images/covid19_blue.svg";
import image2 from "../../../assets/images/covid19_green.svg";
import image3 from "../../../assets/images/covid19_red.svg";
import imageArc from "../../../assets/images/decorator_home.svg";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => {
  axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=utf-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  return axios.get(url).then((r) => r.data);
};

const Covid19Section = () => {
  const [riversData, setRiversData] = React.useState(null);

  const configSWR = {
    revalidateOnFocus: false,
    refreshInterval: 1000 * 60 * 30,
  };

  const { data } = useSWR(
    "https://covidnigeria.herokuapp.com/api",
    fetcher,
    configSWR
  );

  React.useEffect(() => {
    // console.log("STATES::: ", data?.data?.states);
    if (data) {
      let rivers = data?.data?.states?.filter(
        (elem) => elem.state === "Rivers"
      );
      // console.log("RIVW::", rivers);
      setRiversData(rivers[0]);
    }
  }, [data]);

  let deviceType;
  const theme = useTheme();
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
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        hidden={
          deviceType === "phone" || deviceType === "tablet" ? true : false
        }
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
        }}
      >
        <img src={imageSigma} alt="" width="20%" style={{ marginTop: -24 }} />
      </div>
      <div
        style={{
          position:
            deviceType === "phone" || deviceType === "tablet"
              ? "relative"
              : "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          padding: 30,
          zIndex: 100,
        }}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          <img src={imageArc} alt="" width={"7%"} style={{ marginLeft: -30 }} />
          <Container
            sx={{
              marginTop:
                deviceType === "phone" || deviceType === "tablet" ? -16 : -21,
              marginBottom:
                deviceType === "phone" || deviceType === "tablet" ? 0 : 100,
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={"center"}
            >
              <Typography
                fontSize={
                  deviceType === "phone"
                    ? 26
                    : deviceType === "tablet"
                    ? 36
                    : 48
                }
                fontWeight="700"
                textAlign="center"
                gutterBottom
              >
                Covid-19 Updates
              </Typography>
              <Typography
                fontSize={16}
                fontWeight="400"
                textAlign="center"
                gutterBottom
                style={{
                  width:
                    deviceType === "phone"
                      ? "100%"
                      : deviceType === "tablet"
                      ? "86"
                      : "60%",
                }}
              >
                Since the outbreak of the deadly virus COVID-19, the Rivers
                State Primary Health Care Management Board has taken critical
                steps to ensure that its staff and patients are safe.
              </Typography>
            </Box>
            <br />
            <br />
            <Grid
              container
              spacing={{ xs: 2, md: 4 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              paddingBottom={
                deviceType === "phone" ? 2 : deviceType === "tablet" ? 4 : 12
              }
              marginY={
                deviceType === "phone" ? 2 : deviceType === "tablet" ? 6 : 12
              }
            >
              {[1, 2, 3]?.map((elem, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <CasesItem
                    title={
                      index === 0
                        ? "Confirmed Cases"
                        : index === 1
                        ? "Discharged Cases"
                        : "Deaths"
                    }
                    cases={
                      index === 0
                        ? riversData?.confirmedCases
                        : index === 1
                        ? riversData?.discharged
                        : riversData?.death
                    }
                    bgColor={
                      index === 0
                        ? "#0592C2"
                        : index === 1
                        ? "#128750"
                        : "#FF0000"
                    }
                    icon={index === 0 ? image1 : index === 1 ? image2 : image3}
                  />
                </Grid>
              ))}
            </Grid>
            <br />
          </Container>
        </div>
      </div>
    </div>
  );
};

const CasesItem = (props) => {
  let { bgColor, title, cases, icon } = props;

  return (
    <div>
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 64,
          padding: 10,
          zIndex: 10000,
          marginBottom: -48,
          marginLeft: -24,
        }}
      >
        <img src={icon} alt="" style={{ margin: "auto" }} />
      </div>

      <Box
        padding={1}
        bgcolor={bgColor}
        display="flex"
        height={100}
        borderRadius={2}
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          fontWeight="500"
          fontSize={16}
          gutterBottom={true}
          textAlign="center"
          color="white"
        >
          {title}
        </Typography>
        <Typography
          fontWeight="900"
          textAlign="center"
          fontSize={32}
          gutterBottom={true}
          color="white"
        >
          {cases}
        </Typography>
      </Box>
    </div>
  );
};

export default Covid19Section;
