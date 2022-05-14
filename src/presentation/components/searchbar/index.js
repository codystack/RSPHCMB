import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Searchbar(props) {
  let { setSearchKey, error } = props;

  const handleChange = (e) => {
    let { value } = e?.target;
    setSearchKey(value);
    // if (value?.length > 0) {
    //   setError(false);
    // } else {
    //   setError(true);
    // }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Autocomplete
        id="grouped-demo"
        fullWidth
        sx={{ border: "none" }}
        ChipProps={{
          color: "primary",
          autoCapitalize: true,
        }}
        disablePortal
        options={lgas}
        onChange={(event, searchKey) => {
          setSearchKey(searchKey?.label);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={
              !error
                ? "Health facilities close to me"
                : "This field is required."
            }
            fullWidth={true}
            onChange={handleChange}
            error={error}
            // onMouseOver={handleChange}
          />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const lgas = [
  { label: "Abua Odual" },
  { label: "Ahoada East" },
  { label: "Ahoada West" },
  { label: "Akuku Toru" },
  { label: "Andoni" },
  { label: "Asari Toru" },
  { label: "Bonny" },
  { label: "Degema" },
  { label: "Eleme" },
  { label: "Emohua" },
  { label: "Etche" },
  { label: "Gokana" },
  { label: "Ikwerre" },
  { label: "Khana" },
  { label: "Obio Akpor" },
  { label: "ONELGA" },
  { label: "Ogu Bolo" },
  { label: "Okrika" },
  { label: "Omuma" },
  { label: "Opobo Nkoro" },
  { label: "Oyigbo" },
  { label: "Port Harcourt" },
  { label: "Tai" },
];
