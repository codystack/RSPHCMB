import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MobileCarousel from "../carousel/mobile_carousel";
import { useSelector } from "react-redux";

import Button from "@mui/material/Button";
import Searchbar from "../searchbar";
import { useHistory } from "react-router-dom";

const MobileHeader = () => {
  const { homeBannerData } = useSelector((state) => state.home);
  const [searchKey, setSearchKey] = React.useState(null);
  const [error, setError] = React.useState(false);
  const history = useHistory();

  const handleSearch = () => {
    if (!searchKey) {
      setError(true);
    } else {
      setError(false);

      history.push({
        pathname: "/about/lga/" + searchKey,
        state: { title: searchKey },
      });
    }
  };

  return (
    <div>
      <Toolbar />
      <div
        style={{
          height: "80vh",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#00B0EF",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: "96%",
          }}
        >
          <br />
          <MobileCarousel carouselItems={homeBannerData} />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "stretch",
              width: "100%",
            }}
          >
            <Searchbar setSearchKey={setSearchKey} error={error} />
            <Button
              variant="contained"
              disableElevation={true}
              sx={{
                backgroundColor: "#FF0000",
                color: "white",
                paddingX: 6,
                maxLines: 1,
                ":hover": {
                  bgcolor: "#d32f2f", // theme.palette.primary.main
                  color: "white",
                },
                alignSelf: "stretch",
                textTransform: "capitalize",
              }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>
        <Box
          display="flex"
          flexDirection={"row"}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton>
            <a
              href="https://www.facebook.com/Rivers-State-Primary-Health-Care-Management-Board-2260891724188168/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                sx={{
                  color: "white",
                }}
              />
            </a>
          </IconButton>

          <IconButton>
            <a href="https://" target="_blank" rel="noopener noreferrer">
              <Instagram
                sx={{
                  color: "white",
                }}
              />
            </a>
          </IconButton>

          <IconButton>
            <a
              href="https://twitter.com/rivers_phcmb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter
                sx={{
                  color: "white",
                }}
              />
            </a>
          </IconButton>

          <IconButton>
            <a href="https://" target="_blank" rel="noopener noreferrer">
              <LinkedIn
                sx={{
                  color: "white",
                }}
              />
            </a>
          </IconButton>
        </Box>
      </div>
    </div>
  );
};

export default MobileHeader;
