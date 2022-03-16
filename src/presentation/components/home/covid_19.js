import React from "react";
import imageSigma from "../../../assets/images/coro_sketch.svg";
import image1 from "../../../assets/images/covid19_blue.svg";
import image2 from "../../../assets/images/covid19_green.svg";
import image3 from "../../../assets/images/covid19_red.svg";
import imageArc from "../../../assets/images/decorator_home.svg";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Covid19Section = () => {
  const covidData = [
    { title: "Confirmed Cases", cases: "16,592" },
    { title: "Discharged Cases", cases: "16,394" },
    { title: "Deaths", cases: "154" },
  ];

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
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
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: 30,
          zIndex: 100,
        }}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          <img src={imageArc} alt="" width={"7%"} style={{ marginLeft: -1 }} />
          <Container
            sx={{
              marginTop: -21,
              marginBottom: 100,
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={"center"}
            >
              <Typography
                fontSize={56}
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
                  width: "60%",
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
              paddingBottom={12}
              marginY={15}
            >
              {covidData?.map((elem, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <CasesItem
                    title={elem.title}
                    cases={elem.cases}
                    bgColor={
                      elem.title === "Confirmed Cases"
                        ? "#0592C2"
                        : elem.title === "Discharged Cases"
                        ? "#128750"
                        : "#FF0000"
                    }
                    icon={
                      elem.title === "Confirmed Cases"
                        ? image1
                        : elem.title === "Discharged Cases"
                        ? image2
                        : image3
                    }
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
