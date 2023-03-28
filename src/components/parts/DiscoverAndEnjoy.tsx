import React from "react";
import { useTranslation } from "react-i18next";

export function DiscoverAndEnjoy() {
  return (
    <div data-aos="fade-up" className="descrFlex">
      <Discover />
      <Enjoy />
    </div>
  );
}

function Discover() {
  const { t } = useTranslation();

  return (
    <div className="descrBlockWrapper">
      <h2 data-aos="fade-up">{t("parts.discoverAndEnjoy.titleDiscover")}</h2>
      <h3 data-aos="fade-up">{t("parts.discoverAndEnjoy.theEstablishment")}</h3>
      <div className="descrBlock">
        <div id="theEstablishmentCheckPoint"></div>
        <div data-aos="fade-up" className="iconsInRow">
          <i className="fa-solid fa-house-chimney"></i>
          <i className="fa-solid fa-heart"></i>
        </div>
        <div className="descrBlock-row">
          <img
            data-aos="fade-up"
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/401644009.jpg?k=8e3e32113b9ebe407adcfb13fec79044b6495104202de0a26e7968aa99c4020b&o=&hp=1"
            alt="L'établissement"
            className="descrBlockImg"
          />
          <p data-aos="fade-up" className="mainDescr">
            {t("parts.discoverAndEnjoy.theEstablishmentDescr")}
          </p>
        </div>
      </div>
    </div>
  );
}

function Enjoy() {
  const { t } = useTranslation();

  return (
    <div className="descrBlockWrapper">
      <h2 data-aos="fade-up">{t("parts.discoverAndEnjoy.titleEnjoy")}</h2>
      <h3 data-aos="fade-up">{t("parts.discoverAndEnjoy.theSwimmingpool")}</h3>
      <div className="descrBlock">
        <div id="swimmingPoolCheckPoint"></div>
        <div data-aos="fade-up" className="iconsInRow">
          <i className="fa-solid fa-water-ladder"></i>
          <i className="fa-solid fa-umbrella-beach"></i>
        </div>
        <div className="descrBlock-row">
          <img
            data-aos="fade-up"
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/101637024.jpg?k=49da771f41ef74d150d9023c0b30423fa163683afa609ea6b574cf8bd367432f&o=&hp=1"
            alt="La piscine"
            className="descrBlockImg"
          />
          <p data-aos="fade-up" className="mainDescr">
            {t("parts.discoverAndEnjoy.theSwimmingpoolDescr")}
          </p>
        </div>
      </div>
    </div>
  );
}
