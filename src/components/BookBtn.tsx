import React from "react";
import { useTranslation } from "react-i18next";

export function BookBtn() {
  const { t } = useTranslation();

  return (
    <>
      <a
        href="https://www.booking.com/hotel/fr/au-verger-b-amp-b.fr.html"
        target="_blank"
        rel="noreferrer"
        id="bookBtnFixed"
      >
        {t("bookBtn")}
      </a>
    </>
  );
}
