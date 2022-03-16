import { Typography } from "@mui/material";
import React from "react";

const Header = (props) => {
  let { image } = props;
  return (
    <div
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "60vh",
      }}
    >
      <div /> {/* Overlay here... */}
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={"700"}
          color={"white"}
          textAlign="center"
        >
          Obio Akpor LGA
        </Typography>
      </div>
    </div>
  );
};

export default Header;
