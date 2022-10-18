function WhatToDo() {
    return (
        <>
        <h2 className="reveal-h2">Quoi faire</h2>
        <div className="descrFlex">
            <div className="descrBlockWrapper reveal">
                <h3 className="reveal-h3">Les activités</h3>
                <div className="descrBlock">
                    <div id="activitiesCheckPoint"></div>
                    <div className="iconsInRow reveal-icon">
                        <i className="fa-solid fa-bicycle"></i>
                        <i className="fa-solid fa-person-hiking"></i>
                    </div>
                    <div className="descrBlock-row">
                        <img src="https://cdn.pixabay.com/photo/2016/11/19/12/58/adventure-1839147__340.jpg"
                        alt="Les activités"
                        className="descrBlockImg reveal-img" />
                        <p className="mainDescr reveal-p">La région est très appréciée par les motards et les cyclistes.
                            Plusieurs parcours de randonnée pédestre se trouvent très proche de la maison.
                            Un jeu de boules (pétanque) est à votre disposition dans le jardin.
                        </p>
                    </div>
                </div>
            </div>
        
            <div className="descrBlockWrapper reveal">
                <h3 className="reveal-h3">Les alentours</h3>
                <div className="descrBlock">
                    <div id="surroundingsCheckPoint"></div>
                    <div className="iconsInRow reveal-icon">
                        <i className="fa-solid fa-mountain-sun"></i>
                        <i className="fa-solid fa-sun"></i>
                    </div>
                    <div className="descrBlock-row">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Sospel-la-Bevera-2.jpg"
                        alt="Les alentours"
                        className="descrBlockImg reveal-img" />
                        <p className="mainDescr reveal-p">Nice est à 25 km, tandis que Monaco et Menton sont à 12 km.
                            La frontière italienne est à seulement 7 km.
                            L'aéroport le plus proche, celui de Nice-Côte d'Azur, se trouve à 32 km.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default WhatToDo