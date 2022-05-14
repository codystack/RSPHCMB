import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/home/header";
import Sigma from "../components/home/sigma";
import MessageFromSec from "../components/home/message";
import HealthCare from "../components/home/health_care";
import BuildingSection from "../components/home/building";
import BlueSection from "../components/home/blue_section";
import EverythingYouNeed from "../components/home/everything";
import Subscription from "../components/home/subscription";
import Covid19Section from "../components/home/covid_19";
// import image from "../../assets/images/home_img_featured.png";

// import LatestNews from "./blog/components/latest_news";
import MobileHeader from "../components/home/header_mobile";

const Home = () => {
  let hideImage, deviceType;
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  if (sm) {
    hideImage = true;
    deviceType = "phone";
  } else {
    hideImage = false;
    deviceType = "big";
  }

  return (
    <div>
      {deviceType === "phone" ? <MobileHeader /> : <Header />}
      <div hidden={hideImage}>
        <Sigma />
      </div>

      <MessageFromSec />
      <HealthCare />
      <BuildingSection />
      {/* <LatestNews /> */}
      <BlueSection />
      <EverythingYouNeed />
      <Subscription />
      <Covid19Section />
    </div>
  );
};

export default Home;
