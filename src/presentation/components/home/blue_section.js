import { Box } from "@mui/material";
import React from "react";
import image from "../../../assets/images/checked_blue_line.svg";

const BlueSection = () => {
  return (
    <Box
      marginY={4}
      display="flex"
      flexDirection="row"
      width="100%"
      backgroundColor="#acdde4"
      padding={3}
      //   sx={{
      //     backgroundImage: "url(" + image + ")",
      //     backgroundRepeat: "no-repeat",
      //     backgroundSize: "cover",
      //   }}
    ></Box>
  );
};

export default BlueSection;
