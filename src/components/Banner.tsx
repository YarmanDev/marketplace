import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import BannerIcon from "../images/banner.svg";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: `radial-gradient(${theme.palette.primary.main}, #2A67C3)`,
    width: "100%",
    height: 270,
    borderRadius: 32,

    marginTop: 45,
    position: "relative",
    fontWeight: 900,
    textTransform: "uppercase",
  },
  buy: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black,
    position: "absolute",
    fontWeight: "inherit",
    padding: "3px 30px",
    top: "28%",
    left: "17%",
    transform: "rotate(-8.5deg)",
    zIndex: 1,
  },
  count: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    fontWeight: "inherit",
    padding: "3px 30px",
    top: "50%",
    left: "20%",
    transform: "rotate(-2.5deg)",
    zIndex: 0,
  },
  icon: {
    margin: "-30px 0 0 60%",
  },
}));

export const Banner = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.buy}>
        {t("Buy Now")}
      </Typography>
      <Typography variant="h3" className={classes.count}>
        {t("Count Later")}
      </Typography>
      <BannerIcon className={classes.icon} />
    </div>
  );
};
