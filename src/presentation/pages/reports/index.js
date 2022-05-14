import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "../faqs/components/header";
import headerImage from "../../../assets/images/report_image.avif";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const Reports = () => {
  // const history = useHistory();
  const { reportsData } = useSelector((state) => state.resources);

  //   React.useEffect(() => {
  //     if (reportsData) {
  //     }
  //   }, [reportsData]);

  return (
    <div>
      <Header image={headerImage} title="Reports" />
      <Container sx={{ paddingY: 8 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {reportsData?.map((elem, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              // onClick={() => {
              // history.push({
              //   pathname: "/resources/reports/" + elem?.title,
              //   state: {
              //     title: elem?.title,
              //     image: elem?.image,
              //     body: elem?.body,
              //   },
              // })
              // }
            >
              <Item item={elem} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const Item = (props) => {
  let { item } = props;
  return (
    <div
      style={{
        height: 420,
        padding: 2,
      }}
    >
      <Box
        sx={{
          backgroundImage: "url(" + item?.image + ")",
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
          >
            Download
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Reports;
