import React from "react";

import { useEffect } from "react";

// Libraries
import Aos from "aos";
import "aos/dist/aos.css";

// Components
import { DiscoverAndEnjoy } from "./DiscoverAndEnjoy";
import { ALittleParadise } from "./ALittleParadise";
import { OurServices } from "./OurServices";
import { WhatToDo } from "./WhatToDo";
import { OurComments } from "./OurComments";
import { HostsAndMap } from "./HostAndMap";

export function Parts() {
  useEffect(() => {
    Aos.init({ offset: 100, duration: 700, once: true });
  }, []);

  return (
    <>
      <DiscoverAndEnjoy />
      <ALittleParadise />
      <OurServices />
      <WhatToDo />
      <OurComments />
      <HostsAndMap />
    </>
  );
}
