import React from "react";

export function DiscoverAndEnjoy() {
  return (
    <div data-aos="fade-up" className="descrFlex">
      <Discover />
      <Enjoy />
    </div>
  );
}

function Discover() {
  return (
    <div className="descrBlockWrapper">
      <h2 data-aos="fade-up">Découvrir</h2>
      <h3 data-aos="fade-up">L'établissement</h3>
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
            Situé à Sospel, les couples apprécient particulièrement l'emplacement de cet
            établissement. Sur Booking, ils lui donnent la note moyenne de 9,8/10 pour un séjour à
            deux. L'établissement accueille des clients Booking.com depuis le 25 juillet 2016.
          </p>
        </div>
      </div>
    </div>
  );
}

function Enjoy() {
  return (
    <div className="descrBlockWrapper">
      <h2 data-aos="fade-up">Profitez</h2>
      <h3 data-aos="fade-up">La piscine</h3>
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
            Relaxez-vous dans la piscine extérieure ouverte en saison avec vue sur les montagnes. Un
            parasol et deux chaises longues vous attendent.
          </p>
        </div>
      </div>
    </div>
  );
}
