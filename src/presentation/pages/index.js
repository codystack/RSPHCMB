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

const Home = () => {
  let hideImage;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  if (xs) {
    hideImage = true;
    // align = "center";
    // width = "96%";
    // wdt = "25%";
  } else {
    hideImage = false;
    // align = "start";
    // width = "70%";
    // wdt = "40%";
  }

  return (
    <div>
      <Header />
      <div hidden={hideImage}>
        <Sigma />
      </div>
      <MessageFromSec />
      <HealthCare />
      <BuildingSection />
      <BlueSection />
      <EverythingYouNeed />
      <Subscription />
      <Covid19Section />
    </div>
  );
};

export default Home;
