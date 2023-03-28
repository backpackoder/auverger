import React from "react";
import { useTranslation } from "react-i18next";

export function OurComments() {
  const { t } = useTranslation();

  return (
    <>
      <h2 data-aos="fade-up">{t("parts.OurComments.title")}</h2>
      <div data-aos="fade-up" id="guestReviews">
        <div id="guestReviewsCheckPoint"></div>
        <h3 data-aos="fade-up" id="guestReviewsTitle">
          {t("parts.OurComments.subtitle")}
        </h3>
        <div data-aos="fade-up" id="guestReviewsContainer">
          <div className="elfsight-app-89db7d25-0f5f-4e05-9386-ff2de6f1cbe8"></div>
        </div>
      </div>
    </>
  );
}
