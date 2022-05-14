import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import image from "../../../assets/images/header_background.png";
import { useSelector } from "react-redux";
// import { Box } from "@mui/system";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MUIRichTextEditor from "mui-rte";
// import mapImage from "../../../assets/images/map_rivers.png";
// import { lgaList } from "./lgas";
// import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#00B0EF",
  },
  header: {
    height: "84vh",
    backgroundImage: "url(" + image + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  rowEnd: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "end",
  },
}));

const HealthCentres = () => {
  const classes = useStyles();

  const { LGAsData } = useSelector((state) => state.lgas);
  const { healthCentreData } = useSelector((state) => state.about);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let fontSize, mt, deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    fontSize = 28;
    mt = 200;
    deviceType = "phone";
  } else if (sm) {
    fontSize = 36;
    mt = 400;
    deviceType = "tablet";
  } else {
    mt = 125;
    fontSize = 40;
    deviceType = "pc";
  }

  return (
    <div>
      <div className={classes.header}>
        <div style={{ marginTop: -(fontSize + mt) }}>
          <Container sx={{ paddingX: deviceType === "pc" ? 20 : 1 }}>
            <Typography
              fontSize={fontSize}
              textAlign="center"
              fontWeight={"700"}
            >
              Primary Health Facilities
            </Typography>
            <Typography
              textAlign={"center"}
              paddingX={deviceType === "pc" ? 16 : 1}
            >
              The location of health facilities across the 23 local government
              areas of the state.
            </Typography>
          </Container>
        </div>
      </div>
      <Container
        sx={{
          marginTop:
            deviceType === "phone" ? -21 : deviceType === "tablet" ? -16 : -8,
          paddingBottom: 8,
          paddingX: 4,
        }}
      >
        <div>
          <br />
          <Typography variant="h5" fontWeight={"600"} gutterBottom>
            Introduction
          </Typography>
          <MUIRichTextEditor
            readOnly
            inlineToolbar={false}
            defaultValue={healthCentreData?.introduction}
            toolbar={false}
          />
        </div>
        <br />
        {LGAsData &&
          LGAsData?.map((item, key) => (
            <>
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
                      <ExpandMore />{" "}
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
                    {item?.lga}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {item?.facilities && (
                    <Grid
                      container
                      spacing={{ xs: 2, md: 2 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      {item?.facilities?.map((item, index) => (
                        <Grid item xs={12} sm={6} md={6} key={index}>
                          <Typography>{item?.name}</Typography>
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </AccordionDetails>
              </Accordion>

              <br />
            </>
          ))}
      </Container>
    </div>
  );
};

export default HealthCentres;
