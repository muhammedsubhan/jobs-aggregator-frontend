"use client";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch } from "../lib/hooks";
import { Job } from "../components/Card";
import { filterJobs } from "../lib/store/features/JobsSlice";

interface SelectWorkPlaceProps {
  jobs: Job[];
  onFilterChange: (value: string | undefined) => void;
}

const SelectComp: React.FC<SelectWorkPlaceProps> = ({
  jobs,
  onFilterChange,
}) => {
  const [workplaceType, setWorkplaceType] = React.useState("");
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    const selectedWorkplaceType = event.target.value as string;
    setWorkplaceType(selectedWorkplaceType ?? "");
    dispatch(filterJobs({ workplaceType: selectedWorkplaceType }));
    onFilterChange(selectedWorkplaceType);
  };

  const workplaceOptions = [
    ...new Set(
      jobs.map((job) => job.jobType).filter((type): type is string => !!type)
    ),
  ];

  return (
    <Box sx={{ width: 200 }}>
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
          {workplaceOptions.map((type, index) => (
            <MenuItem key={index} value={type} style={{ minWidth: "120px" }}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectComp;
