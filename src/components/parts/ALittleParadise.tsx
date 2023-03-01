import React from "react";

function APeacefulPlace() {
    return (
        <div className="descrBlockWrapper">
            <h3 data-aos="fade-up">Le calme</h3>
            <div className="descrBlock">
                <div id="aPeacefulPlaceCheckPoint"></div>
                <div data-aos="fade-up" className="iconsInRow">
                    <i className="fa-solid fa-tree"></i>
                    <img src="https://img.icons8.com/ios-filled/14.4/000000/hammock.png" alt="Le calme"/>
                </div>
                
                <div className="descrBlock-row">
                    <img data-aos="fade-up" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/396084582.jpg?k=cf3e7c48bbe00cbee31f671c76c24e29c5ef33abff8be4b0c9b0a256a8c9ffc3&o=&hp=1"
                    alt="Le calme" className="descrBlockImg" />
                    <p data-aos="fade-up" className="mainDescr">Installez-vous confortablement dans le hamac et laissez-vous vous endormir au son du ruissellement de l'eau de la Bévéra.
                        Soyez sûr de vivre un séjour agréable, au cœur d'un environnement paisible, loin de la pollution et du stress de la vie citadine.
                    </p>
                </div>
            </div>
        </div>
    )
}

function TheRiver() {
    return (
        <div className="descrBlockWrapper">
            <h3 data-aos="fade-up">La rivière</h3>
            <div className="descrBlock">
                <div id="theRiverCheckPoint"></div>
                <div data-aos="fade-up" className="iconsInRow">
                    <i className="fa-solid fa-water"></i>
                    <img src="https://img.icons8.com/ios-filled/14.4/000000/duck.png" alt="La faune"/>
                </div>
                <div className="descrBlock-row">
                    <img data-aos="fade-up" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/81054104.jpg?k=685a7ec28e9829024f194aa1756853cfe97f0ed38cb75bd1ed5a82eca972058a&o=&hp=1"
                    alt="La rivière"
                        className="descrBlockImg" />
                    <p data-aos="fade-up" className="mainDescr">La nature n'est qu'à un pas de votre lit.
                        Vous pourrez apprécier les canards et plein d'autres éspèces aviaires le long de la rivière.
                        La Bévéra est une douce rivière franco-italienne qui coule dans le département français des Alpes-Maritimes jusqu'à la province italienne d'Imperia.
                    </p>
                </div>
            </div>
        </div>
    )
}

function TheGarden() {
    return (
        <div className="descrBlockWrapper">
            <h3 data-aos="fade-up">Le jardin</h3>
            <div className="descrBlock">
                <div id="theGardenCheckPoint"></div>
                <div data-aos="fade-up" className="iconsInRow">
                    <img src="https://img.icons8.com/ios-filled/14.4/000000/potted-plant.png" alt="Le potager"/>
                    <img src="https://img.icons8.com/ios-filled/14.4/000000/cauliflower.png" alt="La flore"/>
                </div>
                <div className="descrBlock-row">
                    <img data-aos="fade-up" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/81055037.jpg?k=72068fd13d18e81c85dad74e050ab3a3c8791d8b2b4c96b48830c478cef32ef1&o=&hp=1"
                    alt="Le jardin"
                    className="descrBlockImg" />
                    <p data-aos="fade-up" className="mainDescr">Le jardin contient un potager où y poussent des tomates, salades, courgettes,
                        et toutes autres sortes de bons légumes frais chéris avec soin par les mains et la patience de votre hôte <a href="#yourHostsCheckPoint" id="robertLink">Robert</a>.
                        Nous avons également quelques arbres fruitiers tels qu'un cerisier, un pommier et un prunier.
                    </p>
                </div>
            </div>
        </div>
    )
}

function TheBedroom() {
    return (
        <div className="descrBlockWrapper">
            <h3 data-aos="fade-up">La chambre à coucher</h3>
            <div className="descrBlock">
                <div id="theBedroomCheckPoint"></div>
                <div data-aos="fade-up" className="iconsInRow">
                    <i className="fa-solid fa-bed"></i>
                    <i className="fa-solid fa-tv"></i>
                </div>
                <div className="descrBlock-row">
                    <img data-aos="fade-up" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/141304846.jpg?k=b56c684d467a484053cc0aa25ebeac594b7c67ee3adcbcd95adecfec2b020d33&o=&hp=1"
                    alt="La chambre à coucher"
                        className="descrBlockImg" />
                    <p data-aos="fade-up" className="mainDescr">Votre chambre est totalement indépendante de la maison.
                        Elle est équipée d'une télévision à écran plat, d'une armoire, ainsi que d'une salle de bain complète.
                    </p>
                </div>
            </div>
        </div>
    )
}

function ALittleParadise() {
    return (
        <>
        <h2 data-aos="fade-up">Un petit paradis</h2>
        <div className="descrFlex">
            <APeacefulPlace />
            <TheRiver />
            <TheGarden />
            <TheBedroom />
        </div>
        </>
    )
}

export default ALittleParadise