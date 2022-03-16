/* eslint-disable jsx-a11y/iframe-has-title */
import { Container } from "@mui/material";
import React from "react";

const Map = () => {
  const embedUrlLeft = "https://maps.google.com/maps?q=";
  const embedUrlRight = "&t=&z=13&ie=UTF8&iwloc=&output=embed";

  return (
    <Container>
      {/* Google map here */}
      <div>
        <iframe
          width="100%"
          height="500"
          id="gmap_canvas"
          frameBorder="0"
          scrolling="no"
          src={
            embedUrlLeft + "No 2 Olu-Obasanjo Road, Waterlines" + embedUrlRight
          }
        />
      </div>
    </Container>
  );
};

export default Map;
