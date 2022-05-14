import { Typography } from "@mui/material";
import React from "react";

const Header = (props) => {
  let { image, title, deviceType } = props;
  return (
    <div
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: deviceType === "pc" ? "60vh" : "98vh",
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
          variant={deviceType === "pc" ? "h3" : "h5"}
          fontWeight={"700"}
          color={"white"}
          textAlign="center"
        >
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default Header;
