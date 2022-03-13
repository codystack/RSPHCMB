import React from "react";
import { makeStyles } from "@mui/styles";
import image from "../../../assets/images/header_background.png";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Header from "./components/header";
import LatestNews from "./components/latest_news";
import MorePosts from "./components/more_posts";
import NewsUpdateCategory from "./components/news_update_category";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#00B0EF",
  },
  header: {
    height: "96vh",
    backgroundImage: "url(" + image + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  rowEnd: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "end",
  },
}));

const Blog = () => {
  const classes = useStyles();

  let fontSize, mt, deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    fontSize = 32;
    mt = 150;
    deviceType = "phone";
  } else if (sm) {
    fontSize = 42;
    mt = 400;
    deviceType = "tablet";
  } else {
    mt = 165;
    fontSize = 48;
    deviceType = "pc";
  }

  return (
    <div>
      <Header />
      <LatestNews />
      <MorePosts />
      <NewsUpdateCategory />
    </div>
  );
};

export default Blog;
