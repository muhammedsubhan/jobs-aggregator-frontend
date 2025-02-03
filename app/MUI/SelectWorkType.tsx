"use client";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { filterJobs } from "../lib/store/features/JobsSlice";
import { useAppDispatch } from "../lib/hooks";
import { Job } from "../components/Card";

interface SelectWorkTypeProps {
  jobs: Job[];
  onFilterChange: (value: string | undefined) => void;
}

const SelectWorkType: React.FC<SelectWorkTypeProps> = ({
  jobs,
  onFilterChange,
}) => {
  const [workType, setWorkType] = React.useState("");
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    const selectedWorkType = event.target.value as string;
    setWorkType(selectedWorkType ?? ""); 
    dispatch(filterJobs({ workType: selectedWorkType }));
    onFilterChange(selectedWorkType);
  };

  const workTypeOptions = [
    ...new Set(
      jobs
        .map((job) => job.jobsite) 
        .filter((type): type is string => !!type) 
    ),
  ];

  return (
    <Box sx={{ width: 200 }}>
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
          {workTypeOptions.map((type, index) => (
            <MenuItem key={index} value={type} style={{ minWidth: "120px" }}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectWorkType;
