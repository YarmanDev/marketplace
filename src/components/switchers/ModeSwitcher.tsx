import { Switch } from "@mui/material";
import React from "react";

interface IProps {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ModeSwitcher = (props: IProps) => {
  const { toggleTheme } = props;

  return <Switch onClick={toggleTheme} />;
};
