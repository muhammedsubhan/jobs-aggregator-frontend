"use client";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Job } from "../components/Card";
import { useAppDispatch } from "../lib/hooks";
import { filterJobs } from "../lib/store/features/JobsSlice";

interface SelectLocationProps {
  jobs: Job[];
  onFilterChange: (value: string | undefined) => void;
}

const SelectLocation: React.FC<SelectLocationProps> = ({
  jobs,
  onFilterChange,
}) => {
  const [location, setLocation] = React.useState("");
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    const selectedLocation = event.target.value as string;
    setLocation(selectedLocation);
    dispatch(filterJobs({ location: selectedLocation }));
    onFilterChange(selectedLocation);
  };

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
              height: "10px",
              padding: "12px 14px",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "none",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "none",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "none",
              },
            },
          }}
        >
          <MenuItem value="">
            <span style={{ opacity: 0.7 }}>Select an option</span>
          </MenuItem>
          {[
            ...new Set(jobs.map((job) => job.location.split(",")[0].trim())),
          ].map((location) => (
            <MenuItem
              key={location}
              value={location}
              style={{ minWidth: "160px" }}
            >
              {location}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectLocation;
