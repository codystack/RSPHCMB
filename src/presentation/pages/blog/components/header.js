import React from "react";
import Carousel from "react-multi-carousel";
import { Button, Typography, Grid } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { withRouter, useHistory } from "react-router-dom";
import banner1 from "../../../../assets/images/banner1.png";
import banner2 from "../../../../assets/images/banner2.png";
import { Box } from "@mui/system";

var responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const itemList = [
  { name: "Hello", image: banner1 },
  { name: "Hello", image: banner2 },
];

function Header(props) {
  return (
    <div style={{ backgroundColor: "red" }}>
      <Carousel
        arrows
        showDots={false}
        autoPlay
        infinite={false}
        swipeable
        draggable
        keyBoardControl
        slidesToSlide={1}
        autoPlaySpeed={10000}
        focusOnSelect={false}
        minimumTouchDrag={80}
        responsive={responsive}
        additionalTransfrom={0}
        renderDotsOutside={false}
        renderButtonGroupOutside={false}
      >
        {(itemList ?? [])?.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  //   const dispatch = useDispatch();
  const history = useHistory();

  var headingSize, descSize, deviceType;
  const theme = useTheme();
  const xsmallScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const smallScreen = useMediaQuery(theme.breakpoints.only("sm"));
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  if (xsmallScreen) {
    headingSize = "h5";
    descSize = 15;
    deviceType = "small";
  } else if (smallScreen) {
    headingSize = "h4";
    descSize = 17;
    deviceType = "small";
  } else if (mediumScreen) {
    deviceType = "large";
    headingSize = "h3";
    descSize = 19;
  }

  return (
    <div
      style={
        deviceType === "small"
          ? {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: "url(" + props.item.image + ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
            }
          : {
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              alignItems: "end",
              backgroundImage: "url(" + props.item.image + ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
            }
      }
    >
      <Box bgcolor={"#E8F1FF"} padding={4}></Box>
    </div>
  );
}

export default withRouter(Header);
