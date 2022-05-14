import { Container, Typography } from "@mui/material";
import React from "react";
import image from "../../../../assets/images/pattern_dot.svg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Add } from "@mui/icons-material";

const ItemCard = (props) => {
  let { name, image, position, width, biography } = props;
  const history = useHistory();

  return (
    <div
      style={{
        backgroundColor: "#E8F1FF",
        display: "flex",
        flexDirection: "column",
        width: width,
        height: 320,
      }}
    >
      <img
        style={{ margin: "auto", borderRadius: 93, backgroundSize: "contain" }}
        src={image}
        alt="item-card-img"
        width={186}
        height={186}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box paddingX={2} paddingBottom={1}>
          <Typography color={"#2571E7"} fontSize={11}>
            {position?.length > 36
              ? position?.substring(0, 36) + "..."
              : position}
          </Typography>
          <Typography
            color="#012F74"
            fontSize={16}
            fontWeight="800"
            gutterBottom
          >
            {name?.length > 21 ? name?.substring(0, 21) + "..." : name}
          </Typography>
        </Box>
        <div>
          <br />
          <Box
            component={"button"}
            padding={1}
            sx={{ border: "none" }}
            style={{
              backgroundColor: "#1E5AFA",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
            }}
            onClick={() =>
              history.push({
                pathname: "/about/team/" + position,
                state: {
                  name: name,
                  position: position,
                  bio: biography,
                  image: image,
                  isPS: false,
                },
              })
            }
          >
            <Add
              style={{
                color: "white",
                margin: "auto",
                fontSize: 24,
                fontWeight: "700",
              }}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

const ItemCardBig = (props) => {
  let { name, image, position, biography, width } = props;
  let history = useHistory();

  return (
    <Box
      sx={{ marginBottom: 10, paddingTop: 8 }}
      style={{
        backgroundColor: "#E8F1FF",
        display: "flex",
        flexDirection: "column",
        width: width,
      }}
    >
      <img
        style={{ margin: "auto", borderRadius: 128 }}
        src={image}
        alt="item-card-img"
        width={256}
        height={256}
      />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box paddingX={2} paddingBottom={1}>
          <Typography color={"#2571E7"} fontSize={11}>
            {position}
          </Typography>
          <Typography
            color="#012F74"
            fontSize={16}
            fontWeight="800"
            gutterBottom
          >
            {name}
          </Typography>
        </Box>
        <div>
          <br />
          <Box
            component={"button"}
            padding={1}
            sx={{ border: "none" }}
            style={{
              backgroundColor: "#1E5AFA",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
            }}
            onClick={() =>
              history.push({
                pathname: "/about/team/" + position,
                state: {
                  name: name,
                  position: position,
                  bio: biography,
                  image: image,
                  isPS: true,
                },
              })
            }
          >
            <Add
              style={{
                color: "white",
                margin: "auto",
                fontSize: 24,
                fontWeight: "700",
              }}
            />
          </Box>
        </div>
      </div>
    </Box>
  );
};

const ManagementTeam = () => {
  const { teamMembersData } = useSelector((state) => state.teams);
  const { permSecData } = useSelector((state) => state.permSec);

  let width, wdt, deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    width = "100%";
    wdt = "25%";
    deviceType = "phone";
  } else if (sm) {
    width = "86%";
    wdt = "20%";
    deviceType = "tablet";
  } else {
    width = "70%";
    wdt = "14%";
    deviceType = "pc";
  }

  return (
    <div>
      <Container
        sx={{
          paddingY: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          fontSize={
            deviceType === "phone" ? 30 : deviceType === "tablet" ? 36 : 45
          }
          fontWeight="700"
          textAlign={"center"}
          lineHeight={1.35}
        >
          Meet the management team
        </Typography>
        <Typography textAlign={"center"} maxWidth={width}>
          The RSPHCMB is led by competent and accomplished professionals in
          their respective specialties.
        </Typography>
      </Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4} md={4}>
          <ItemCardBig
            name={permSecData?.name}
            image={permSecData?.image}
            position={permSecData?.position}
            biography={permSecData?.biography}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}></Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "left",
        }}
      >
        <img
          src={image}
          alt="team-pattern"
          width={wdt}
          style={{ marginTop: -75, marginLeft: 24 }}
        />
      </div>
      <Container
        sx={{
          marginTop: -10,
          marginBottom: 10,
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {teamMembersData?.map((elem, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              key={index}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              {
                <ItemCard
                  name={elem?.name}
                  image={elem?.image}
                  position={elem?.position}
                  biography={elem?.biography}
                />
              }
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ManagementTeam;
