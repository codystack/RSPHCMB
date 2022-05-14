import React from "react";
// import { makeStyles } from "@mui/styles";
import image from "../../../assets/images/banner1.png";

import Header from "./components/header";
import LatestNews from "./components/latest_news";
import MorePosts from "./components/more_posts";
import NewsUpdateCategory from "./components/news_update_category";

const Blog = () => {
  return (
    <div>
      <Header image={image} />
      {/* <Header2 /> */}
      <LatestNews />
      <MorePosts />
      <NewsUpdateCategory />
    </div>
  );
};

export default Blog;
