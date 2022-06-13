import * as React from "react";
import type { NextPage } from "next";
import { PreferencesControl } from "../src/components/PreferencesControl";
import Link from "../src/components/Link";
import { useTranslation } from "react-i18next";
import { Switch } from "@material-ui/core";
import { Header } from "../src/components/header/Header";

type HomeProps = {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
};

const Home: NextPage = (props: HomeProps) => {
  const { toggleTheme } = props;
  const { t } = useTranslation();

  return (
    <div>
      <PreferencesControl toggleTheme={toggleTheme} />
      <Header />
      <Link href={"/login"}>{t("key")}</Link>
    </div>
  );
};

export default Home;
