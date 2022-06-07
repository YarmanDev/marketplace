import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Switcher } from "./Switcher";

const useStyles = makeStyles((theme: Theme) => ({
  control: {
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 50,
    padding: "15px 18px",
    "& > div": {
      flex: "0 1 12%",
    },
  },
}));

export const PreferencesControl = () => {
  const classes = useStyles();
  const [language, setLanguage] = useState("UA");
  // eslint-disable-next-line no-console
  console.log(language);

  const handleLanguageChange = (value?: boolean) => {
    setLanguage(value ? "EN" : "UA");
  };

  return (
    <div className={classes.control}>
      <Switcher
        options={["UA", "EN"]}
        getInputValue={handleLanguageChange}
        additionalStyles="dark"
      />
      {/* <Switcher options={["UA", "EN"]} /> */}
    </div>
  );
};
