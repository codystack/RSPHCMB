import React from "react";
import Header from "../faqs/components/header";
import image from "../../../assets/images/research_image.jpeg";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Accordion from "@mui/material/Accordion";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Avatar from "@mui/material/Avatar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MUIRichTextEditor from "mui-rte";

const Research = () => {
  const { researchData } = useSelector((state) => state.resources);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    deviceType = "phone";
  } else if (sm) {
    deviceType = "tablet";
  } else {
    deviceType = "pc";
  }

  return (
    <div>
      <Header image={image} title={"RESEARCH FOR HEALTH"} />
      <Container sx={{ paddingY: 6 }}>
        <Box display={"flex"} flexDirection="column" justifyContent="start">
          <Typography
            variant={deviceType === "phone" ? "h6" : "h4"}
            fontWeight={"700"}
            gutterBottom
          >
            {/* {researchData?.heading} */}
          </Typography>

          <MUIRichTextEditor
            readOnly
            inlineToolbar={false}
            defaultValue={researchData?.body}
            toolbar={false}
          />
        </Box>
      </Container>
      {/* FAQ's Section */}
      <Container sx={{ pb: 8 }}>
        <Box
          paddingX={deviceType === "phone" || deviceType === "tablet" ? 0 : 5}
        >
          {(researchData?.faqs || [])?.map((item, key) => (
            <Accordion
              key={key}
              elevation={0}
              sx={{
                marginY:
                  deviceType === "phone" || deviceType === "tablet" ? 2 : 3,
              }}
              expanded={expanded === "panel" + key}
              onChange={handleChange("panel" + key)}
            >
              <AccordionSummary
                sx={{ backgroundColor: "#E5EEFD" }}
                expandIcon={
                  <Avatar
                    sx={{
                      backgroundColor: "#B2CAF2",
                    }}
                  >
                    {" "}
                    <ExpandMoreIcon />{" "}
                  </Avatar>
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  fontSize={
                    deviceType === "phone"
                      ? 18
                      : deviceType === "tablet"
                      ? 20
                      : 20
                  }
                  component="h1"
                  fontWeight={"500"}
                >
                  {item?.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* {
                   inde = item?.answer+"".indexOf("here")
                  // item?.answer?.endsWith("here") ?  :
                } */}
                <Typography>{item?.answer}</Typography>
                {key === 0 && (
                  <List>
                    {/* <Typography gutterBottom>{researchData?.body}</Typography> */}
                    {(researchData?.list_items || [])?.map((item, key) => (
                      <ListItem key={key}>
                        <Box
                          display="flex"
                          flexDirection="row"
                          justifyContent="start"
                          alignItems={"center"}
                        >
                          <div
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: 3,
                              backgroundColor: "black",
                              marginRight: 16,
                            }}
                          />
                          <Typography>{item}</Typography>
                        </Box>
                      </ListItem>
                    ))}
                  </List>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default Research;
