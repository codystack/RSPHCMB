import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import image from "../../../assets/images/header_background.png";
import mapImage from "../../../assets/images/map_rivers.png";
import { lgaList } from "./lgas";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#00B0EF",
  },
  header: {
    height: "84vh",
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

const LGAs = () => {
  const classes = useStyles();

  let fontSize, mt, deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    fontSize = 26;
    mt = 200;
    deviceType = "phone";
  } else if (sm) {
    fontSize = 36;
    mt = 400;
    deviceType = "tablet";
  } else {
    mt = 125;
    fontSize = 40;
    deviceType = "pc";
  }

  return (
    <div>
      <div className={classes.header}>
        <div style={{ marginTop: -(fontSize + mt) }}>
          <Container sx={{ paddingX: deviceType === "pc" ? 20 : 1 }}>
            <Typography
              fontSize={fontSize}
              textAlign="center"
              fontWeight={"700"}
              gutterBottom
            >
              Local Government Primary Health Care Authority
            </Typography>
            <Typography
              textAlign={"center"}
              paddingX={deviceType === "pc" ? 16 : 1}
            >
              As the closest administrative structure of the Board to the
              community, the LGA Health Authority serves as the most operational
              arm of the (state) SPHCMB administration. The team is in charge of
              all PHC activities in their respective LGAs.
            </Typography>
          </Container>
        </div>
      </div>
      <Container
        sx={{
          marginTop:
            deviceType === "phone" ? -21 : deviceType === "tablet" ? -16 : -8,
          paddingBottom: 8,
          paddingX: 4,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <img src={mapImage} alt="" width="90%" />
          </Grid>
          <Grid container xs={12} sm={12} md={6} spacing={2}>
            {lgaList?.map((elem, index) => (
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                key={index}
                display="flex"
                flexDirection="column"
                justifyContent="start"
              >
                <Typography
                  variant="h6"
                  fontWeight="700"
                  paddingTop={2}
                >{`${elem.alphabet}`}</Typography>
                {elem?.item?.map((el, i) => (
                  <Link
                    key={i}
                    to={{
                      pathname: "/about/lga/" + el.name,
                      state: { title: el.name },
                    }}
                    style={{ textDecoration: "none" }}
                  >{`${el.name}`}</Link>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LGAs;
