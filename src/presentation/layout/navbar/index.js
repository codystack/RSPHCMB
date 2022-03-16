import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MainNavbar from "./main_navbar";
// import MobileNavbar from "./mobile_navbar";

const MyNavbar = () => {
  let deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));

  // if (xs) return <MobileNavbar />;
  // else
  return <MainNavbar />;
};

export default MyNavbar;
