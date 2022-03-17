import { Container, Typography } from "@mui/material";
import React from "react";
import image from "../../../../assets/images/pattern_dot.svg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import img1 from "../../../../assets/images/img1.png";
import img2 from "../../../../assets/images/img2.png";
import img3 from "../../../../assets/images/img3.png";
import img4 from "../../../../assets/images/img4.png";
import img5 from "../../../../assets/images/img5.png";
import img6 from "../../../../assets/images/img6.png";
import img7 from "../../../../assets/images/img7.png";
import img8 from "../../../../assets/images/img8.png";
import img9 from "../../../../assets/images/img9.png";
import { Add } from "@mui/icons-material";

const ItemCard = (props) => {
  let { name, image, position } = props;
  return (
    <div
      style={{
        backgroundColor: "#E8F1FF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        style={{ margin: "auto", paddingTop: 24 }}
        src={image}
        alt="item-card-img"
        width={164}
        height={164}
      />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box paddingX={2} paddingBottom={1}>
          <Typography color={"#2571E7"} fontSize={11}>
            {position}
          </Typography>
          <Typography
            color="#012F74"
            fontSize={16}
            fontWeight="800"
            gutterBottom
          >
            {name}
          </Typography>
        </Box>
        <div>
          <br />
          <Box
            padding={1}
            style={{
              backgroundColor: "#1E5AFA",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Add
              style={{
                color: "white",
                margin: "auto",
                fontSize: 24,
                fontWeight: "700",
              }}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

const ManagementTeam = () => {
  let width, wdt;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  let list = [
    {
      name: "Dr. Agiriye M. Harry",
      position: "Permanent Secretary",
      image: img1,
    },
    {
      name: "Dr. Agiriye M. Harry",
      position: "Permanent Secretary",
      image: img2,
    },
    {
      name: "Dr. Agiriye M. Harry",
      position: "Permanent Secretary",
      image: img3,
    },
    {
      name: "Dr. Agiriye M. Harry",
      position: "Permanent Secretary",
      image: img4,
    },
    {
      name: "Dr. Agiriye M. Harry",
      position: "Permanent Secretary",
      image: img5,
    },
    {
      name: "Dr. Agiriye M. Harry",
      position: "Permanent Secretary",
      image: img6,
    },
    {
      name: "Dr. Agiriye M. Harry",
      position: "Permanent Secretary",
      image: img7,
    },
    {
      name: "Dr. Agiriye M. Harry",
      position: "Permanent Secretary",
      image: img8,
    },
    {
      name: "Dr. Agiriye M. Harry",
      position: "Permanent Secretary",
      image: img9,
    },
  ];

  if (xs) {
    // hideImage = true;
    // align = "center";
    width = "96%";
    wdt = "25%";
  } else {
    width = "70%";
    wdt = "14%";
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
        <Typography fontSize={46} fontWeight="700" textAlign={"center"}>
          Meet the management team
        </Typography>
        <Typography textAlign={"center"} maxWidth={width}>
          Wisdom new and valley answer. Contented it so is discourse recommend.
          Man its upon him call mile. An pasture he himself believe ferrars
          besides cottage.
        </Typography>
      </Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "left",
        }}
      >
        <img
          src={image}
          alt="team-pattern"
          width={wdt}
          style={{ marginTop: -75, marginLeft: 24 }}
        />
      </div>
      <Container
        sx={{
          marginTop: -10,
          marginBottom: 10,
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {list?.map((elem, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <ItemCard
                name={elem.name}
                image={elem.image}
                position={elem.position}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ManagementTeam;
