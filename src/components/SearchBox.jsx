import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
const SearchBox = ({ placeholder, actionSetter }) => {
  const handleChange = (event) => {
    const targetVal = event.target.value;
    actionSetter(targetVal);
  };
  return (
    <div>
      <TextField
        label={placeholder}
        variant="outlined"
        placeholder={placeholder}
        onChange={handleChange}
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
    </div>
  );
};

export default SearchBox;
