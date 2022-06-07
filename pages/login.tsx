import { Button, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React, { useState } from "react";
import { Form, FormFields } from "../src/components/Form";
import Logo from "../src/components/Logo";
import { Switcher } from "../src/components/Switcher";
import loginImage from "../src/images/login-image.png";

const useStyles = makeStyles((theme: Theme) => ({
  left: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  right: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  description: {
    marginTop: 84,
    width: "80%",
    "& > h1": {
      marginBottom: 27,
    },
  },
  logo: {
    position: "absolute",
    top: 15,
    left: 20,
  },
  formWrapper: {
    width: "60%",

    "& > .switcher": {
      marginBottom: "90px",
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const [formType, setFormType] = useState<"login" | "register">("login");

  const handleFormTypeChange = (value?: boolean) => {
    setFormType(value ? "register" : "login");
  };

  return (
    <Grid container spacing={0} sx={{ height: "100vh" }}>
      <Logo className={classes.logo} />
      <Grid item xs={5} className={classes.left}>
        <div className={classes.formWrapper}>
          <Switcher
            options={["Login", "Register"]}
            getInputValue={handleFormTypeChange}
          />
          <Form fields={FormFields[formType]} />
        </div>
      </Grid>
      <Grid item xs={7} className={classes.right}>
        <Image src={loginImage} alt="login image" />
        <div className={classes.description}>
          <Typography variant="h1" sx={{ fontSize: 40, fontWeight: 700 }}>
            <span style={{ textTransform: "capitalize" }}> {formType}</span> to
            market
          </Typography>
          <Typography variant="h3" sx={{ fontSize: 20 }}>
            Enjoy the beauty and simplicity
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
