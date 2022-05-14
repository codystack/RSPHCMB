import React from "react";
import Header from "../faqs/components/header";
// import image from "../../../assets/images/community_serv1.JPG";
import image2 from "../../../assets/images/community_serv2.JPG";
import { Container, Typography } from "@mui/material";
// import Partners from "../about/components/partners";
// import { useSelector } from "react-redux";
import MUIRichTextEditor from "mui-rte";
import { withRouter } from "react-router-dom";

const Partner = (props) => {
  let { location } = props;
  // let history = useHistory();

  return (
    <div>
      <Header image={image2} title={location.state?.name} />
      <Container sx={{ paddingY: 8 }}>
        <div>
          <div>
            <img
              src={location.state?.data?.logo}
              width="35%"
              alt=""
              style={{ float: "left", margin: 8 }}
            />
          </div>
          {/* <p> */}
          <Typography variant="h6" textAlign={"left"} padding={2}>
            {location.state?.data?.heading}
          </Typography>
          <MUIRichTextEditor
            readOnly
            inlineToolbar={false}
            style={{ width: "100%", textAlign: "center" }}
            defaultValue={location.state?.data?.body}
            toolbar={false}
          />
          {/* </p> */}
        </div>
      </Container>
      {/* <Partners /> */}
    </div>
  );
};

export default withRouter(Partner);
