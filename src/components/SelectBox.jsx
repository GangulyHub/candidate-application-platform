import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
const SelectBox = ({ label, options, actionSetter }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    const targetVal = event.target.value;
    actionSetter(targetVal);
    setSelectedOption(targetVal);
  };
  return (
    <Box sx={{ minWidth: 120, margin: "12px" }}>
      <FormControl fullWidth>
        <InputLabel id="select-label" style={{ whiteSpace: "nowrap" }}>
          {label}
        </InputLabel>
        <Select
          labelId="select-label"
          style={{ minWidth: `${label.length * 12}px` }}
          id="select"
          value={selectedOption}
          label={label}
          onChange={handleChange}
          autoWidth
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectBox;
