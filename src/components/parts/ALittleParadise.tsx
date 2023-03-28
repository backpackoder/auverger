import React from "react";
import { Trans, useTranslation } from "react-i18next";

export function ALittleParadise() {
  const { t } = useTranslation();

  return (
    <>
      <h2 data-aos="fade-up">{t("parts.aLittleParadise.title")}</h2>
      <div className="descrFlex">
        <APeacefulPlace />
        <TheRiver />
        <TheGarden />
        <TheBedroom />
      </div>
    </>
  );
}

function APeacefulPlace() {
  const { t } = useTranslation();

  return (
    <div className="descrBlockWrapper">
      <h3 data-aos="fade-up">{t("parts.aLittleParadise.aPeacefulPlace")}</h3>
      <div className="descrBlock">
        <div id="aPeacefulPlaceCheckPoint"></div>
        <div data-aos="fade-up" className="iconsInRow">
          <i className="fa-solid fa-tree"></i>
          <img src="https://img.icons8.com/ios-filled/14.4/000000/hammock.png" alt="Le calme" />
        </div>

        <div className="descrBlock-row">
          <img
            data-aos="fade-up"
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/396084582.jpg?k=cf3e7c48bbe00cbee31f671c76c24e29c5ef33abff8be4b0c9b0a256a8c9ffc3&o=&hp=1"
            alt="Le calme"
            className="descrBlockImg"
          />
          <p data-aos="fade-up" className="mainDescr">
            {t("parts.aLittleParadise.aPeacefulPlaceDescr")}
          </p>
        </div>
      </div>
    </div>
  );
}

function TheRiver() {
  const { t } = useTranslation();

  return (
    <div className="descrBlockWrapper">
      <h3 data-aos="fade-up">{t("parts.aLittleParadise.theRiver")}</h3>
      <div className="descrBlock">
        <div id="theRiverCheckPoint"></div>
        <div data-aos="fade-up" className="iconsInRow">
          <i className="fa-solid fa-water"></i>
          <img src="https://img.icons8.com/ios-filled/14.4/000000/duck.png" alt="La faune" />
        </div>
        <div className="descrBlock-row">
          <img
            data-aos="fade-up"
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/81054104.jpg?k=685a7ec28e9829024f194aa1756853cfe97f0ed38cb75bd1ed5a82eca972058a&o=&hp=1"
            alt="La rivière"
            className="descrBlockImg"
          />
          <p data-aos="fade-up" className="mainDescr">
            {t("parts.aLittleParadise.theRiverDescr")}
          </p>
        </div>
      </div>
    </div>
  );
}

function TheGarden() {
  const { t } = useTranslation();

  return (
    <div className="descrBlockWrapper">
      <h3 data-aos="fade-up">{t("parts.aLittleParadise.theGarden")}</h3>
      <div className="descrBlock">
        <div id="theGardenCheckPoint"></div>
        <div data-aos="fade-up" className="iconsInRow">
          <img
            src="https://img.icons8.com/ios-filled/14.4/000000/potted-plant.png"
            alt="Le potager"
          />
          <img src="https://img.icons8.com/ios-filled/14.4/000000/cauliflower.png" alt="La flore" />
        </div>
        <div className="descrBlock-row">
          <img
            data-aos="fade-up"
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/81055037.jpg?k=72068fd13d18e81c85dad74e050ab3a3c8791d8b2b4c96b48830c478cef32ef1&o=&hp=1"
            alt="Le jardin"
            className="descrBlockImg"
          />
          <p data-aos="fade-up" className="mainDescr">
            <Trans
              components={{
                anchor: (
                  <a href="#yourHostsCheckPoint" id="robertLink">
                    Robert
                  </a>
                ),
              }}
            >
              parts.aLittleParadise.theGardenDescr
            </Trans>
          </p>
        </div>
      </div>
    </div>
  );
}

function TheBedroom() {
  const { t } = useTranslation();

  return (
    <div className="descrBlockWrapper">
      <h3 data-aos="fade-up">{t("parts.aLittleParadise.theBedroom")}</h3>
      <div className="descrBlock">
        <div id="theBedroomCheckPoint"></div>
        <div data-aos="fade-up" className="iconsInRow">
          <i className="fa-solid fa-bed"></i>
          <i className="fa-solid fa-tv"></i>
        </div>
        <div className="descrBlock-row">
          <img
            data-aos="fade-up"
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/141304846.jpg?k=b56c684d467a484053cc0aa25ebeac594b7c67ee3adcbcd95adecfec2b020d33&o=&hp=1"
            alt="La chambre à coucher"
            className="descrBlockImg"
          />
          <p data-aos="fade-up" className="mainDescr">
            {t("parts.aLittleParadise.theBedroomDescr")}
          </p>
        </div>
      </div>
    </div>
  );
}
