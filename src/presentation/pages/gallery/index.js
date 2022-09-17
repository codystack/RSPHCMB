import { Container } from "@mui/material";
import React from "react";
import image from "../../../assets/images/gallery_collage.jpeg";
import dots from "../../../assets/images/lga_dots.svg";
import Header from "./components/header";

import { withRouter } from "react-router-dom";
import Album from "./components/album";

const Gallery = (props) => {
  return (
    <div>
      <Header image={image} title={"Gallery"} />
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
      {/* <div
        style={{
          width: "100%",
          height: 56,
          backgroundImage: "url(" + linePattern + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      /> */}
      <Album />
    </div>
  );
};

export default withRouter(Gallery);
