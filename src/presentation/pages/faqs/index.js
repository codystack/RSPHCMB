import { Container } from "@mui/material";
import React from "react";
import image from "../../../assets/images/faq_image_bg.png";
import dots from "../../../assets/images/lga_dots.svg";
// import AboutLGA from "./components/about_lga";
import Header from "./components/header";

import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import AccordionSection from "./components/accordion_section";

const FAQs = (props) => {
  const { faqData } = useSelector((state) => state.faqs);

  // React.useEffect(() => {
  //   if (faqData) {
  //     console.log("FAQ DATA", faqData);
  //   }
  // }, [faqData]);

  return (
    <div>
      <Header image={image} title={"Frequently Asked Questions"} />
      <Container
        sx={{
          marginTop: -8,
        }}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "end",
        }}
      >
        <img src={dots} alt="" />
      </Container>
      <AccordionSection list={faqData} />
    </div>
  );
};

export default withRouter(FAQs);
