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
import image from "../../../assets/images/lga_demo_img.png";
import dots from "../../../assets/images/lga_dots.svg";
import AboutLGA from "./components/about_lga";
import Header from "./components/header";
import linePattern from "../../../assets/images/line_pattern.svg";

import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import CommitteeTable from "../../components/table/comm_table";
import { Box } from "@mui/system";

const healthAuthorities = [
  { text: "Hon. Chairman (or a representative) (Committee chairman)" },
  { text: "PHC Coordinator/MOH (Committee Secretary)" },
  { text: "LGA Supervisory Councilor for Health" },
  { text: "Head of Finance in the LGA" },
  {
    text: "Representative of LGA in charge of water (Head of Environmental Health Unit)",
  },
  { text: "Representative of LGA programme officers" },
  { text: "Representatives of heads of PHCs in the LGA" },
  { text: "One representative from the communities in the LGA" },
];

const LGAItem = (props) => {
  let { location } = props;
  const { LGAsData } = useSelector((state) => state.lgas);
  const [lgaFacilities, setLGAFacilities] = React.useState();
  const [lgaItem, setLGAItem] = React.useState();

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

  React.useEffect(() => {
    let faci = LGAsData?.filter((it) => it?.lga === location.state?.title);
    setLGAFacilities(faci[0]?.facilities);
    setLGAItem(faci[0]);
  }, [LGAsData, location.state?.title]);

  return (
    <div>
      <Header
        image={image}
        title={location.state?.title}
        deviceType={deviceType}
      />
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
      <AboutLGA item={lgaItem} />
      <Container>
        <Box paddingY={2}>
          <Typography
            variant="h5"
            fontWeight="600"
            textAlign={"left"}
            paddingTop={3}
            gutterBottom
          >
            {"The LGA Health Authority & Technical Committee"}
          </Typography>
          <Typography lineHeight={1.5} gutterBottom>
            The Local Government Primary Health Care Authority and the Primary
            Health Care Technical Committee are responsible for the management
            and implementation of Primary Health Care activities and services at
            the LGA level. The health authority is the operational arm of the
            Rivers State Primary Health Care Management Board. It has the
            chairman of the local government as the Committee Chairman and the
            Medical Officer of Health as the Secretary.
          </Typography>
          <Typography lineHeight={1.5}>{lgaItem?.comm_desc}</Typography>
        </Box>
        <Accordion
          elevation={0}
          sx={{
            marginY: deviceType === "phone" || deviceType === "tablet" ? 2 : 3,
          }}
          expanded={expanded === "panel"}
          onChange={handleChange("panel")}
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
                deviceType === "phone" ? 16 : deviceType === "tablet" ? 18 : 20
              }
              component="h3"
              fontWeight={"500"}
            >
              {"LOCAL GOVERNMENT HEALTH AUTHORITY"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {healthAuthorities?.map((item, index) => (
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="start"
                alignItems="start"
              >
                <Typography pr={2} fontWeight="600">
                  {index + 1}.
                </Typography>
                <Typography>{item?.text}</Typography>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      </Container>
      <Container>
        <Accordion
          elevation={0}
          sx={{
            marginY: deviceType === "phone" || deviceType === "tablet" ? 2 : 3,
          }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
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
                deviceType === "phone" ? 16 : deviceType === "tablet" ? 18 : 20
              }
              component="h3"
              fontWeight={"500"}
            >
              {"LOCAL GOVERNMENT TECHNICAL COMMITTEE"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* PUT TABLE HERE.... */}
            <CommitteeTable list={lgaItem?.committees} />
          </AccordionDetails>
        </Accordion>
      </Container>
      <Container sx={{ paddingY: 6 }}>
        <Typography
          fontSize={
            deviceType === "phone" ? 16 : deviceType === "tablet" ? 18 : 20
          }
          component="h3"
          fontWeight={"700"}
        >
          {`${location.state?.title} Facilities`}
        </Typography>
        <br />
        {lgaFacilities && (
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {lgaFacilities?.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Typography>{item?.name}</Typography>
              </Grid>
            ))}
          </Grid>
        )}

        {/* <List sx={{ width: "100%" }}>
          {(lgaFacilities || [])?.map((item, key) => (
            <ListItem key={key} sx={{ width: "100%" }} divider>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="start"
                alignItems={"center"}
                width={"100%"}
              >
                {/* <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "black",
                    marginRight: 16,
                  }}
                /> 
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems={"center"}
                  width="100%"
                >
                  <Typography>{item?.name}</Typography>
                   <Link
                    to={{
                      pathname:
                        "/about/lga/" +
                        LGAsData?.lga +
                        "/facilities/" +
                        item?.name,
                      state: { name: item?.name },
                    }}
                  >
                    View Details
                  </Link> *
                </Box>
              </Box>
            </ListItem>
          ))}
        </List> */}
      </Container>
      <div
        style={{
          width: "100%",
          height: 56,
          backgroundImage: "url(" + linePattern + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      {/* <ContactDetails lga={location.state?.title} /> */}
    </div>
  );
};

export default withRouter(LGAItem);
