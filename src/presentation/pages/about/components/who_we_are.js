import { Container, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
// import image from "../../../../assets/images/who_we_are.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MUIRichTextEditor from "mui-rte";

const WhoWeAre = (props) => {
  let { data } = props;

  let hideImage, align, deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    hideImage = true;
    align = "center";
    deviceType = "phone";
  } else if (sm) {
    hideImage = false;
    align = "center";
    deviceType = "tablet";
  } else {
    hideImage = false;
    deviceType = "pc";
    align = "left";
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        marginTop: deviceType === "phone" ? -144 : -75,
      }}
    >
      <Container
        sx={{
          paddingY: 8,
          paddingX: 2,
        }}
      >
        <Grid
          container
          spacing={2}
          display="flex"
          flexDirection={"row"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Grid item sm={6} xs={12} md={6}>
            <Typography
              fontSize={deviceType === "phone" ? 30 : 42}
              fontWeight="600"
              gutterBottom
              textAlign={align}
            >
              Who we are
            </Typography>
            <MUIRichTextEditor
              readOnly
              inlineToolbar={false}
              style={{ width: "100%", textAlign: "center" }}
              defaultValue={data?.who_we_are}
              toolbar={false}
            />
          </Grid>
          <Grid item sm={6} xs={12} md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "end",
                marginTop: deviceType === "tablet" ? -36 : -48,
                marginBottom: 24,
              }}
            >
              <img
                hidden={hideImage}
                src={data?.image}
                alt="who_we-are_img"
                width={"86%"}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WhoWeAre;
