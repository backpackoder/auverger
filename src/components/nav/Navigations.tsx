import React from "react";

import { useState } from "react";

function MenuPart1({ scrollMenu }: { scrollMenu: Function }) {
  return (
    <>
      <li>
        <a onClick={() => scrollMenu()} href="#swimmingPoolCheckPoint" className="goToCheckPoint">
          ➢ La piscine
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu()} href="#theRiverCheckPoint" className="goToCheckPoint">
          ➢ La rivière
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu()} href="#aPeacefulPlaceCheckPoint" className="goToCheckPoint">
          ➢ Le calme
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu()} href="#theBedroomCheckPoint" className="goToCheckPoint">
          ➢ La chambre à coucher
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu()} href="#theBreakfastCheckPoint" className="goToCheckPoint">
          ➢ Le petit-déjeuner
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu()} href="#ourAdvantagesCheckPoint" className="goToCheckPoint">
          ➢ Nos avantages
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu()} href="#theActivitiesCheckPoint" className="goToCheckPoint">
          ➢ Les activités
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollMenu()}
          href="#theSurroundingsCheckPoint"
          className="goToCheckPoint"
        >
          ➢ Les alentours
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu()} href="#mapCheckPoint" className="goToCheckPoint">
          ➢ Voir sur la carte
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
          ➢ Voir les photos
        </a>
      </li>
      <li>
        <a href="#yourHostsCheckPoint" className="goToCheckPoint">
          ➢ Vos hôtes
        </a>
      </li>
      <li>
        <a href="#guestReviewsCheckPoint" className="goToCheckPoint">
          ➢ Nos commentaires
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
        <p className="whatsapp-content">WhatsApp</p>
      </li>
      <li className="mailInfos">
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/a/a7/Mail_%28Apple%29_logo.png"
          alt="Mail Icon"
          className="contactLogoMail"
        />
        <p className="mail-content">Mail</p>
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
              Pourquoi nous choisir ?
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
              Contactez-nous
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
          <a href="/#">➢ Pourquoi nous choisir ?</a>
          <ul className="navMenu">
            <MenuPart1 scrollMenu={scrollMenu} />
          </ul>
        </li>
        <MenuPart2 />
        <li className="scrollingMenu__desktop">
          <a href="/#">➢ Contactez-nous</a>
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
