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
}

const SelectComp: React.FC<SelectWorkPlaceProps> = () => {
  const [workplaceType, setWorkplaceType] = React.useState("");
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setWorkplaceType(event.target.value as string);
  };

  React.useEffect(() => {
    dispatch(
      filterJobs({
        company: "",
        workType: "",
        workplaceType: workplaceType,
        location: "",
      })
    );
  }, [workplaceType, dispatch]);

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
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              minWidth: "120px",
            },
            width: "100%",
          }}
        >
          <MenuItem value="">
            <span style={{ opacity: 0.7 }}>Select an option</span>
          </MenuItem>
          <MenuItem value="On-site" style={{ minWidth: "120px" }}>
            On-Site
          </MenuItem>
          <MenuItem value="Remote" style={{ minWidth: "120px" }}>
            Remote
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectComp;
