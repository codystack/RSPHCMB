import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import image from "../../assets/images/not_found.png";

const NotFound = () => {
  return (
    <Container>
      <Box
        height={"100vh"}
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
      >
        <img src={image} alt="" width={"40%"} />
        <Typography variant="h4" fontWeight={"600"} color={""} mt={-10}>
          Page Not Found
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
