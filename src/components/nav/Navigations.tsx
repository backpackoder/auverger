import { t } from "i18next";
import React from "react";

import { useState } from "react";
import { useTranslation } from "react-i18next";

function MenuPart1({ scrollMenu }: { scrollMenu: Function }) {
  const { t } = useTranslation();

  return (
    <>
      <li>
        <a onClick={() => scrollMenu()} href="#swimmingPoolCheckPoint" className="goToCheckPoint">
          ➢ {t("parts.discoverAndEnjoy.theSwimmingpool")}
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu()} href="#theRiverCheckPoint" className="goToCheckPoint">
          ➢ {t("parts.aLittleParadise.theRiver")}
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu()} href="#aPeacefulPlaceCheckPoint" className="goToCheckPoint">
          ➢ {t("parts.aLittleParadise.aPeacefulPlace")}
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu()} href="#theBedroomCheckPoint" className="goToCheckPoint">
          ➢ {t("parts.aLittleParadise.theBedroom")}
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu()} href="#theBreakfastCheckPoint" className="goToCheckPoint">
          ➢ {t("parts.ourServices.theBreakfast")}
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu()} href="#ourAdvantagesCheckPoint" className="goToCheckPoint">
          ➢ {t("parts.ourServices.ourAdvandages")}
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu()} href="#theActivitiesCheckPoint" className="goToCheckPoint">
          ➢ {t("parts.whatToDo.theActivities")}
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollMenu()}
          href="#theSurroundingsCheckPoint"
          className="goToCheckPoint"
        >
          ➢ {t("parts.whatToDo.theSurroundings")}
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu()} href="#mapCheckPoint" className="goToCheckPoint">
          ➢ {t("navigation.seeOnTheMap")}
        </a>
      </li>
    </>
  );
}

function MenuPart2() {
  return (
    <>
      <li>
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
    </>
  );
}

function MenuPart3() {
  return (
    <>
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
    </>
  );
}

function NavMobile({
  scrollMenu,
  isMenuScrolled,
}: {
  scrollMenu: Function;
  isMenuScrolled: boolean;
}) {
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
        onClick={() => scrollMenu}
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
              {t("navigation.whyUs")}
            </a>
            <ul id="whyWithUsMenu" className={isWhyWithUsArrowRotated ? "active" : ""}>
              <MenuPart1 scrollMenu={scrollMenu} />
            </ul>
          </li>
          <MenuPart2 />
          <li onClick={contactUsArrowRotate} id="contactUs">
            <a href="/#">
              <span id="contactUsArrow" className={isContactUsArrowRotated ? "arrowDown" : ""}>
                ➢
              </span>
              {t("navigation.contactUs")}
            </a>
            <ul
              id="contactMenu"
              className={isContactUsArrowRotated ? "contactMenu active" : "contactMenu"}
            >
              <MenuPart3 />
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

function NavDesktop({ scrollMenu }: { scrollMenu: Function }) {
  return (
    <nav id="nav__Desktop">
      <ul>
        <li className="scrollingMenu__desktop">
          <a href="/#">➢ {t("navigation.whyUs")}</a>
          <ul className="navMenu">
            <MenuPart1 scrollMenu={scrollMenu} />
          </ul>
        </li>
        <MenuPart2 />
        <li className="scrollingMenu__desktop">
          <a href="/#">➢ {t("navigation.contactUs")}</a>
          <ul className="navMenu contactMenu">
            <MenuPart3 />
          </ul>
        </li>
      </ul>
    </nav>
  );
}

function Navigations() {
  // Scrolling menu start
  const [isMenuScrolled, setIsMenuScrolled] = useState(true);

  function scrollMenu() {
    setIsMenuScrolled(!isMenuScrolled);
  }
  // Scrolling menu end

  return (
    <>
      <NavMobile scrollMenu={scrollMenu} isMenuScrolled={isMenuScrolled} />
      <NavDesktop scrollMenu={scrollMenu} />
    </>
  );
}

export default Navigations;
