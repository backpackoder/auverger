import DiscoverAndEnjoy from './parts/discoverAndEnjoy';
import ALittleParadise from './parts/aLittleParadise';
import OurServices from './parts/ourServices';
import WhatToDo from './parts/whatToDo';
import OurComments from './parts/ourComments';
import HostAndMapInRow from './parts/hostAndMapInRow';

function Parts() {
    return (
        <>
        <DiscoverAndEnjoy />
        <ALittleParadise />
        <OurServices />
        <WhatToDo />
        <OurComments />
        <HostAndMapInRow />
        </>
    )
}

// Scroll animations start
const ratio = 0.2;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  
const handleIntersect = function(entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll(".reveal").forEach(function(r) {
    observer.observe(r);
})
// Scroll animations end

export default Parts;