import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "../faqs/components/header";
import headerImage from "../../../assets/images/report_img.jpeg";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import image from "../../../assets/images/books_icon.avif";
// import { getDownloadURL, ref, storage } from "../../../data/firebase";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const Downloads = () => {
  const { downloadsData } = useSelector((state) => state.resources);

  //   React.useEffect(() => {
  //     if (DownloadsData) {
  //     }
  //   }, [DownloadsData]);

  // const downloadFile = (id) => {
  //   getDownloadURL(ref(storage, `downloads/${id}.pdf`))
  //     .then((url) => {
  //       const xhr = new XMLHttpRequest();
  //       xhr.responseType = "blob";
  //       xhr.onload = (event) => {
  //         const blob = xhr.response;
  //       };
  //       xhr.open("GET", url);
  //       xhr.send();

  //       // Or inserted into an <img> element
  //       const img = document.getElementById("myimg");
  //       img.setAttribute("src", url);
  //     })
  //     .catch((error) => {
  //       // Handle any errors
  //     });
  // };

  return (
    <div>
      <Header image={headerImage} title="Downloads" />
      <Container sx={{ paddingY: 8 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {downloadsData?.map((elem, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Item item={elem} />
              {/* <Box
                display={"flex"}
                flexDirection="column"
                justifyContent={"start"}
                alignItems="start"
              >
                <Typography gutterBottom>{elem?.title}</Typography>
                <Button
                  variant="contained"
                  style={{
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                  onClick={downloadFile(elem?.id)}
                >
                  {/* <Link
                    to={elem?.res}
                    target="_blank"
                    download
                    style={{
                      textDecoration: "none",
                    }}
                  > */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const Item = (props) => {
  let { item } = props;

  const downloadNow = () => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = (event) => {
      // const blob = xhr.response;
    };
    xhr.open("GET", item?.res);
    xhr.send();
  };

  return (
    <div
      style={{
        height: 420,
        padding: 2,
      }}
    >
      <Box
        sx={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          borderColor: "white",
          borderWidth: 4,
          borderRadius: 6,
          height: "100%",
        }}
      >
        <Box
          borderRadius={8}
          bgcolor={"#00000080"}
          display="flex"
          flexDirection={"column"}
          justifyContent="space-between"
          alignItems={"center"}
          height="100%"
        >
          <Typography
            color={"white"}
            fontSize={18}
            fontWeight="500"
            textAlign="center"
            padding={4}
            my={5}
          >
            {item?.title}
          </Typography>

          <Button
            sx={{
              mb: 5,
              textTransform: "capitalize",
              color: "white",
              borderColor: "white",
            }}
            variant="outlined"
            endIcon={
              <FileDownloadIcon fontSize="large" sx={{ color: "white" }} />
            }
            onClick={downloadNow}
          >
            Download
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Downloads;
