import React from "react";

import Aos from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";
import DiscoverAndEnjoy from "./parts/DiscoverAndEnjoy"
import ALittleParadise from "./parts/ALittleParadise"
import OurServices from "./parts/OurServices";
import WhatToDo from "./parts/WhatToDo";
import OurComments from "./parts/OurComments";
import HostsAndMap from './parts/HostAndMap';

function Parts() {
    useEffect(() => {
        Aos.init({offset: 100, duration: 700, once: true});
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
    )
}

export default Parts