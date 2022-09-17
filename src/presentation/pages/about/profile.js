import { Container } from "@mui/material";
import React from "react";
import image from "../../../assets/images/img-gallery8.jpeg";
import dots from "../../../assets/images/lga_dots.svg";
import Header from "../faqs/components/header";

import { withRouter } from "react-router-dom";
import MembersProfileSection from "./components/member_profile_section";

const MembersProfile = (props) => {
  let { location } = props;

  return (
    <div>
      <Header image={image} title={location.state?.name} />
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
      <MembersProfileSection
        image={location?.state?.image}
        name={location?.state?.name}
        text={location?.state?.bio}
        isPS={location.state?.isPS}
      />
    </div>
  );
};

export default withRouter(MembersProfile);
