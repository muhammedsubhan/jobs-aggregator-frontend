"use client";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectLocation = () => {
  const [location, setLocation] = React.useState("");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };

  if (!mounted) return null;

  return (
    <Box sx={{ width: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="location-label" shrink>
          Location
        </InputLabel>
        <Select
          labelId="location-label"
          id="location-select"
          value={location}
          label="Location"
          onChange={handleChange}
          displayEmpty
          sx={{
            width: "100%",
            "& .MuiSelect-select": {
              minWidth: "120px",
            },
          }}
        >
          <MenuItem value="">
            <span style={{ opacity: 0.7 }}>Select an option</span>
          </MenuItem>
          <MenuItem value="Lahore" style={{ minWidth: "160px" }}>
            Lahore
          </MenuItem>
          <MenuItem value="Islamabad" style={{ minWidth: "160px" }}>
            Islamabad
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectLocation;
