import React from "react";

function TheActivities() {
    return (
        <div className="descrBlockWrapper">
            <h3 data-aos="fade-up">Les activités</h3>
            <div className="descrBlock">
                <div id="theActivitiesCheckPoint"></div>
                <div data-aos="fade-up" className="iconsInRow">
                    <i className="fa-solid fa-bicycle"></i>
                    <i className="fa-solid fa-person-hiking"></i>
                </div>
                <div className="descrBlock-row">
                    <img data-aos="fade-up" src="https://cdn.pixabay.com/photo/2016/11/19/12/58/adventure-1839147__340.jpg"
                    alt="Les activités"
                        className="descrBlockImg" />
                    <p data-aos="fade-up" className="mainDescr">La région est très appréciée par les motards et les cyclistes.
                        Plusieurs parcours de randonnée pédestre se trouvent très proche de la maison.
                        Un jeu de boules (pétanque) est à votre disposition dans le jardin.
                    </p>
                </div>
            </div>
        </div>
    )
}

function TheSurroundings() {
    return (
        <div className="descrBlockWrapper">
            <h3 data-aos="fade-up">Les alentours</h3>
            <div className="descrBlock">
                <div id="theSurroundingsCheckPoint"></div>
                <div data-aos="fade-up" className="iconsInRow">
                    <i className="fa-solid fa-mountain-sun"></i>
                    <i className="fa-solid fa-sun"></i>
                </div>
                <div className="descrBlock-row">
                    <img data-aos="fade-up" src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Sospel-la-Bevera-2.jpg"
                    alt="Les alentours"
                        className="descrBlockImg" />
                    <p data-aos="fade-up" className="mainDescr">Nice est à 25 km, tandis que Monaco et Menton sont à 12 km.
                        La frontière italienne est à seulement 7 km.
                        L'aéroport le plus proche, celui de Nice-Côte d'Azur, se trouve à 32 km.
                    </p>
                </div>
            </div>
        </div>
    )
}

function WhatToDo() {
    return (
        <>
        <h2 data-aos="fade-up">Quoi faire</h2>
        <div className="descrFlex">
            <TheActivities />
            <TheSurroundings />
        </div>
        </>
    )
}

export default WhatToDo