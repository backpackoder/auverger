import React from "react";

import { useState } from "react";

type Props = {
  SubMenuWhyWithUs: Function;
  scrollMenu: Function;
  isMenuScrolled: boolean;
  openPhotosMenu: Function;
};

export function NavMobile({ SubMenuWhyWithUs, scrollMenu, isMenuScrolled, openPhotosMenu }: Props) {
  // Arrow rotate start
  const [isWhyWithUsArrowRotated, setIsWhyWithUsArrowRotated] = useState(false);

  function whyWithUsArrowRotate() {
    setIsWhyWithUsArrowRotated(!isWhyWithUsArrowRotated);
  }

  const [isContactUsArrowRotated, setIsContactUsArrowRotated] = useState(false);

  function contactUsArrowRotate() {
    setIsContactUsArrowRotated(!isContactUsArrowRotated);
  }
  // Arrow rotate end

  return (
    <div id="menu__container">
      <div
        onClick={() => scrollMenu()}
        id="scrollingMenu__btn"
        className={isMenuScrolled ? "" : "active"}
      ></div>
      <div id="scrollingMenu" className={isMenuScrolled ? "" : "active"}>
        <h1 id="h1InMenu" translate="no">
          Au verger B&B
        </h1>
        <ul id="sections">
          <li onClick={whyWithUsArrowRotate} id="whyWithUs">
            <a href="/#">
              <span id="whyWithUsArrow" className={isWhyWithUsArrowRotated ? "arrowDown" : ""}>
                ➢
              </span>
              Pourquoi nous ?
            </a>
            <ul id="whyWithUsMenu" className={isWhyWithUsArrowRotated ? "active" : ""}>
              <SubMenuWhyWithUs scrollMenu={scrollMenu} />
            </ul>
          </li>
          <li>
            <a
              onClick={() => openPhotosMenu()}
              href="/#"
              className="goToCheckPoint photosMenuTrigger"
            >
              ➢ Voir les photos
            </a>
          </li>
          <li>
            <a onClick={() => scrollMenu()} href="#yourHostsCheckPoint" className="goToCheckPoint">
              ➢ Vos hôtes
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollMenu()}
              href="#guestReviewsCheckPoint"
              className="goToCheckPoint"
            >
              ➢ Nos commentaires
            </a>
          </li>
          <li onClick={contactUsArrowRotate} id="contactUs">
            <a href="/#">
              <span id="contactUsArrow" className={isContactUsArrowRotated ? "arrowDown" : ""}>
                ➢
              </span>
              Contactez-nous
            </a>
            <ul
              id="contactMenu"
              className={isContactUsArrowRotated ? "contactMenu active" : "contactMenu"}
            >
              <li className="whatsappInfos">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png"
                  alt="WhatsApp Icon"
                  className="contactLogoWhatsApp"
                />
                <a
                  href="https://api.whatsapp.com/send?phone=0033608054065"
                  className="whatsapp-content"
                >
                  WhatsApp
                </a>
              </li>
              <li className="mailInfos">
                <img
                  src="https://upload.wikimedia.org/wikipedia/fr/a/a7/Mail_%28Apple%29_logo.png"
                  alt="Mail Icon"
                  className="contactLogoMail"
                />
                <a href="mailto:edithbarbiera@aol.fr" className="mail-content">
                  Mail
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
