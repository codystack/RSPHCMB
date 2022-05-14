import { Container } from "@mui/material";
import React from "react";
import dots from "../../../assets/images/lga_dots.svg";
import Header from "./components/header";

import { withRouter } from "react-router-dom";
import SubAlbum from "./components/sub_album";

const GalleryItem = (props) => {
  let { location } = props;

  return (
    <div>
      <Header image={location.state?.image} title={location.state?.title} />
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
      <SubAlbum list={location.state?.items} />
    </div>
  );
};

export default withRouter(GalleryItem);
