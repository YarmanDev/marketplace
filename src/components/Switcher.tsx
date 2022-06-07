import { alpha, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import cn from "classnames";
import React, { useRef } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  switcherWrapper: {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    alignItems: "center",
    padding: "8px 18px",
    borderRadius: 33,
    position: "relative",
    "& label div:nth-child(2)": {
      color: theme.palette.common.white,
    },
  },
  option: {
    padding: "10px 0",
    minWidth: "20%",
    borderRadius: 33,
    textAlign: "center",
    fontWeight: 600,
    color: theme.palette.primary.main,
    flex: "1 1 auto",
    zIndex: 1,
    cursor: "pointer",
  },
  toggle: {
    position: "absolute",
    minHeight: "75%",
    width: `calc(50% - 20px)`,
    borderRadius: 33,
    textAlign: "center",
    zIndex: 0,
    backgroundColor: theme.palette.primary.main,
    transition: "transform .3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  },
  input: {
    position: "absolute",
    opacity: 0,
    visibility: "hidden",
    pointerEvents: "none",
    "&:checked + label ": {
      "& $toggle": {
        transform: "translateX(100%)",
      },
      "& div:nth-child(3)": {
        color: theme.palette.common.white,
      },
      "& div:nth-child(2)": {
        color: theme.palette.primary.main,
      },
    },
  },
}));

interface IProps {
  options: string[];
  setFormType: (type: "login" | "register") => void;
}

export const Switcher = (props: IProps) => {
  const { options, setFormType } = props;
  const classes = useStyles();
  const ref = useRef<HTMLInputElement>(null);
  const handleTypeChange = () =>
    setFormType(ref.current?.checked ? "register" : "login");

  return (
    <div className={cn(classes.switcherWrapper, "switcher")}>
      <input
        type="checkbox"
        id="switch"
        className={classes.input}
        onClick={handleTypeChange}
        ref={ref}
      />
      <label htmlFor="switch" style={{ display: "flex" }}>
        <div className={classes.toggle}></div>
        {options.map((option) => (
          <div key={option} className={classes.option}>
            {option}
          </div>
        ))}
      </label>
    </div>
  );
};
