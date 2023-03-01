import React from "react";

function Footer() {
  return (
    <>
      <div id="footer">
        <div id="footer__links">
          <p className="footerTitle">liens utiles</p>
          <div id="footer__links__a">
            <a href="#theEstablishmentCheckPoint" className="goToCheckPoint">
              ▸ Pourquoi nous ?
            </a>
            <a
              href="https://www.booking.com/hotel/fr/au-verger-b-amp-b.fr.html"
              target="_blank"
              rel="noreferrer"
            >
              ▸ Réserver
            </a>
            <a
              href="/#"
              id="footer__links__div--photos"
              className="photosMenuTrigger"
            >
              ▸ Voir les photos
            </a>
            <a href="#yourHostsCheckPoint">▸ Vos hôtes</a>
            <a href="#guestReviewsCheckPoint">▸ Nos commentaires</a>
            <a href="#mapCheckPoint">▸ Voir sur la carte</a>
          </div>
        </div>
        <div id="footer__contact">
          <p className="footerTitle">Contact</p>
          <ul>
            <li className="whatsappInfos">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png"
                alt="WhatsApp Icon"
                className="contactLogoWhatsApp"
              />
              <a href="https://api.whatsapp.com/send?phone=0033608054065">
                <strong>WhatsApp:</strong>
                <br />
                +33 6 74 02 05 02
              </a>
            </li>
            <li className="mailInfos">
              <img
                src="https://upload.wikimedia.org/wikipedia/fr/a/a7/Mail_%28Apple%29_logo.png"
                alt="Mail Icon"
                className="contactLogoMail"
              />
              <a href="mailto:edithbarbiera@aol.fr">
                <strong>Mail:</strong>
                <br />
                edithbarbiera@aol.fr
              </a>
            </li>
          </ul>
        </div>
        <div id="footer__adress">
          <p className="footerTitle">Adresse</p>
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

export default Footer;
