// pages/index.tsx

import * as React from "react";
import type { NextPage } from "next";
import { PreferencesControl } from "../src/components/PreferencesControl";

const Home: NextPage = () => {
  return (
    <div>
      <PreferencesControl />
    </div>
  );
};

export default Home;
