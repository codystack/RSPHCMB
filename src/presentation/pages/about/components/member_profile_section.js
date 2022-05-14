import { Container, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import pattern from "../../../../assets/images/pattern_dot.svg";
import MUIRichTextEditor from "mui-rte";

const MembersProfileSection = (props) => {
  let { fontSize, image, text, name } = props;
  let align;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  //   const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    align = "center";
  } else {
    align = "left";
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        // marginTop:
        //   deviceType === "phone" ? 0 : deviceType === "tablet" ? -100 : -75,
      }}
    >
      <Container sx={{ paddingY: 8 }}>
        <Grid
          container
          display="flex"
          flexDirection="row"
          justifyContent={"start"}
        >
          <Grid item sm={5} xs={12}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                position: "relative",
                // marginTop: 48,
                // marginBottom: 24,
                // r
              }}
            >
              <img
                src={image}
                alt="who_we-are_img"
                width={"70%"}
                style={{ zIndex: 1000 }}
              />
              <img
                src={pattern}
                alt=""
                width="36%"
                style={{
                  marginTop: -75,
                }}
              />
            </div>
          </Grid>
          <Grid item sm={7} xs={12}>
            <Typography
              fontSize={fontSize - 4}
              fontWeight="600"
              gutterBottom={true}
              lineHeight={1.35}
              textAlign={align}
            >
              About {name}
            </Typography>
            <MUIRichTextEditor
              readOnly
              inlineToolbar={false}
              style={{ width: "100%", textAlign: "center" }}
              defaultValue={text}
              toolbar={false}
            />
            {/* {isPS ? (
              <MUIRichTextEditor
                readOnly
                inlineToolbar={false}
                style={{ width: "100%", textAlign: "center" }}
                defaultValue={text}
                toolbar={false}
              />
            ) : (
              <Typography textAlign="left" gutterBottom={true}>
                {text}
              </Typography>
            )} */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MembersProfileSection;
