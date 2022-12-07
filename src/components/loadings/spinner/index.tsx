import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface ISpinner {}

const Spinner: React.FC<ISpinner> = (props) => {
  const {} = props;

  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
