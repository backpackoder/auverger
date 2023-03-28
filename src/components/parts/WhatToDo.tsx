import React from "react";
import { useTranslation } from "react-i18next";

export function WhatToDo() {
  const { t } = useTranslation();

  return (
    <>
      <h2 data-aos="fade-up">{t("parts.whatToDo.title")}</h2>
      <div className="descrFlex">
        <TheActivities />
        <TheSurroundings />
      </div>
    </>
  );
}

function TheActivities() {
  const { t } = useTranslation();

  return (
    <div className="descrBlockWrapper">
      <h3 data-aos="fade-up">{t("parts.whatToDo.theActivities")}</h3>
      <div className="descrBlock">
        <div id="theActivitiesCheckPoint"></div>
        <div data-aos="fade-up" className="iconsInRow">
          <i className="fa-solid fa-bicycle"></i>
          <i className="fa-solid fa-person-hiking"></i>
        </div>
        <div className="descrBlock-row">
          <img
            data-aos="fade-up"
            src="https://cdn.pixabay.com/photo/2016/11/19/12/58/adventure-1839147__340.jpg"
            alt="Les activités"
            className="descrBlockImg"
          />
          <p data-aos="fade-up" className="mainDescr">
            {t("parts.whatToDo.theActivitiesDescr")}
          </p>
        </div>
      </div>
    </div>
  );
}

function TheSurroundings() {
  const { t } = useTranslation();

  return (
    <div className="descrBlockWrapper">
      <h3 data-aos="fade-up">{t("parts.whatToDo.theSurroundings")}</h3>
      <div className="descrBlock">
        <div id="theSurroundingsCheckPoint"></div>
        <div data-aos="fade-up" className="iconsInRow">
          <i className="fa-solid fa-mountain-sun"></i>
          <i className="fa-solid fa-sun"></i>
        </div>
        <div className="descrBlock-row">
          <img
            data-aos="fade-up"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Sospel-la-Bevera-2.jpg"
            alt="Les alentours"
            className="descrBlockImg"
          />
          <p data-aos="fade-up" className="mainDescr">
            {t("parts.whatToDo.theSurroundingsDescr")}
          </p>
        </div>
      </div>
    </div>
  );
}
