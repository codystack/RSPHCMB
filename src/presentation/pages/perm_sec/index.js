import React from "react";
import Header from "../faqs/components/header";
import image from "../../../assets/images/banner1.png";
import { Container, Typography } from "@mui/material";
// import MUIRichTextEditor from "mui-rte";
import { useSelector } from "react-redux";

const PermSecPage = () => {
  const { permSecData } = useSelector((state) => state.permSec);

  return (
    <div>
      <Header image={image} title={"Message from the Parmanent Secretary"} />
      <Container sx={{ paddingTop: 8, paddingBottom: 18 }}>
        <div>
          <div>
            <img
              src={permSecData?.image}
              width="25%"
              alt=""
              style={{ float: "left", margin: 8 }}
            />
          </div>
          {/* <p> */}
          {/* <Typography fontStyle={"italic"} textAlign={"left"} padding={2}>
            {permSecData?.summary}
          </Typography> */}
          <Typography textAlign={"left"} padding={2}>
            {permSecData?.summary}
          </Typography>
          <Typography pb={21}></Typography>
          {/* <MUIRichTextEditor
            readOnly
            inlineToolbar={false}
            style={{ width: "100%", textAlign: "center" }}
            defaultValue={permSecData?.message}
            toolbar={false}
          /> */}
          {/* </p> */}
        </div>
      </Container>
    </div>
  );
};

export default PermSecPage;
