import React from "react";
import Header from "../faqs/components/header";
import image from "../../../assets/images/banner1.png";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MUIRichTextEditor from "mui-rte";
import { useSelector } from "react-redux";

const PermSecPage = () => {
  const { permSecData } = useSelector((state) => state.permSec);

  return (
    <div>
      <Header image={image} title={"Message from the Executive Secretary"} />
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

          <Typography textAlign={"left"} padding={2}>
            {permSecData?.summary}
          </Typography>
          <Toolbar />
          <MUIRichTextEditor
            readOnly
            inlineToolbar={false}
            style={{ width: "100%", textAlign: "center" }}
            defaultValue={permSecData?.message}
            toolbar={false}
          />
        </div>
      </Container>
    </div>
  );
};

export default PermSecPage;
