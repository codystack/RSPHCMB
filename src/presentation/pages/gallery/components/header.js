import { Typography } from "@mui/material";
import React from "react";

const Header = (props) => {
  let { image, title } = props;
  return (
    <div
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "60vh",

        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#041E45",
          opacity: "0.75",
        }}
      />

      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",

          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",

          zIndex: 1000,
        }}
      >
        <Typography
          variant="h3"
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
