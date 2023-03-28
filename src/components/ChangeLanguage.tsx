import React, { useState } from "react";
import { i18n } from "../i18n";

export type Iso = "fr" | "en" | "es";
type LanguageBtn = {
  language: Iso;
  flag: JSX.Element;
}[];

export const languageBtn: LanguageBtn = [
  {
    language: "fr",
    flag: <img src="https://flagcdn.com/fr.svg" width={50} height={30} alt="Français" />,
  },
  {
    language: "en",
    flag: <img src="https://flagcdn.com/gb.svg" width={50} height={30} alt="Anglais" />,
  },
  {
    language: "es",
    flag: <img src="https://flagcdn.com/es.svg" width={50} height={30} alt="Espagnol" />,
  },
];

export function ChangeLanguage() {
  const [openLanguageList, setOpenLanguageList] = useState(false);

  function onChange(language: string) {
    console.log("language", language);
    i18n.changeLanguage(language);
    setOpenLanguageList(!openLanguageList);
  }

  return (
    <div className="changeLanguageWrapper">
      <button className="changeLanguageBtn" onClick={() => setOpenLanguageList(!openLanguageList)}>
        <img
          src={`https://flagcdn.com/${i18n.language === "en" ? "gb" : i18n.language}.svg`}
          width={50}
          height={30}
          alt="Français"
        />
      </button>

      <div className={`openLanguage ${openLanguageList ? "active" : "inactive"}`}>
        {languageBtn.map((btn) => {
          return (
            <button key={btn.language} onClick={() => onChange(btn.language)}>
              {btn.flag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
