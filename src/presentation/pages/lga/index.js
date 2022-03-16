import { Container } from "@mui/material";
import React from "react";
import image from "../../../assets/images/lga_demo_img.png";
import dots from "../../../assets/images/lga_dots.svg";
import AboutLGA from "./components/about_lga";
import Header from "./components/header";
import linePattern from "../../../assets/images/line_pattern.svg";
import ContactDetails from "./components/contact_details";

const LGAs = () => {
  return (
    <div>
      <Header image={image} />
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
      <AboutLGA />
      <div
        style={{
          width: "100%",
          height: 56,
          backgroundImage: "url(" + linePattern + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <ContactDetails />
    </div>
  );
};

export default LGAs;
