import { Container, Typography } from "@mui/material";
import React from "react";
import image from "../../../assets/images/lga_demo_img.png";
import dots from "../../../assets/images/lga_dots.svg";

import Header from "./components/header";

import { withRouter } from "react-router-dom";

const Facility = (props) => {
  let { location } = props;

  return (
    <div>
      <Header image={image} title={location.state?.name} />
      <Container
        sx={{
          marginTop: -8,
        }}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "end",
        }}
      >
        <img src={dots} alt="" />
      </Container>
      <Typography>
        Lorem ipsum dui jks jhjbjs djsbdjs dkjsndkjbsdn cmsnndkcnsjkdcs dmncs
        kdjkcsndcnskdjkcsdkcjsndkcsd
      </Typography>
    </div>
  );
};

export default withRouter(Facility);
