import React from "react";
import { useTranslation } from "react-i18next";

export function OurServices() {
  const { t } = useTranslation();

  return (
    <>
      <h2 data-aos="fade-up">{t("parts.ourServices.title")}</h2>
      <div className="descrFlex">
        <TheBreakfast />
        <OurAdvantages />
      </div>
    </>
  );
}

function TheBreakfast() {
  const { t } = useTranslation();

  return (
    <div className="descrBlockWrapper">
      <h3 data-aos="fade-up">{t("parts.ourServices.theBreakfast")}</h3>
      <div className="descrBlock">
        <div id="theBreakfastCheckPoint"></div>
        <div id="ourAdvantagesCheckPoint"></div>
        <div data-aos="fade-up" className="iconsInRow">
          <img
            src="https://img.icons8.com/ios-filled/14.4/000000/bread.png"
            alt="Le petit-déjeuner"
          />
          <i className="fa-solid fa-mug-saucer"></i>
        </div>
        <div className="descrBlock-row">
          <img
            data-aos="fade-up"
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/396068329.jpg?k=ae782e789c6fc769492ade33aa62c4b47db6342cf4cb424ff4ce60408eb50580&o=&hp=1"
            alt="Le petit-déjeuner"
            className="descrBlockImg"
          />
          <p data-aos="fade-up" className="mainDescr">
            {t("parts.ourServices.theBreakfastDescr")}
          </p>
        </div>
      </div>
    </div>
  );
}

function OurAdvantages() {
  const { t } = useTranslation();

  return (
    <div className="descrBlockWrapper">
      <h3 data-aos="fade-up">{t("parts.ourServices.ourAdvandages")}</h3>
      <div className="descrBlock">
        <div id="ourAdvantagesCheckPoint"></div>
        <div data-aos="fade-up" className="iconsInRow">
          <i className="fa-solid fa-wifi"></i>
          <i className="fa-solid fa-car"></i>
          <i className="fa-solid fa-motorcycle"></i>
        </div>
        <div className="descrBlock-row">
          <img
            data-aos="fade-up"
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/141304824.jpg?k=41fe2e0ec63b1eeb8b41b15aacc3eecde54effc2bd85a6a1dcce79aa3f51f924&o=&hp=1"
            alt="Nos avantages"
            className="descrBlockImg"
          />
          <p data-aos="fade-up" className="mainDescr">
            {t("parts.ourServices.ourAdvantagesDescr")}
          </p>
        </div>
      </div>
    </div>
  );
}
