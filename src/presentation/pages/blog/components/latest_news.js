import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const LatestNews = (props) => {
  let { deviceType } = props;
  const { postData } = useSelector((state) => state.post);

  React.useEffect(() => {
    console.log(postData);
  }, [postData]);

  return (
    <div>
      <Container sx={{ paddingY: 8 }}>
        <Box>
          <Typography
            textAlign="center"
            fontSize={deviceType === "phone" ? 24 : 36}
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
            {postData ? (
              postData[0]?.map((elem, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                  <ItemCard elem={elem} />
                </Grid>
              ))
            ) : (
              <div />
            )}
          </Grid>
        </Box>
      </Container>
      <br />
    </div>
  );
};

const ItemCard = (props) => {
  let { elem } = props;

  return (
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent={"stretch"}
      alignItems="start"
    >
      {elem.featured_media ? (
        <a href={elem.link} style={{ height: 200, width: "100%" }}>
          <img
            src={
              elem?._embedded["wp:featuredmedia"][0]?.media_details["sizes"][
                "rivax-large"
              ]?.source_url
            }
            alt=""
            style={{ height: "100%" }}
            width={"100%"}
          />
        </a>
      ) : null}
      <br />
      <Typography
        fontSize={11}
        fontWeight="400"
        // fontFamily={"inter"}
        gutterBottom={false}
      >
        {`${new Date(elem?.date).toDateString()} `}
      </Typography>
      <Typography fontWeight={"600"} fontSize={15}>
        {`${elem?.title?.rendered}`.length > 50
          ? `${elem?.title?.rendered}`.substring(0, 48) + "..."
          : elem?.title?.rendered}
      </Typography>
      {elem?.excerpt.rendered ? (
        <div
          className="excerpt"
          dangerouslySetInnerHTML={{ __html: elem?.excerpt.rendered }}
        />
      ) : null}
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection="row"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <a
          style={{
            textDecoration: "none",
            textTransform: "capitalize",
            color: "black",
            fontWeight: 700,
          }}
          href={elem._embedded.author[0].link}
        >
          <Box
            display={"flex"}
            flexDirection="row"
            justifyContent={"start"}
            alignItems="center"
            paddingY={1}
          >
            <img
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                marginRight: 16,
              }}
              src={elem._embedded.author[0].avatar_urls["48"]}
              alt=""
            />
            <Typography>{elem._embedded.author[0].name}</Typography>
          </Box>
        </a>
        <Button variant="contained">
          <a
            href={elem.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              textTransform: "capitalize",
              color: "white",
            }}
          >
            Read More
          </a>
        </Button>
      </Box>
    </Box>
  );
};

export default LatestNews;
