import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import image from "../../../../assets/images/lga_image.png";
import text from "./stub_text";
import "../lga.css";

const AboutLGA = () => {
  return (
    <Box paddingY={6}>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6} sm={6} xs={12}>
            <img src={image} alt="" width="100%" />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box padding={1} width="100%">
              <Typography variant="h4" gutterBottom={true} fontWeight="700">
                Heading or Topic About the LGA
              </Typography>
              <Typography lineHeight={1.5} gutterBottom>
                {text.length > 1200 ? text.substring(0, 1199) : text}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box className="col-newspaper" paddingY={8}>
          <Typography lineHeight={1.5} gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dui
            sed etiam eu. Vel mattis fringilla eu sit praesent sed. Vulputate
            pretium vulputate ultrices lectus. Duis eget dui sed purus faucibus.
            Integer enim venenatis quis pulvinar leo integer semper volutpat
            maecenas. In ac hac pulvinar turpis vivamus parturient fermentum
            nisi libero. Ac et convallis quisque sit. Egestas in fermentum
            ornare sit sit tristique est tellus. Egestas sit justo, eget
            eleifend faucibus vel. Aliquet pellentesque risus eu sit mi senectus
            fermentum, ornare ut. Interdum tortor id nisl, orci nisl aliquam. Id
            mi tellus diam molestie iaculis. Blandit at maecenas adipiscing sed
            pretium nisl aenean proin adipiscing. Sit aliquam, aliquam aenean
            dui sit viverra amet vehicula. Posuere at cursus ullamcorper in
            ullamcorper in sed. Eleifend velit ipsum amet posuere massa sed nunc
            faucibus. Habitant mauris lacus sed et, vel, et. Sit nunc, nisi
            risus tristique varius tortor duis eget. Nunc, sit tellus justo
            viverra imperdiet at parturient. Molestie scelerisque elit, bibendum
            sollicitudin dignissim ut. Lectus lobortis nec ultrices lorem.
            Vivamus tristique elit cras urna proin enim augue aliquam
            suspendisse. Amet, at duis elementum congue molestie et interdum
            amet. Viverra mattis vitae, erat pulvinar lorem iaculis. Interdum
            lorem nunc, nunc aliquam ut. Commodo dui curabitur est ac tortor,
            sed sit mauris. Nisl ornare non tellus volutpat. Diam facilisis
            adipiscing euismod faucibus convallis eu ornare nisi quis.
          </Typography>
          <Typography lineHeight={1.5} gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dui
            sed etiam eu. Vel mattis fringilla eu sit praesent sed. Vulputate
            pretium vulputate ultrices lectus. Duis eget dui sed purus faucibus.
            Integer enim venenatis quis pulvinar leo integer semper volutpat
            maecenas. In ac hac pulvinar turpis vivamus parturient fermentum
            nisi libero. Ac et convallis quisque sit. Egestas in fermentum
            ornare sit sit tristique est tellus. Egestas sit justo, eget
            eleifend faucibus vel. Aliquet pellentesque risus eu sit mi senectus
            fermentum, ornare ut. Interdum tortor id nisl, orci nisl aliquam. Id
            mi tellus diam molestie iaculis. Blandit at maecenas adipiscing sed
            pretium nisl aenean proin adipiscing. Sit aliquam, aliquam aenean
            dui sit viverra amet vehicula. Posuere at cursus ullamcorper in
            ullamcorper in sed. Eleifend velit ipsum amet posuere massa sed nunc
            faucibus. Habitant mauris lacus sed et, vel, et. Sit nunc, nisi
            risus tristique varius tortor duis eget. Nunc, sit tellus justo
            viverra imperdiet at parturient. Molestie scelerisque elit, bibendum
            sollicitudin dignissim ut. Lectus lobortis nec ultrices lorem.
            Vivamus tristique elit cras urna proin enim augue aliquam
            suspendisse. Amet, at duis elementum congue molestie et interdum
            amet. Viverra mattis vitae, erat pulvinar lorem iaculis. Interdum
            lorem nunc, nunc aliquam ut. Commodo dui curabitur est ac tortor,
            sed sit mauris. Nisl ornare non tellus volutpat. Diam facilisis
            adipiscing euismod faucibus convallis eu ornare nisi quis.
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={"row"}
          justifyContent="center"
          alignItems={"center"}
          padding={4}
        >
          <Button
            variant="contained"
            sx={{
              color: "white",
              paddingY: 2,
              paddingX: 4,
            }}
          >
            View Facilities
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutLGA;
