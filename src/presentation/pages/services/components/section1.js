import { Container, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
// import image from "../../../../assets/images/service_img1.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import pattern from "../../../../assets/images/pattern_dot.svg";
import { useSelector } from "react-redux";
import MUIRichTextEditor from "mui-rte";

const Section1 = (props) => {
  let { fontSize, deviceType } = props;
  let hideImage, align;
  const theme = useTheme();
  const { featuredServiceData } = useSelector((state) => state.service);
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  //   const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    hideImage = true;
    align = "center";
  } else {
    hideImage = false;
    align = "left";
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        marginTop:
          deviceType === "phone" ? -150 : deviceType === "tablet" ? -100 : -75,
      }}
    >
      <Container sx={{ paddingY: 8 }}>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <div>
              <Typography
                fontSize={fontSize - 4}
                fontWeight="600"
                gutterBottom
                lineHeight={1.35}
                textAlign={align}
              >
                {featuredServiceData?.title}
              </Typography>

              <MUIRichTextEditor
                readOnly
                inlineToolbar={false}
                style={{ width: "100%", textAlign: "center" }}
                defaultValue={featuredServiceData?.body}
                toolbar={false}
              />
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "end",
                marginTop: -48,
                marginBottom: 24,
              }}
            >
              <img
                hidden={hideImage}
                src={featuredServiceData?.image}
                alt="who_we-are_img"
                width={"80%"}
                style={{ zIndex: 100 }}
              />
              <img
                src={pattern}
                alt=""
                width="36%"
                style={{
                  marginTop: -128,
                  marginRight: -50,
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Section1;
