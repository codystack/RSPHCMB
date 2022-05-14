import React from "react";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Typography, Card } from "@mui/material";
import Searchbar from "../searchbar";
import { useHistory } from "react-router-dom";

const MyCarousel = (props) => {
  let { deviceType, carouselItems } = props;

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
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={deviceType !== "xs" ? "space-between" : "start"}
      // alignItems={"center"}
      width="100%"
    >
      <Carousel
        autoPlay={true}
        animation={"fade"}
        indicators={false}
        interval={5000}
        duration={500}
        navButtonsAlwaysVisible={false}
        navButtonsAlwaysInvisible={true}
        // next={(next, active) => setActiveIndex(active)}
        // prev={(next, active) => setActiveIndex(active)}
        // NavButton={({ onClick, className, style, next, prev }) => {
        //   return (
        //     <>
        //       <Button
        //         id={btnNextId}
        //         hidden={true}
        //         onClick={onClick}
        //         className={className}
        //         style={(style, { display: "none" })}
        //       >
        //         {next && ""}
        //       </Button>

        //       <Button
        //         id={btnPrevId}
        //         hidden={true}
        //         onClick={onClick}
        //         className={className}
        //         style={style}
        //       >
        //         {prev && ""}
        //       </Button>
        //     </>
        //   );
        // }}
      >
        {carouselItems?.map((item, i) => (
          <Item key={i} item={item} deviceType={deviceType} />
        ))}
      </Carousel>
      <div
        style={{
          marginTop: -86,
          display: deviceType !== "xs" ? "flex" : "none",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "stretch",
          width: deviceType !== "xs" ? "45%" : "100%",
          zIndex: 1000,
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
    </Box>
  );
};

const Item = (props) => {
  let { deviceType, item } = props;
  return (
    <Grid
      container
      display="flex"
      flexDirection="row"
      height={"100%"}
      minHeight={400}
      justifyContent={deviceType === "xs" ? "left" : "center"}
      // display={deviceType === "xs" ? "none" : ""}
    >
      <Grid
        item
        sm={6}
        md={6}
        display="flex"
        flexDirection={"column"}
        justifyContent={deviceType === "xs" ? "left" : "center"}
        alignItems="start"
      >
        {/* <Typography
          fontSize={deviceType === "xs" ? 15 : 20}
          fontWeight="700"
          color="#00B0EF"
          gutterBottom={true}
        >
          OUR MANDATE
        </Typography> */}
        <Typography
          variant={deviceType === "xs" ? "h6" : "h3"}
          fontWeight="700"
          gutterBottom
          lineHeight={deviceType === "xs" ? 1.1 : 1.3}
        >
          {item?.title}
        </Typography>
        <Typography fontSize={16} fontWeight="400" gutterBottom>
          {item?.description}
        </Typography>
        <br />
        <Card elevation={0} sx={{ width: "123%" }}>
          <Box
            borderColor={"grey"}
            display="flex"
            flexDirection={"row"}
            justifyContent="start"
            alignItems={"stretch"}
          >
            {/* <TextField
          placeholder="Healthcare falicities close to me"
          fullWidth={true}
          sx={{
            border: "none",
            backgroundColor: "transparent",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOn />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                {/* <Button
                  
                > *
                <ArrowDropDown
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  onMouseEnter={handleClick}
                />
                {/* </Button> 
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>
                    My account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </InputAdornment>
            ),
            // classes:{notchedOutline:classes.noBorder}
          }}
        /> */}
          </Box>
        </Card>
      </Grid>
      <Grid
        item
        sm={6}
        md={6}
        display={deviceType === "xs" ? "none" : "flex"}
        flexDirection={"column"}
        justifyContent={deviceType === "xs" ? "start" : "center"}
        alignItems="center"
      >
        <div
          style={{
            backgroundImage: "url(" + item?.image + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "98%",
            height: "98%",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default MyCarousel;
