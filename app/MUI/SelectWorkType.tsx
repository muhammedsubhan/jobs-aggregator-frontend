"use client";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectWorkType = () => {
  const [workType, setWorkType] = React.useState("");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setWorkType(event.target.value as string);
  };

  if (!mounted) return null;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="work-type-label" shrink>
          Work Type
        </InputLabel>
        <Select
          labelId="work-type-label"
          id="work-type-select"
          value={workType}
          label="Work Type"
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <span style={{ opacity: 0.7 }}>Select an option</span>
          </MenuItem>
          <MenuItem value="Full Time">Full Time</MenuItem>
          <MenuItem value="Temporary">Temporary</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectWorkType;
