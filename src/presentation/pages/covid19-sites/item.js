import { Container, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import image from "../../../assets/images/covid19_image.jpeg";
import dots from "../../../assets/images/lga_dots.svg";
// import AboutLGA from "./components/about_lga";
import Header from "../faqs/components/header";
import mapImage from "../../../assets/images/covid_vaccine2.jpg";

import { withRouter } from "react-router-dom";
import {
  collection,
  db,
  query,
  where,
  onSnapshot,
} from "../../../data/firebase";

const Covid19LGAItem = (props) => {
  let { location } = props;
  const [sites, setSites] = React.useState([]);

  React.useEffect(() => {
    // console.log("STA", location?.state.lga);
    const usersRef = collection(db, "vaccination-sites");
    const q = query(usersRef, where("lga", "==", location.state?.lga));

    onSnapshot(q, (querySnapshot) => {
      const vsites = [];
      querySnapshot.forEach((doc) => {
        vsites.push(doc.get("sites"));
      });
      setSites(vsites);
    });
  });

  //   console.log("SITES", sites);

  return (
    <div>
      <Header
        image={image}
        title={`${location.state?.lga} Local Government Area`}
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
      <Container
        sx={{
          paddingX: 4,
          paddingY: 8,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <img src={mapImage} alt="" width="90%" />
          </Grid>
          <Grid container xs={12} sm={12} md={6} spacing={2}>
            {(sites || [])?.map((elem, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                key={index}
                display="flex"
                flexDirection="column"
                justifyContent="start"
              >
                <List>
                  {(elem || [])?.map((el, k) => (
                    <ListItem key={k} divider>
                      <div>
                        <Typography
                          variant="h6"
                          fontWeight="700"
                          paddingTop={2}
                        >
                          {el?.name}
                        </Typography>
                        <Typography>{el?.fixed_temp}</Typography>
                        {/* <Typography fontSize={12} fontStyle={"italic"}>
                          {el?.super_normal}
                        </Typography> */}
                      </div>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default withRouter(Covid19LGAItem);
