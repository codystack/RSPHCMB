import { Container, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import image from "../../../../assets/images/vision_image.svg";
import MUIRichTextEditor from "mui-rte";

// import image1 from "../../../../assets/images/im1.png";
// import image2 from "../../../../assets/images/im2.png";
// import image3 from "../../../../assets/images/im3.png";
// import image4 from "../../../../assets/images/im4.png";
// import ImageMasonry from "../../../components/misc/masonry";

// const tempList = [
//   { image: image1 },
//   { image: image2 },
//   { image: image3 },
//   { image: image4 },
// ];

const VisionMission = (props) => {
  let { data } = props;
  let align, deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    align = "center";
    deviceType = "phone";
  } else if (sm) {
    deviceType = "tablet";
    align = "center";
  } else {
    deviceType = "pc";
    align = "start";
  }

  return (
    <div
      style={{ backgroundColor: "#E8F1FF", paddingTop: 24, paddingBottom: 24 }}
    >
      <Container sx={{ paddingY: 5, paddingX: 2 }}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12} md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: align,
              }}
            >
              <Typography
                fontSize={
                  deviceType === "phone"
                    ? 30
                    : deviceType === "tablet"
                    ? 32
                    : 46
                }
                fontWeight="700"
                textAlign={align}
              >
                Our Vision
              </Typography>
              <Typography gutterBottom={true} textAlign={align}>
                {data?.vision}
              </Typography>
              <Typography
                fontSize={
                  deviceType === "phone"
                    ? 30
                    : deviceType === "tablet"
                    ? 32
                    : 46
                }
                fontWeight="700"
                textAlign={align}
              >
                Mission Statement
              </Typography>
              <MUIRichTextEditor
                readOnly
                inlineToolbar={false}
                defaultValue={data?.mission}
                toolbar={false}
              />
            </div>
          </Grid>
          <Grid item sm={6} xs={12} md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={data?.visionImage} alt="" width="70%" />
              {/* <ImageMasonry list={tempList} factor={""} width="100%" /> */}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default VisionMission;
