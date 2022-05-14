import { Box, Container, Typography } from "@mui/material";
import React from "react";
// import image from "../../../../assets/images/ph_stub_building.jpeg";
import "../lga.css";

const AboutLGA = (props) => {
  let { item } = props;

  return (
    <Box paddingY={6}>
      <Container sx={{ paddingTop: 8 }}>
        <div>
          <div>
            <img
              src={item?.image}
              width="36%"
              alt=""
              style={{ float: "left", margin: 10 }}
            />
          </div>
          {/* <p> */}
          <Typography
            variant="h6"
            textAlign={"left"}
            padding={2}
            gutterBottom={true}
          >
            {"Background Information"}
          </Typography>
          <Typography lineHeight={1.5} gutterBottom>
            {item?.bg_info}
            {/* {item?.bg_info?.length > 1200 ? text.substring(0, 1199) : text} */}
          </Typography>
        </div>
      </Container>
    </Box>
  );
};

export default AboutLGA;
