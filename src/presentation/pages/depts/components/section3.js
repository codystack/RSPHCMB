import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
// import image from "../../../../assets/images/service_img2.png";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import bg from "../../../../assets/images/blue_rect.svg";
import CustomFeaturedImage from "../../../components/misc/custom_featured";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import {
  collection,
  onSnapshot,
  db,
  query,
  where,
} from ".././../../../data/firebase";

const Section3 = (props) => {
  let { title, image, description, fontSize, item } = props;
  const [expanded, setExpanded] = React.useState(false);
  const [fn, setFn] = React.useState(null);
  const { deptFunctions } = useSelector((state) => state.department);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  React.useEffect(() => {
    const qe = query(
      collection(db, "dept-functions"),
      where("department", "==", item?.id)
    );
    onSnapshot(qe, (querySnapshot) => {
      const f = [];
      querySnapshot.forEach((doc) => {
        f.push(doc.data());
      });
      setFn(f);
    });
  }, [deptFunctions, fn, item]);

  let align, deviceType;
  // const history = useHistory();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    deviceType = "phone";
    align = "center";
  } else if (sm) {
    deviceType = "tablet";
  } else {
    deviceType = "big";
    align = "left";
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <Container sx={{ paddingY: 8 }}>
        <Grid container spacing={2}>
          <Grid
            item
            sm={6}
            xs={12}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
          >
            <CustomFeaturedImage
              image={image}
              bg={bg}
              deviceType={deviceType}
            />
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
          >
            <div>
              <Typography
                fontSize={fontSize}
                fontWeight="600"
                gutterBottom
                textAlign={align}
              >
                {title}
              </Typography>
              <Typography textAlign="left" gutterBottom={true}>
                {description}
              </Typography>
              <br />
              {fn && (
                <Accordion
                  elevation={0}
                  sx={{
                    marginY:
                      deviceType === "phone" || deviceType === "tablet" ? 2 : 3,
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
                        <ExpandMore />{" "}
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
                      Functions of Department
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {fn &&
                      fn?.map((elem, k) => (
                        <Box
                          display={"flex"}
                          flexDirection="row"
                          justifyContent="start"
                          alignItems={"start"}
                        >
                          <Typography fontWeight={"500"} pr={2}>{`${
                            k + 1
                          }. `}</Typography>
                          <Typography>{elem?.function}</Typography>
                        </Box>
                      ))}
                  </AccordionDetails>
                </Accordion>
              )}

              {/* <Button
                variant="outlined"
                sx={{
                  backgroundColor: "transparent",
                  color: "#000F37",
                  borderColor: "#000F37",
                  textTransform: "capitalize",
                }}
                onClick={() =>
                  history.push({
                    pathname: `/about/departments/${title}`,
                    state: {
                      image: image,
                      title: title,
                      description: description,
                      id: id,
                    },
                  })
                }
              >
                Learn More
              </Button> */}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Section3;
