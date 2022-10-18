function OurServices() {
    return (
        <>
        <h2 className="reveal-h2">Nos services</h2>
        <div className="descrFlex">
            <div className="descrBlockWrapper reveal">
                <h3 className="reveal-h3">Le petit-déjeuner</h3>
                <div className="descrBlock">
                    <div id="theBreakfastCheckPoint"></div>
                    <div id="ourAdvantagesCheckPoint"></div>
                    <div className="iconsInRow reveal-icon">
                        <img src="https://img.icons8.com/ios-filled/14.4/000000/bread.png"/>
                        <i className="fa-solid fa-mug-saucer"></i>
                    </div>
                    <div className="descrBlock-row">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/396068329.jpg?k=ae782e789c6fc769492ade33aa62c4b47db6342cf4cb424ff4ce60408eb50580&o=&hp=1"
                        alt="Le petit-déjeuner"
                        className="descrBlockImg reveal-img" />
                        <p className="mainDescr reveal-p">De 8h à 9h30, savourez notre délicieux petit-déjeuner français.
                            Lorsque le temps le permet, il peut être servi dans le jardin en face de la piscine ou sur la terrasse.
                            Le prix est de 8,50€ par personne.
                        </p>
                    </div>
                </div>
            </div>

            <div className="descrBlockWrapper reveal">
                <h3 className="reveal-h3">Nos avantages</h3>
                <div className="descrBlock">
                    <div id="ourAdvantagesCheckPoint"></div>
                    <div className="iconsInRow reveal-icon">
                        <i className="fa-solid fa-wifi"></i>
                        <i className="fa-solid fa-car"></i>
                        <i className="fa-solid fa-motorcycle"></i>
                    </div>
                    <div className="descrBlock-row">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/141304824.jpg?k=41fe2e0ec63b1eeb8b41b15aacc3eecde54effc2bd85a6a1dcce79aa3f51f924&o=&hp=1"
                        alt="Nos avantages"
                        className="descrBlockImg reveal-img" />
                        <p className="mainDescr reveal-p">Vous bénéficierez gratuitement d'un parking privé sur place et d'une connexion Wi-Fi.
                            Vous trouverez un réfrigérateur et un micro-ondes sur la terrasse commune.
                            Un sèche-cheveux, du linge de lit et des serviettes vous seront fournis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default OurServices