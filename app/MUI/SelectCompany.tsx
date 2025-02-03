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
  onFilterChange: (value: string | undefined) => void;
}

const SelectCompany: React.FC<SelectCompanyProps> = ({
  jobs,
  onFilterChange,
}) => {
  const [company, setCompany] = React.useState("");
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    const selectedCompany = event.target.value as string;
    setCompany(selectedCompany);
    dispatch(filterJobs({ company: selectedCompany })); 
    onFilterChange(selectedCompany); 
  };

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
          {[...new Set(jobs.map((job) => job.postedBy))].map((company) => (
            <MenuItem
              key={company}
              value={company}
              style={{ minWidth: "160px" }}
            >
              {company}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectCompany;
