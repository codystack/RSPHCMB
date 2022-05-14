import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import dots from "../../../assets/images/lga_dots.svg";
import { withRouter } from "react-router-dom";
import Header from "../faqs/components/header";
import { onSnapshot, doc, db } from "../../../data/firebase";
import { Box } from "@mui/system";

const DepartmentInfo = (props) => {
  let { location } = props;
  const [functions, setFunctions] = React.useState([]);

  React.useEffect(() => {
    onSnapshot(doc(db, "departments", "" + location?.state?.id), (doc) => {
      // console.log("Current data: ", doc.data());
      setFunctions(doc.data()?.functions);
    });
  }, [location?.state?.id]);

  return (
    <div>
      <Header image={location.state?.image} title={location.state?.title} />
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
      <Container sx={{ paddingY: 8 }}>
        <Typography>{location.state?.description}</Typography>
      </Container>
      <Divider />
      <Container sx={{ paddingY: 8 }}>
        <Typography variant="h6">
          Functions of {location.state?.title}
        </Typography>
        <br />
        {functions?.map((item, index) => (
          <Container key={index}>
            <Box
              display={"flex"}
              flexDirection="row"
              justifyContent={"space-between"}
              alignItems="center"
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "black",
                }}
              />
              <Typography pl={2} flex={1}>
                {item?.text}
              </Typography>
            </Box>
          </Container>
        ))}
        {functions?.length < 1 && (
          <Box
            padding={10}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems={"center"}
          >
            <Typography>No record found</Typography>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default withRouter(DepartmentInfo);
