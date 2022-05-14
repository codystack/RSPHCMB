import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

const Album = () => {
  const history = useHistory();

  const { galleryData } = useSelector((state) => state.resources);

  return (
    <div>
      <Container sx={{ paddingY: 8 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {galleryData?.map((elem, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              onClick={() =>
                history.push({
                  pathname: "/resources/gallery/" + elem?.title,
                  state: {
                    title: elem?.title,
                    image: elem?.image,
                    items: elem?.items,
                    // description: elem?.des,
                  },
                })
              }
            >
              <Item
                title={elem?.title}
                image={elem?.image}
                // description={elem.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const Item = (props) => {
  let { image, title, description } = props;

  return (
    <Box
      padding={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <img
          src={image}
          alt=""
          style={{
            height: 215,
            width: "100%",
            borderRadius: 10,
          }}
        />
        <Box padding={0.5}>
          <Typography
            textAlign="center"
            variant="h6"
            component="h1"
            fontWeight="600"
          >
            {title}
          </Typography>
          <Typography
            textAlign="center"
            variant="body2"
            component="h1"
            fontWeight="400"
            gutterBottom
          >
            {description?.length > 75
              ? description?.substr(0, 75)
              : description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Album;
