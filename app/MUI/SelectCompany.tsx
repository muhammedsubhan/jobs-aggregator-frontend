"use client";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Job } from "@/app/components/Card";
import { useAppDispatch } from "../lib/hooks";
import { filterJobs } from "../lib/store/features/JobsSlice";

interface SelectCompanyProps {
  jobs: Job[];
}

const SelectCompany: React.FC<SelectCompanyProps> = () => {
  const [company, setCompany] = React.useState("");
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setCompany(event.target.value as string);
  };

  React.useEffect(() => {
    dispatch(
      filterJobs({
        company: company,
        workType: "",
        workplaceType: "",
        location: "",
      })
    );
  }, [company, dispatch]);

  return (
    <Box sx={{ width: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="company-label" shrink>
          Company
        </InputLabel>
        <Select
          labelId="company-label"
          id="company-select"
          value={company}
          label="Company"
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
          <MenuItem value="Devsinc" style={{ minWidth: "160px" }}>
            Devsinc Company
          </MenuItem>
          <MenuItem value="Netsol" style={{ minWidth: "160px" }}>
            NetSol Company
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectCompany;
