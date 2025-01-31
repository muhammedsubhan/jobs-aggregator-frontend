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
    <Box sx={{ width: 200 }}>
      {" "}
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
          <MenuItem value="Full Time" style={{ minWidth: "120px" }}>
            Full Time
          </MenuItem>
          <MenuItem value="Temporary" style={{ minWidth: "120px" }}>
            Temporary
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectWorkType;
