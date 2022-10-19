function FloatingMenu() {
    return (
        <div id="menu__container">
            <div onClick={scrollMenu} id="scrollingMenu__btn"></div>
            <div id="scrollingMenu">
                <h1 id="h1InMenu" translate="no">Au verger B&B</h1>
                <ul id="sections">
                    <li onClick={whyWithUsArrowRotate} id="whyWithUs"><a href="#"><span id="whyWithUsArrow">➢</span>Pourquoi nous choisir ?</a></li>
                        <ul id="whyWithUsMenu">
                            <li><a href="#swimmingPoolCheckPoint" className="goToCheckPoint">➢ La piscine</a></li>
                            <li><a href="#theRiverCheckPoint" className="goToCheckPoint">➢ La rivière</a></li>
                            <li><a href="#aPeacefulPlaceCheckPoint" className="goToCheckPoint">➢ Le calme</a></li>
                            <li><a href="#theBedroomCheckPoint" className="goToCheckPoint">➢ La chambre à coucher</a></li>
                            <li><a href="#theBreakfastCheckPoint" className="goToCheckPoint">➢ Le petit-déjeuner</a></li>
                            <li><a href="#ourAdvantagesCheckPoint" className="goToCheckPoint">➢ Nos avantages</a></li>
                            <li><a href="#activitiesCheckPoint" className="goToCheckPoint">➢ Les activités</a></li>
                            <li><a href="#surroundingsCheckPoint" className="goToCheckPoint">➢ Les alentours</a></li>
                            <li><a href="#mapCheckPoint" className="goToCheckPoint">➢ Voir sur la carte</a></li>
                        </ul>
                    <li><a href="#" className="goToCheckPoint photosMenuTrigger">➢ Voir les photos</a></li>
                    <li><a href="#yourHostsCheckPoint" className="goToCheckPoint">➢ Vos hôtes</a></li>
                    <li><a href="#guestReviewsCheckPoint" className="goToCheckPoint">➢ Nos commentaires</a></li>
                    <li onClick={contactUsArrowRotate} id="contactUs"><a href="#"><span id="contactUsArrow">➢</span>Contactez-nous</a></li>
                        <ul id="contactMenu" className="contactMenu">
                            <li className="whatsappInfos">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png"
                                alt="WhatsApp Icon"
                                className="contactLogoWhatsApp" />
                                <p className="whatsapp-content">WhatsApp</p></li>
                            <li className="mailInfos">
                                <img src="https://upload.wikimedia.org/wikipedia/fr/a/a7/Mail_%28Apple%29_logo.png"
                                alt="Mail Icon"
                                className="contactLogoMail" />
                                <p className="mail-content">Mail</p></li>
                        </ul>
                </ul>
            </div>
        </div>
    )
}

// Scrolling menu
const scrollingMenuBtn = document.querySelector("#scrollingMenu__btn");
const scrollingMenu = document.querySelector("#scrollingMenu");

// Arrow rotate
const whyWithUs = document.querySelector("#whyWithUs");
const contactUs = document.querySelector("#contactUs");
const arrow = document.querySelectorAll(".arrow");
const whyWithUsArrow = document.querySelector("#whyWithUsArrow");
const contactUsArrow = document.querySelector("#contactUsArrow");
const whyWithUsMenu = document.querySelector("#whyWithUsMenu");
const contactMenu = document.querySelector("#contactMenu");
const scrollingMenu__desktop = document.querySelector(".scrollingMenu__desktop");

function scrollMenu() {
    scrollingMenuBtn.classList.toggle("active");
    scrollingMenu.classList.toggle("active");
}

// Arrow rotate start
function whyWithUsArrowRotate() {
    whyWithUsArrow.classList.toggle("arrowDown");
    whyWithUsMenu.classList.toggle("active");
}

function contactUsArrowRotate() {
    contactUsArrow.classList.toggle("arrowDown");
    contactMenu.classList.toggle("active");
}
// Arrow rotate end

export default FloatingMenu