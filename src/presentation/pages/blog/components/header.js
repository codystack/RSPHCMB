import React from "react";
import { Typography, Container } from "@mui/material";

// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";

import { withRouter } from "react-router-dom";
// import banner1 from "../../../../assets/images/banner1.png";
// import banner2 from "../../../../assets/images/banner2.png";
import { Box } from "@mui/system";
import image from "../../../../assets/images/blog_image.png";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// var responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 1,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 1,
//   },
//   mobile: {
//     breakpoint: { max: 768, min: 0 },
//     items: 1,
//   },
// };

// const itemList = [
//   { name: "Hello", image: banner1 },
//   { name: "Hello", image: banner2 },
// ];

function Header(props) {
  return (
    <div>
      <Container
        sx={{
          paddingY: 12,
        }}
      >
        <div
          style={{
            backgroundImage: "url(" + image + ")",
            height: 420,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              padding: 14,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              width: "33%",
            }}
          >
            <Typography
              fontSize={11}
              fontWeight="300"
              fontFamily="Inter"
              gutterBottom
            >
              10 DECEMBER 2021 - COVID-19 UPDATE
            </Typography>
            <Typography
              fontSize={18}
              fontWeight="600"
              fontFamily="Inter"
              gutterBottom
            >
              Etiam eu odio in sapien posuere dole vitae bibendum vitae lorem.
            </Typography>
            <Typography
              fontSize={11}
              fontWeight="400"
              fontFamily="Inter"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
              vulputate fringilla purus morbi. Curabitur enim amet adipiscing
              ornare volutpat lacus, vulputate. Sollicitudin ultrices sit
              sapien, amet quisque tortor sit auctor. Libero arcu tempor
              suspendisse sit. Ultrices enim velit non ipsum. Volutpat etiam
              placerat adipiscing dui sit.
            </Typography>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Box marginX={2} padding={1} bgcolor="#00B0EF">
              <ArrowBackIos
                sx={{
                  color: "white",
                }}
                fontSize="small"
              />
            </Box>
            <Box padding={1} bgcolor="#00B0EF">
              <ArrowForwardIos
                sx={{
                  color: "white",
                }}
                fontSize="small"
              />
            </Box>
          </div>
        </div>
      </Container>
      {/* <Carousel
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
      </Carousel> */}
    </div>
  );
}

// function Item(props) {
//   //   const dispatch = useDispatch();
//   const history = useHistory();

//   var headingSize, descSize, deviceType;
//   const theme = useTheme();
//   const xsmallScreen = useMediaQuery(theme.breakpoints.only("xs"));
//   const smallScreen = useMediaQuery(theme.breakpoints.only("sm"));
//   const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));

//   if (xsmallScreen) {
//     headingSize = "h5";
//     descSize = 15;
//     deviceType = "small";
//   } else if (smallScreen) {
//     headingSize = "h4";
//     descSize = 17;
//     deviceType = "small";
//   } else if (mediumScreen) {
//     deviceType = "large";
//     headingSize = "h3";
//     descSize = 19;
//   }

//   return (
//     <div
//       style={
//         deviceType === "small"
//           ? {
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               backgroundImage: "url(" + props.item.image + ")",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               width: "100%",
//             }
//           : {
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "left",
//               alignItems: "end",
//               backgroundImage: "url(" + props.item.image + ")",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover",
//               width: "100%",
//             }
//       }
//     >
//       <Box bgcolor={"#E8F1FF"} padding={4}></Box>
//     </div>
//   );
// }

export default withRouter(Header);
