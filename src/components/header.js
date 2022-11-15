import { useState } from "react";

import Title from "./title";
import NavMobile from "./navMobile";
import NavDesktop from "./navDesktop";
import BootstrapCarousel from "./bootstrapCarousel";

function SubMenuWhyWithUs(scrollMenu) {
  return (
    <>
      <li>
        <a
          onClick={() => scrollMenu}
          href="#swimmingPoolCheckPoint"
          className="goToCheckPoint"
        >
          ➢ La piscine
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollMenu}
          href="#theRiverCheckPoint"
          className="goToCheckPoint"
        >
          ➢ La rivière
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollMenu}
          href="#aPeacefulPlaceCheckPoint"
          className="goToCheckPoint"
        >
          ➢ Le calme
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollMenu}
          href="#theBedroomCheckPoint"
          className="goToCheckPoint"
        >
          ➢ La chambre à coucher
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollMenu}
          href="#theBreakfastCheckPoint"
          className="goToCheckPoint"
        >
          ➢ Le petit-déjeuner
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollMenu}
          href="#ourAdvantagesCheckPoint"
          className="goToCheckPoint"
        >
          ➢ Nos avantages
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollMenu}
          href="#theActivitiesCheckPoint"
          className="goToCheckPoint"
        >
          ➢ Les activités
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollMenu}
          href="#theSurroundingsCheckPoint"
          className="goToCheckPoint"
        >
          ➢ Les alentours
        </a>
      </li>
      <li>
        <a
          onClick={() => scrollMenu}
          href="#mapCheckPoint"
          className="goToCheckPoint"
        >
          ➢ Voir sur la carte
        </a>
      </li>
    </>
  );
}

function Header() {
  // Scrolling menu start
  const [isMenuScrolled, setIsMenuScrolled] = useState(true);

  function scrollMenu() {
    setIsMenuScrolled(!isMenuScrolled);
  }
  // Scrolling menu end

  // Open photos menu start
  const [isGrid, setIsGrid] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [seeThePhotosBtn, setSeeThePhotosBtn] = useState(false);
  const [openOrCloseMenu, setOpenOrCloseMenu] = useState(true);
  const [isPhotosMenuOff, setIsPhotosMenuOff] = useState(true);

  function openPhotosMenu() {
    setIsGrid(!isGrid);
    setMenuOpened(!menuOpened);
    setSeeThePhotosBtn(!seeThePhotosBtn);
    setOpenOrCloseMenu(!openOrCloseMenu);
    setIsPhotosMenuOff(!isPhotosMenuOff);
  }
  // Open photos menu end

  return (
    <>
      <Title />
      <NavMobile
        SubMenuWhyWithUs={SubMenuWhyWithUs}
        scrollMenu={scrollMenu}
        isMenuScrolled={isMenuScrolled}
        setIsMenuScrolled={setIsMenuScrolled}
        openPhotosMenu={openPhotosMenu}
      />
      <NavDesktop
        SubMenuWhyWithUs={SubMenuWhyWithUs}
        openPhotosMenu={openPhotosMenu}
      />
      <BootstrapCarousel
        isGrid={isGrid}
        menuOpened={menuOpened}
        seeThePhotosBtn={seeThePhotosBtn}
        openOrCloseMenu={openOrCloseMenu}
        isPhotosMenuOff={isPhotosMenuOff}
        openPhotosMenu={openPhotosMenu}
      />
    </>
  );
}

export default Header