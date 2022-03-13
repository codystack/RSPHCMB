import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const MorePosts = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Container>
        <Box
          paddingY={5}
          display="flex"
          flexDirection={"row"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Button
            sx={{
              paddingX: 2,
              backgroundColor: "#E8F1FF",
              color: "#012F74",
              fontSize: 13,
              fontWeight: "500",
              textTransform: "capitalize",
            }}
          >
            More Posts
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default MorePosts;
