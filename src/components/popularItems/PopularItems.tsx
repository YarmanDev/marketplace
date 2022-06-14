import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { PopularCard } from "./PopularCard";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // backgroundColor: "green",
    width: "98%",

    margin: "0 auto 300px auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(175px, 175px))",
    gap: "42px 54px",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const items = [
  { name: "rocket", title: "Toy Rocket", price: "6.00" },
  { name: "hammer", title: "Hammer", price: "8.00" },
  { name: "camera", title: "Camera", price: "12.00" },
  { name: "iphone13", title: "Iphone 13", price: "20.00" },
  { name: "macbook", title: "Macbook", price: "50.00" },
  { name: "phone", title: "Iphone X", price: "6.00" },
  { name: "watch", title: "Apple Watch", price: "16.00" },
  { name: "book", title: "Book Soft", price: "26.00" },
  { name: "rocket", title: "Toy Rocket", price: "6.00" },
  { name: "hammer", title: "Hammer", price: "8.00" },
  { name: "camera", title: "Camera", price: "12.00" },
  { name: "iphone13", title: "Iphone 13", price: "20.00" },
  { name: "macbook", title: "Macbook", price: "50.00" },
  { name: "phone", title: "Iphone X", price: "6.00" },
  { name: "watch", title: "Apple Watch", price: "16.00" },
  { name: "book", title: "Book Soft", price: "26.00" },
  { name: "rocket", title: "Toy Rocket", price: "6.00" },
  { name: "hammer", title: "Hammer", price: "8.00" },
  { name: "camera", title: "Camera", price: "12.00" },
  { name: "iphone13", title: "Iphone 13", price: "20.00" },
  { name: "macbook", title: "Macbook", price: "50.00" },
  { name: "phone", title: "Iphone X", price: "6.00" },
  { name: "watch", title: "Apple Watch", price: "16.00" },
  { name: "book", title: "Book Soft", price: "26.00" },
  { name: "rocket", title: "Toy Rocket", price: "6.00" },
  { name: "hammer", title: "Hammer", price: "8.00" },
  { name: "camera", title: "Camera", price: "12.00" },
  { name: "iphone13", title: "Iphone 13", price: "20.00" },
  { name: "macbook", title: "Macbook", price: "50.00" },
  { name: "phone", title: "Iphone X", price: "6.00" },
  { name: "watch", title: "Apple Watch", price: "16.00" },
  { name: "book", title: "Book Soft", price: "26.00" },
  //   { name: "sport", title: "#6ECDFB", price: "6.00" },
  //   { name: "furniture", title: "#8AA5B6", price: "6.00" },
  //   { name: "interior", title: "#333333", price: "6.00" },
  //   { name: "jewelry", title: "#A2BBD3", price: "6.00" },
  //   { name: "shoes", title: "#807D86", price: "6.00" },
];

export const PopularItems = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {items.map(({ name, title, price }) => (
        <PopularCard key={1} name={name} title={title} price={price} />
      ))}
    </div>
  );
};
