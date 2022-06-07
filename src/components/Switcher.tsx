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
    "&.dark": {
      backgroundColor: "#393C49",
      padding: "0",
      borderRadius: 10,
      "& label div:nth-child(2)": {
        color: "#393C49",
      },
    },
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
    "&.dark": {
      padding: "5px 0",
      borderRadius: 10,
      color: theme.palette.common.white,
    },
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
    "&.dark": {
      minHeight: "100%",
      width: `50%`,
      borderRadius: 10,
      backgroundColor: theme.palette.common.white,
    },
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
        "&.dark": {
          color: "#393C49",
        },
      },
      "& div:nth-child(2)": {
        color: theme.palette.primary.main,
        "&.dark": {
          color: theme.palette.common.white,
        },
      },
    },
  },
}));

interface IProps {
  options: string[];
  getInputValue: (value?: boolean) => void;
  additionalStyles?: string;
}

export const Switcher = (props: IProps) => {
  const { options, getInputValue, additionalStyles } = props;
  const classes = useStyles();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div
      className={cn(classes.switcherWrapper, "switcher", additionalStyles)}
      style={{}}
    >
      <input
        type="checkbox"
        id="switch"
        className={cn(classes.input, additionalStyles)}
        onClick={() => getInputValue(ref.current?.checked)}
        ref={ref}
      />
      <label htmlFor="switch" style={{ display: "flex" }}>
        <div className={cn(classes.toggle, additionalStyles)}></div>
        {options.map((option) => (
          <div key={option} className={cn(classes.option, additionalStyles)}>
            {option}
          </div>
        ))}
      </label>
    </div>
  );
};
