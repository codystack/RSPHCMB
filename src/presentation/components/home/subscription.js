import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import image from "../../../assets/images/bg_blue.svg";

const Subscription = () => {
  return (
    <div>
      <Container>
        <div
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: 48,
            marginLeft: 24,
            marginTop: 24,
            marginBottom: 24,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8}>
              <div>
                <Typography
                  color="white"
                  fontWeight="600"
                  fontSize={36}
                  gutterBottom
                >
                  Subscribe to get updated
                </Typography>
                <br />
                <Typography
                  color="white"
                  fontWeight="400"
                  fontSize={18}
                  gutterBottom
                  maxWidth={"75%"}
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
                  }}
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
