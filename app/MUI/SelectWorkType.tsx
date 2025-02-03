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
}

const SelectWorkType: React.FC<SelectWorkTypeProps> = () => {
  const [workType, setWorkType] = React.useState("");
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setWorkType(event.target.value as string);
  };

  React.useEffect(() => {
    dispatch(
      filterJobs({
        workType: workType,
        company: "",
        workplaceType: "",
        location: "",
      })
    );
  }, [workType, dispatch]);

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
            },
          }}
        >
          <MenuItem value="">
            <span style={{ opacity: 0.7 }}>Select an option</span>
          </MenuItem>
          <MenuItem value="Full time" style={{ minWidth: "120px" }}>
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