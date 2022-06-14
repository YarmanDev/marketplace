import { Input, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flex: "1 1 auto",
    backgroundColor: theme.palette.primary.main,
    marginRight: 45,
    display: "flex",
    alignItems: "center",
    borderRadius: 12,
    height: "52px",
  },
  input: {
    backgroundColor: theme.palette.common.white,
    flex: "1 1 auto",
    margin: "0 3px",
    borderRadius: 8,
    padding: "7px 10px",
  },
}));

export const HeaderInput = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Input className={classes.input} />
      <SearchIcon
        sx={{ fontSize: "40px", color: "white", cursor: "pointer" }}
      />
    </div>
  );
};
