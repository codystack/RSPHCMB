import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

export default function ImageMasonry(props) {
  let { list, factor, width } = props;
  return (
    <Box
    // sx={{ width: 500, minHeight: 829 }}
    >
      <Masonry columns={2} spacing={1}>
        {list.map((item, index) => (
          <div key={index}>
            <img
              src={`${item.image}?auto=format`}
              srcSet={`${item.image}?auto=format&dpr=2 ${factor}`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: width,
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
