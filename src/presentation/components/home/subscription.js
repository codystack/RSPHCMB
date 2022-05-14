import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import image from "../../../assets/images/bg_blue.svg";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import CustomDialog from "../dialog/custom_dialog";
import SubscriptionForm from "../forms/subscription";

const Subscription = () => {
  const [open, setOpen] = React.useState(false);

  let deviceType;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  if (xs) {
    deviceType = "phone";
  } else if (sm) {
    deviceType = "tablet";
  } else {
    deviceType = "big";
  }

  return (
    <div>
      <CustomDialog
        open={open}
        title={"Subscription Form "}
        handleClose={() => setOpen(false)}
        bodyComponent={<SubscriptionForm setOpen={setOpen} />}
      />
      <Container sx={{ paddingX: 4 }}>
        <div
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding:
              deviceType === "phone" ? 24 : deviceType === "tablet" ? 36 : 48,
            marginTop: 24,
            marginBottom: 24,
            borderRadius: 10,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8}>
              <div>
                <Typography
                  color="white"
                  fontWeight="600"
                  fontSize={
                    deviceType === "phone"
                      ? 24
                      : deviceType === "tablet"
                      ? 30
                      : 36
                  }
                  gutterBottom
                >
                  Subscribe to get updated
                </Typography>
                <br />
                <Typography
                  color="white"
                  fontWeight="400"
                  fontSize={
                    deviceType === "phone"
                      ? 14
                      : deviceType === "tablet"
                      ? 16
                      : 18
                  }
                  gutterBottom
                  maxWidth={
                    deviceType === "phone"
                      ? "100%"
                      : deviceType === "tablet"
                      ? "86%"
                      : "75%"
                  }
                  textAlign={
                    deviceType === "phone"
                      ? "center"
                      : deviceType === "tablet"
                      ? "center"
                      : "start"
                  }
                >
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque .
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              display={"flex"}
              justifyContent="center"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    borderColor: "white",
                    textTransform: "capitalize",
                    paddingX: 4,
                    paddingY: 1,
                    ":hover": {
                      backgroundColor: "white",
                      color: "#00B0EF",
                      borderColor: "#fff",
                    },
                  }}
                  onClick={() => setOpen(true)}
                >
                  Get Started
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Subscription;
