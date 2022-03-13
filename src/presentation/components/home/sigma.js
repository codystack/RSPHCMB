import { Box } from "@mui/material";
import React from "react";
import image from "../../../assets/images/zigma_wave.svg";

const Sigma = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        alignItems: "end",
      }}
      paddingY={4}
    >
      <img src={image} alt="" width="8%" />
    </Box>
  );
};

export default Sigma;
