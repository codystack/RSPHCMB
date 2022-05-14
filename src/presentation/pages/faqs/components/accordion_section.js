import { Avatar, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const AccordionSection = (props) => {
  let { list } = props;
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
      <Container sx={{ paddingY: 8 }}>
        <Box
          paddingX={deviceType === "phone" || deviceType === "tablet" ? 0 : 5}
        >
          {(list || [])?.map((item, key) => (
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
                      ? 16
                      : deviceType === "tablet"
                      ? 18
                      : 20
                  }
                  component="h1"
                  fontWeight={"500"}
                >
                  {item?.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item?.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default AccordionSection;
