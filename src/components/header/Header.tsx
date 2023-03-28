import React from "react";

import { useState } from "react";

import Title from "./Title";
import { NavMobile } from "../nav/NavMobile";
import { NavDesktop } from "../nav/NavDesktop";
import { BootstrapCarousel } from "./BootstrapCarousel";
import { useTranslation } from "react-i18next";

export function Header() {
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
        openPhotosMenu={openPhotosMenu}
      />
      <NavDesktop SubMenuWhyWithUs={SubMenuWhyWithUs} openPhotosMenu={openPhotosMenu} />
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

function SubMenuWhyWithUs(scrollMenu: Function) {
  const { t } = useTranslation();

  return (
    <>
      <li>
        <a onClick={() => scrollMenu} href="#swimmingPoolCheckPoint" className="goToCheckPoint">
          ➢ {t("parts.discoverAndEnjoy.theSwimmingpool")}
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu} href="#theRiverCheckPoint" className="goToCheckPoint">
          ➢ {t("parts.aLittleParadise.theRiver")}
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu} href="#aPeacefulPlaceCheckPoint" className="goToCheckPoint">
          ➢ {t("parts.aLittleParadise.aPeacefulPlace")}
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu} href="#theBedroomCheckPoint" className="goToCheckPoint">
          ➢ {t("parts.aLittleParadise.theBedroom")}
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu} href="#theBreakfastCheckPoint" className="goToCheckPoint">
          ➢ {t("parts.ourServices.theBreakfast")}
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu} href="#ourAdvantagesCheckPoint" className="goToCheckPoint">
          ➢ {t("parts.ourServices.ourAdvandages")}
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu} href="#theActivitiesCheckPoint" className="goToCheckPoint">
          ➢ {t("parts.whatToDo.theActivities")}
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu} href="#theSurroundingsCheckPoint" className="goToCheckPoint">
          ➢ {t("parts.whatToDo.theSurroundings")}
        </a>
      </li>
      <li>
        <a onClick={() => scrollMenu} href="#mapCheckPoint" className="goToCheckPoint">
          ➢ {t("navigation.seeOnTheMap")}
        </a>
      </li>
    </>
  );
}
