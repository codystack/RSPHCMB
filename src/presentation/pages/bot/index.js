import React from "react";
import { makeStyles } from "@mui/styles";
import image from "../../../assets/images/header_background.png";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
// import { Grid } from "@mui/material";
// import ContactForm from "../../components/forms/contact";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#00B0EF",
  },
  header: {
    height: "96vh",
    backgroundImage: "url(" + image + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  rowEnd: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "end",
  },
}));

const BoT = () => {
  const classes = useStyles();

  let fontSize, mt;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    fontSize = 32;
    mt = 150;
    // deviceType = "phone";
  } else if (sm) {
    fontSize = 42;
    mt = 400;
    // deviceType = "tablet";
  } else {
    mt = 156;
    fontSize = 48;
    // deviceType = "pc";
  }

  return (
    <div>
      <div className={classes.header}>
        <div style={{ marginTop: -(fontSize + mt) }}>
          <Typography fontSize={fontSize} textAlign="center" fontWeight={"700"}>
            Board Of Trustees Members
          </Typography>
          <Typography textAlign={"center"} gutterBottom={true}>
            Our Board Of Trustees Members 👋
          </Typography>
        </div>
      </div>
      <Container sx={{ pb: 12, mt: -8 }}>
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Typography>
            The Board of Trustees is the overall governance and leadership body
            of the Rivers State Primary Health Management Board. The Board has a
            Chairman and members appointed by the Governor and subject to
            confirmation by the House of Assembly. Members of the Board are
            drawn from the public, the Association of Local Government of
            Nigeria, health professional bodies, labour organisations, relevant
            ministries, parastatals and agencies.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default BoT;
