import { Box, Container, List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const Categories = () => {
  const categoryList = [
    { name: "News and Update" },
    { name: "Event" },
    { name: "Upcoming campaign" },
    { name: "Covid-19" },
    { name: "Newsletters" },
    { name: "Ebola virus" },
    { name: "HIV/Aids" },
    { name: "Cancer" },
    { name: "Malaria" },
    { name: "Hepatitis B" },
    { name: "Air pollution" },
  ];

  return (
    <Box marginX={5}>
      <Container
        style={{
          display: "flex",
          backgroundColor: "#E8F1FF",
        }}
      >
        <List
          sx={{
            width: "100%",
          }}
        >
          {categoryList?.map((elem, index) => (
            <ListItem button divider>
              <ListItemText primary={elem.name} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Categories;
