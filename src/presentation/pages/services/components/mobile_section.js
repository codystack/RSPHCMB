import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import bg from "../../../../assets/images/blue_rect.svg";
import { useHistory } from "react-router-dom";
import CustomFeaturedImage from "../../../components/misc/custom_featured";

const MobileSection = (props) => {
  let { image, title, summary, body } = props;
  const history = useHistory();
  let align, deviceType;
  const theme = useTheme();
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
    <div style={{ backgroundColor: "white" }}>
      <Container sx={{ paddingY: 8 }}>
        <Grid container spacing={2}>
          <Grid
            item
            sm={6}
            xs={12}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
          >
            <CustomFeaturedImage
              image={image}
              bg={bg}
              deviceType={deviceType}
            />
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize={deviceType === "phone" ? 26 : 46}
                fontWeight="600"
                gutterBottom
                lineHeight={1.25}
                textAlign={align}
              >
                {title}
              </Typography>
              <Typography textAlign="left" gutterBottom={true}>
                {summary}
              </Typography>
              <br />
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "transparent",
                  color: "#000F37",
                  borderColor: "#000F37",
                  textTransform: "capitalize",
                }}
                onClick={() =>
                  history.push({
                    pathname: `/services/${title}`,
                    state: {
                      image: image,
                      title: title,
                      description: summary,
                      body: body,
                    },
                  })
                }
              >
                Learn More
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MobileSection;
