import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // backgroundColor: "#C1CDD8",
    maxWidth: 1040,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 30,
    padding: "0 0 0 70px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",

    "&:hover": {
      "& > div": {
        backgroundColor: "transparent !important",
      },
    },
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    transition: "background-color 0.25s ease",
    alignSelf: "center",
    justifySelf: "center",
  },
  name: {
    marginLeft: 16,
    textTransform: "capitalize",
    fontSize: 20,
    fontWeight: 700,
  },
}));
const allCategories = [
  { name: "car", color: "#2275AA" },
  { name: "phone", color: "#A2BBD3" },
  { name: "laptop", color: "#74B8E5" },
  { name: "book", color: "#56ACE0" },
  { name: "watch", color: "#FFDA44" },
  { name: "beauty", color: "#31D1BC" },
  { name: "toys", color: "#8F5DAF" },
  { name: "sport", color: "#6ECDFB" },
  { name: "furniture", color: "#8AA5B6" },
  { name: "interior", color: "#333333" },
  { name: "jewelry", color: "#A2BBD3" },
  { name: "shoes", color: "#807D86" },
];

export const Categories = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      {allCategories.map(({ name, color }) => {
        return (
          <div key={name} className={classes.item}>
            <div
              className={classes.circle}
              style={{ backgroundColor: color, border: `2.5px solid ${color}` }}
            >
              <Image src={`/${name}.svg`} alt={name} width={40} height={40} />
            </div>
            <Typography variant="body2" className={classes.name}>
              {t(name)}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};
