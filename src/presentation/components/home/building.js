import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import imageSigma from "../../../assets/images/decorator.svg";

// import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import MUIRichTextEditor from "mui-rte";

const BuildingSection = () => {
  // const [element, controls] = useScroll();
  const { buildingCultureData } = useSelector((state) => state.home);

  let align, deviceType;
  const theme = useTheme();
  // const history = useHistory();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    deviceType = "phone";
    align = "center";
  } else if (sm) {
    deviceType = "tablet";
  } else {
    deviceType = "big";
    align = "left";
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "end",
          marginTop: 15,
        }}
      >
        <img src={imageSigma} alt="" width={"6%"} style={{ marginLeft: 0 }} />
      </div>
      <Container sx={{ paddingTop: -16, paddingBottom: 8 }}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <img
              // variants={variantImg}
              // initial="hidden"
              // animate="visible"
              src={buildingCultureData?.image}
              alt=""
              width={"75%"}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <div>
              <Typography
                fontSize={deviceType === "phone" ? 24 : 36}
                fontWeight="600"
                gutterBottom
                textAlign={align}
              >
                {buildingCultureData?.title}
              </Typography>
              <MUIRichTextEditor
                readOnly
                inlineToolbar={false}
                defaultValue={buildingCultureData?.summary}
                toolbar={false}
              />

              <br />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BuildingSection;
