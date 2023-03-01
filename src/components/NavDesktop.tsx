import React from "react";

type NavDesktopProps = {
  SubMenuWhyWithUs: Function;
  openPhotosMenu: Function
};

function NavDesktop({ SubMenuWhyWithUs, openPhotosMenu }: NavDesktopProps) {
  return (
    <nav id="nav__Desktop">
      <ul>
        <li className="scrollingMenu__desktop">
          <a href="/#">➢ Pourquoi nous ?</a>
          <ul className="navMenu">
            <SubMenuWhyWithUs />
          </ul>
        </li>
        <li onClick={() => openPhotosMenu()}>
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
        <li className="scrollingMenu__desktop">
          <a href="/#">➢ Contactez-nous</a>
          <ul className="navMenu contactMenu">
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
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavDesktop;
