import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import image from "../../../assets/images/covid19_image.jpeg";
import dots from "../../../assets/images/lga_dots.svg";
// import AboutLGA from "./components/about_lga";
import Header from "../faqs/components/header";
import sideImage from "../../../assets/images/covid_vaccine1.jpg";

import { lgaList } from "../lga/lgas";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const Covid19Sites = (props) => {
  // let { location } = props;

  // const { faqData } = useSelector((state) => state.faqs);

  return (
    <div>
      <Header image={image} title={"Covid-19 Vaccination Sites"} />
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
      <Container
        sx={{
          //   marginTop:
          //     deviceType === "phone" ? -21 : deviceType === "tablet" ? -16 : -8,
          paddingBottom: 8,
          paddingX: 4,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <img src={sideImage} alt="" width="90%" />
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
                      pathname: "/covid19-vaccination-sites/" + el.name,
                      // search: "?sort=name",
                      // hash: "#the-hash",
                      state: { lga: el.name },
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

export default withRouter(Covid19Sites);
