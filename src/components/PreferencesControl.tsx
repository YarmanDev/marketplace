import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";

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
  const { i18n } = useTranslation();

  const handleLanguageChange = (value?: boolean) => {
    setLanguage(value ? "EN" : "UA");
  };

  useEffect(() => {
    i18n.changeLanguage(language.toLowerCase());
  }, [language, i18n]);
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
