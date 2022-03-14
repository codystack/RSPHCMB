import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MainNavbar from "./main_navbar";

const MyNavbar = () => {
  let deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  // const sm = useMediaQuery(theme.breakpoints.up("md"));

  // if (xs) return <div></div>;

  return <MainNavbar />;
};

export default MyNavbar;
