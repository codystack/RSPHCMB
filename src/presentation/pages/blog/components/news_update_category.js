import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import image1 from "../../../../assets/images/newscat1.png";
import image2 from "../../../../assets/images/newscat2.png";
import image3 from "../../../../assets/images/banner2.png";
import image4 from "../../../../assets/images/newscat3.png";
import { Box } from "@mui/system";
import Categories from "./categories";
import MorePosts from "./more_posts";

const NewsUpdateCategory = () => {
  const latestNews = [
    {
      category: "HEALTH NEWS",
      image: image1,
      title: "Suspendisse viverra massa eget nibh ultricies mollis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique elementum nec nisi. Facilisis amet enim vehicula elit duis sed cursus nunc. Scelerisque curabitur mattis adipiscing feugiat at mauris, nibh mauris. Venenatis in diam arcu dolor. ",
      date: "11 DECEMBER 2021",
    },
    {
      category: "HEALTH NEWS",
      image: image2,
      title: "Suspendisse viverra massa eget nibh ultricies mollis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique elementum nec nisi. Facilisis amet enim vehicula elit duis sed cursus nunc. Scelerisque curabitur mattis adipiscing feugiat at mauris, nibh mauris. Venenatis in diam arcu dolor. ",
      date: "11 DECEMBER 2021",
    },
    {
      category: "HEALTH NEWS",
      image: image3,
      title: "Suspendisse viverra massa eget nibh ultricies mollis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique elementum nec nisi. Facilisis amet enim vehicula elit duis sed cursus nunc. Scelerisque curabitur mattis adipiscing feugiat at mauris, nibh mauris. Venenatis in diam arcu dolor. ",
      date: "11 DECEMBER 2021",
    },
    {
      category: "HEALTH NEWS",
      image: image4,
      title: "Suspendisse viverra massa eget nibh ultricies mollis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique elementum nec nisi. Facilisis amet enim vehicula elit duis sed cursus nunc. Scelerisque curabitur mattis adipiscing feugiat at mauris, nibh mauris. Venenatis in diam arcu dolor. ",
      date: "11 DECEMBER 2021",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <Container
        sx={{
          paddingY: 6,
        }}
      >
        <Grid container>
          <Grid xs={12} sm={6} md={8}>
            <div>
              <Typography fontWeight={"600"} fontSize={24} gutterBottom>
                Latest News & Update
              </Typography>
              <Grid
                container
                spacing={{ xs: 2, md: 4 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {latestNews?.map((elem, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index}>
                    <ItemCard
                      title={elem.title}
                      image={elem.image}
                      description={elem.description}
                      category={elem.category}
                      date={elem.date}
                    />
                  </Grid>
                ))}
              </Grid>
              <MorePosts />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box marginX={1}>
              <Container>
                <Typography fontWeight={"600"} fontSize={24} gutterBottom>
                  Categories
                </Typography>
              </Container>
            </Box>
            <Categories />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const ItemCard = (props) => {
  let { image, title, category, date, description } = props;

  return (
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent={"stretch"}
      alignItems="start"
    >
      <img src={image} alt="" width={"100%"} />
      <br />
      <Typography
        fontSize={10}
        fontWeight="300"
        fontFamily={"inter"}
        gutterBottom={false}
      >
        {date} - {category}
      </Typography>
      <Typography fontWeight={"600"} fontSize={18} gutterBottom>
        {title}
      </Typography>
      <Typography fontSize={11} gutterBottom>
        {description}
      </Typography>
    </Box>
  );
};

export default NewsUpdateCategory;
