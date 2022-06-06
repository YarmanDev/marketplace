import { alpha, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import cn from "classnames";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  switcherWrapper: {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 18px",
    borderRadius: 33,
    "& > div": {
      padding: "10px 0",
      minWidth: "50%",
      borderRadius: 33,
      textAlign: "center",
      fontWeight: 600,
      color: theme.palette.primary.main,

      "&.lol": {
        backgroundColor: theme.palette.primary.main,
        color: "white",
      },
    },
  },
}));

export const Switcher = () => {
  const classes = useStyles();
  return (
    <div className={cn(classes.switcherWrapper, "switcher")}>
      <div className="lol">Login</div>
      <div>Register</div>
    </div>
  );
};
