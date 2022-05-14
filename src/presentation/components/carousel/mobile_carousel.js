import React from "react";

import Carousel from "react-material-ui-carousel";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
// import Searchbar from "../searchbar";
// import { useHistory } from "react-router-dom";

const MobileCarousel = (props) => {
  let { carouselItems } = props;

  return (
    <div style={{ height: "80%" }}>
      <Carousel
        autoPlay={true}
        animation={"fade"}
        indicators={false}
        interval={10000}
        duration={500}
        navButtonsAlwaysVisible={false}
        navButtonsAlwaysInvisible={true}
      >
        {carouselItems?.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

const Item = (props) => {
  let { item } = props;

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          backgroundImage: "url(" + item?.image + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: 10,
          height: 200,
        }}
      />

      <Typography variant="h5" gutterBottom textAlign="center">
        {item?.title}
      </Typography>
      <Typography gutterBottom textAlign="center">
        {item?.description}
      </Typography>
    </div>
  );
};

export default MobileCarousel;
