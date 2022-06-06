import React from "react";
import { alpha, Input, TextField, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    borderRadius: 8,
    color: theme.palette.primary.main,
    marginBottom: 14,

    "& label": {
      fontWeight: 500,
      color: theme.palette.primary.main,
    },
    "& label.Mui-focused": {
      marginTop: -6,
      fontWeight: 500,
    },
    "& fieldset": {
      border: "none",
    },
    "& input": {
      color: theme.palette.primary.main,
    },
  },
}));

export const CustomInput = ({ label }: { label: string }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      label={label}
      variant="outlined"
      fullWidth
      inputProps={{
        style: {
          padding: "20px 30px",
          border: "none",
          fontWeight: 500,
        },
      }}
    ></TextField>
  );
};
