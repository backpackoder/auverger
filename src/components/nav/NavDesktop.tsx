import React from "react";
import { useTranslation } from "react-i18next";
import { ChangeLanguage } from "../ChangeLanguage";

type NavDesktopProps = {
  SubMenuWhyWithUs: Function;
  openPhotosMenu: Function;
};

export function NavDesktop({ SubMenuWhyWithUs, openPhotosMenu }: NavDesktopProps) {
  const { t } = useTranslation();

  return (
    <nav id="nav__Desktop">
      <ul>
        <li className="scrollingMenu__desktop">
          <a href="/#">➢ {t("navigation.whyUs")}</a>
          <ul className="navMenu">
            <SubMenuWhyWithUs />
          </ul>
        </li>
        <li onClick={() => openPhotosMenu()}>
          <a href="/#" className="goToCheckPoint photosMenuTrigger">
            ➢ {t("navigation.seePictures")}
          </a>
        </li>
        <li>
          <a href="#yourHostsCheckPoint" className="goToCheckPoint">
            ➢ {t("navigation.yourHosts")}
          </a>
        </li>
        <li>
          <a href="#guestReviewsCheckPoint" className="goToCheckPoint">
            ➢ {t("navigation.guestReviews")}
          </a>
        </li>
        <li className="scrollingMenu__desktop">
          <a href="/#">➢ {t("navigation.contactUs")}</a>
          <ul className="navMenu contactMenu">
            <li className="whatsappInfos">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png"
                alt="WhatsApp Icon"
                className="contactLogoWhatsApp"
              />
              <p className="whatsapp-content">{t("navigation.whatsApp")}</p>
            </li>
            <li className="mailInfos">
              <img
                src="https://upload.wikimedia.org/wikipedia/fr/a/a7/Mail_%28Apple%29_logo.png"
                alt="Mail Icon"
                className="contactLogoMail"
              />
              <p className="mail-content">{t("navigation.mail")}</p>
            </li>
          </ul>
        </li>
        <li>
          <a href="/#" className="changeLanguage">
            <ChangeLanguage />
          </a>
        </li>
      </ul>
    </nav>
  );
}
