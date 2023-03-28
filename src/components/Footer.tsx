import React from "react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div id="footer">
        <div id="footer__links">
          <p className="footerTitle">{t("footer.links")}</p>
          <div id="footer__links__a">
            <a href="#theEstablishmentCheckPoint" className="goToCheckPoint">
              ▸ {t("navigation.whyUs")}
            </a>
            <a
              href="https://www.booking.com/hotel/fr/au-verger-b-amp-b.fr.html"
              target="_blank"
              rel="noreferrer"
            >
              ▸ {t("navigation.book")}
            </a>
            <a href="/#" id="footer__links__div--photos" className="photosMenuTrigger">
              ▸ {t("navigation.seePictures")}
            </a>
            <a href="#yourHostsCheckPoint">▸ {t("navigation.yourHosts")}</a>
            <a href="#guestReviewsCheckPoint">▸ {t("navigation.guestReviews")}</a>
            <a href="#mapCheckPoint">▸ {t("navigation.seeOnTheMap")}</a>
          </div>
        </div>
        <div id="footer__contact">
          <p className="footerTitle">{t("navigation.contactUs")}</p>
          <ul>
            <li className="whatsappInfos">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png"
                alt="WhatsApp Icon"
                className="contactLogoWhatsApp"
              />
              <a href="https://api.whatsapp.com/send?phone=0033608054065">
                <strong>{t("navigation.whatsApp")}:</strong>
                <br />
                +33 6 08 05 40 65
              </a>
            </li>
            <li className="mailInfos">
              <img
                src="https://upload.wikimedia.org/wikipedia/fr/a/a7/Mail_%28Apple%29_logo.png"
                alt="Mail Icon"
                className="contactLogoMail"
              />
              <a href="mailto:edithbarbiera@aol.fr">
                <strong>{t("navigation.mail")}:</strong>
                <br />
                edithbarbiera@aol.fr
              </a>
            </li>
          </ul>
        </div>
        <div id="footer__adress">
          <p className="footerTitle">{t("navigation.adress")}</p>
          <p id="adressText" translate="no">
            Au verger B&B
            <br />
            30 Domaine de la source
            <br />
            06380, Sospel
            <br />
            FRANCE
          </p>
        </div>
      </div>
    </>
  );
}
