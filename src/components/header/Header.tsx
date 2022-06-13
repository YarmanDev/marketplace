import { makeStyles } from "@mui/styles";
import React from "react";
import Logo from "../Logo";

const useStyles = makeStyles(
  {
    root: {
      backgroundColor: "green",
    },
  },
  { name: "Hello" }
);

export const Header = () => {
  return (
    <div>
      <Logo />
    </div>
  );
};
