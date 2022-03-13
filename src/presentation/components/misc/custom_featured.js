import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

const CustomFeaturedImage = (props) => {
  let { image, bg, deviceType } = props;
  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={image}
        alt=""
        width={deviceType === "phone" ? "68%" : "52%"}
        style={{ zIndex: 100 }}
      />
      <img
        src={bg}
        alt=""
        width={deviceType === "phone" ? "90%" : "68%"}
        style={{
          marginTop:
            deviceType === "phone"
              ? -116
              : deviceType === "tablet"
              ? -100
              : -164,
        }}
      />
    </Box>
  );
};

export default CustomFeaturedImage;
