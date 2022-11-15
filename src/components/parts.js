import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import DiscoverAndEnjoy from "./parts/discoverandenjoy"
import ALittleParadise from "./parts/alittleparadise"
import OurServices from "./parts/ourservices"
import WhatToDo from "./parts/whattodo"
import OurComments from './parts/ourcomments';
import HostsAndMap from './parts/hostsandmap';

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