import Container from "@mui/material/Container";
import React from "react";

import dots from "../../../assets/images/lga_dots.svg";
import { withRouter } from "react-router-dom";
import Header from "../faqs/components/header";
import image from "../../../assets/images/home_img_featured.png";
import MUIRichTextEditor from "mui-rte";
// import MUIRichTextEditor from "mui-rte";

const ServiceInfo = (props) => {
  let { location } = props;

  return (
    <div>
      <Header
        image={!location.state?.image ? image : location.state?.image}
        title={location.state?.item?.title}
      />
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
      <Container sx={{ paddingY: 8 }}>
        {/* <Typography gutterBottom>
          Lorem ipsum dolor sit amet. Eos numquam voluptatem aut laudantium quis
          33 doloribus dolores qui maxime galisum ab rerum dicta. Id sequi autem
          qui tempore molestiae ab aspernatur debitis aut sequi unde! Est iusto
          magnam ut officia soluta 33 nesciunt quae eos quibusdam Quis qui omnis
          sunt. Lorem ipsum dolor sit amet. Eos numquam voluptatem aut
          laudantium quis 33 doloribus dolores qui maxime galisum ab rerum
          dicta. Id sequi autem qui tempore molestiae ab aspernatur debitis aut
          sequi unde! Est iusto magnam ut officia soluta 33 nesciunt quae eos
          quibusdam Quis qui omnis sunt.
        </Typography>
        <Typography gutterBottom paddingY={1}>
          Ut suscipit ratione ut maiores eligendi rem excepturi commodi et quis
          voluptatem sed corporis modi sed aliquam illo vel dolor dignissimos.
          Rem molestias fuga qui quas neque sit dignissimos quod. Sed atque
          voluptas est libero corporis non quis architecto sit fugiat ipsum et
          voluptatem facere sed quis accusantium.
        </Typography>
        <Typography gutterBottom>
          Lorem ipsum dolor sit amet. Eos numquam voluptatem aut laudantium quis
          33 doloribus dolores qui maxime galisum ab rerum dicta. Id sequi autem
          qui tempore molestiae ab aspernatur debitis aut sequi unde! Est iusto
          magnam ut officia soluta 33 nesciunt quae eos quibusdam Quis qui omnis
          sunt.
        </Typography> */}
        <MUIRichTextEditor
          readOnly
          inlineToolbar={false}
          style={{ width: "100%", textAlign: "center" }}
          defaultValue={location.state?.item?.body}
          toolbar={false}
        />
      </Container>
    </div>
  );
};

export default withRouter(ServiceInfo);
