import { Container } from "@mui/material";
// import { Box } from "@mui/system";
import React from "react";
import Header from "../faqs/components/header";
import headerImage from "../../../assets/images/report_img.jpeg";
import image from "../../../assets/images/coming_soon.webp";
// import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

const Publications = () => {
  //   const history = useHistory();

  //   React.useEffect(() => {
  //     if (PublicationsData) {
  //     }
  //   }, [PublicationsData]);

  return (
    <div>
      <Header image={headerImage} title="Publications" />
      <Container sx={{ paddingY: 8 }}>
        <img src={image} alt="" width={"100%"} />
      </Container>
    </div>
  );
};

export default Publications;
