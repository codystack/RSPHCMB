import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Container, Grid, IconButton } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "relative",
        height: 512,
      }}
    >
      <Grid
        container
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          height: 512,
        }}
      >
        <Grid
          xs={12}
          sm={6}
          md={8}
          sx={{
            backgroundColor: "white",
          }}
        ></Grid>
        <Grid
          xs={12}
          sm={6}
          md={4}
          sx={{
            backgroundColor: "#00B0EF",
          }}
        ></Grid>
      </Grid>

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <IconButton>
              <Facebook
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
            <IconButton>
              <Instagram
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
            <IconButton>
              <Twitter
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
            <IconButton>
              <LinkedIn
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Container></Container>
      </div>
    </div>
  );
};

export default Header;
