import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import image1 from "../../../../assets/images/news1.png";
import image2 from "../../../../assets/images/news2.png";
import image3 from "../../../../assets/images/news3.png";

const LatestNews = () => {
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
  ];

  return (
    <div>
      <Container sx={{ paddingY: 8 }}>
        <Box>
          <Typography
            textAlign="center"
            fontSize={32}
            fontWeight="600"
            gutterBottom={true}
          >
            Latest News & Update
          </Typography>
          <Grid
            container
            spacing={{ xs: 4, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {latestNews?.map((elem, index) => (
              <Grid item xs={12} sm={4} md={4} key={index}>
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
        </Box>
      </Container>
      <br />
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

export default LatestNews;
