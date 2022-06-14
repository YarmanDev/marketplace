import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import FavoriteIcon from "../../../public/favorite.svg";
import AddIcon from "../../../public/add.svg";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: `radial-gradient(#C1CDD8, rgba(202,210,218,0.77))`,
    // background: `red`,
    width: "100%",
    minHeight: 185,
    borderRadius: 20,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  favorite: {
    position: "absolute",
    top: 16,
    right: 16,
    cursor: "pointer",
  },
  description: {
    margin: "10px 0 0 -30%",
    maxWidth: "70%",
  },
  name: {
    fontSize: 15,
    fontWeight: 600,
    textTransform: "capitalize",
    wordBreak: "break-all",
  },
  price: {
    fontSize: 16,
    fontWeight: 700,
  },
  add: {
    position: "absolute",
    bottom: 16,
    right: 16,
    cursor: "pointer",
  },
}));

type IProps = Record<"name" | "title" | "price", string>;

export const PopularCard = (props: IProps) => {
  const { name, title, price } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FavoriteIcon className={classes.favorite} />
      <Image src={`/items/${name}.png`} alt="lol" width={87} height={87} />
      <div className={classes.description}>
        <Typography variant="body1" className={classes.name}>
          {title}
        </Typography>
        <Typography variant="body1" className={classes.price}>
          {price}
        </Typography>
        <AddIcon className={classes.add} />
      </div>
    </div>
  );
};
