import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import image from "../../../../assets/images/banner2.png";
// import { useHistory } from "react-router-dom";

const SubAlbum = (props) => {
  let { list } = props;
  // const history = useHistory();

  return (
    <div>
      <Container sx={{ paddingY: 8 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {list?.map((elem, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              // onClick={() =>
              //   history.push({
              //     pathname: "/resources/gallery/" + elem?.desc,
              //     state: {
              //       // title: elem?.title,
              //       image: elem?.image,
              //       description: elem?.desc,
              //     },
              //   })
              // }
            >
              <Item image={elem?.image} description={elem?.desc} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const Item = (props) => {
  let { image, description } = props;

  return (
    <Box
      padding={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <img
        src={image}
        alt=""
        style={{
          height: 215,
          width: "100%",
        }}
      />
      <Box padding={0.6}>
        <Typography
          textAlign="center"
          variant="body2"
          component="h1"
          fontWeight="400"
          gutterBottom
        >
          {description?.length > 60 ? description?.substr(0, 60) : description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SubAlbum;
