import * as React from "react";
import type { NextPage } from "next";
import { PreferencesControl } from "../src/components/PreferencesControl";
import Link from "../src/components/Link";
import { useTranslation } from "react-i18next";
import { Header } from "../src/components/header/Header";
import { Banner } from "../src/components/Banner";
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Categories } from "../src/components/Categories";

type HomeProps = {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "0 60px",
  },
  title: {
    fontSize: 45,
    fontWeight: 700,
    margin: "34px 0 42px -20px",
  },
}));

const Home: NextPage = (props: HomeProps) => {
  const { toggleTheme } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div>
      <PreferencesControl toggleTheme={toggleTheme} />
      <div className={classes.root}>
        <Header />
        <Banner />
        <Typography variant="h2" className={classes.title}>
          {t("Main Categories")}
        </Typography>
        <Categories />
        {/* <Link href={"/login"}>{t("key")}</Link> */}
      </div>
    </div>
  );
};

export default Home;
