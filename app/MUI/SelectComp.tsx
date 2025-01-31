"use client";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectComp = () => {
  const [workplaceType, setWorkplaceType] = React.useState("");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setWorkplaceType(event.target.value as string);
    console.log(event.target.value);
  };

  if (!mounted) return null;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="workplace-type-label" shrink>
          Workplace Type
        </InputLabel>
        <Select
          labelId="workplace-type-label"
          id="workplace-type-select"
          value={workplaceType}
          label="Workplace Type"
          onChange={handleChange}
          displayEmpty
          sx={{
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          <MenuItem value="">
            <span style={{ opacity: 0.7 }}>Select an option</span>
          </MenuItem>
          <MenuItem value="On-Site">On-Site</MenuItem>
          <MenuItem value="Remote">Remote</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectComp;
