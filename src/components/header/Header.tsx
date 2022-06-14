import { Button, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import CatalogIcon from "../CatalogIcon";
import Logo from "../Logo";
import { HeaderIcons } from "./HeaderIcons";
import { HeaderInput } from "./HeaderInput";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    // backgroundColor: "rgba(106, 134, 235, 0.2)",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #E9E9E9",
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    textTransform: "capitalize",
    fontWeight: "600",
    borderRadius: 13,
    boxShadow: "none",
    padding: "10px 36px",
    margin: "0 50px",
  },
}));

export const Header = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Logo style={{ transform: "scale(0.8)" }} />
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<CatalogIcon style={{ transform: "scale(0.8)" }} />}
      >
        {t("Catalog")}
      </Button>
      <HeaderInput />
      <HeaderIcons />
    </div>
  );
};
