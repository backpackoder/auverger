function HostAndMapInRow() {
    return (
        <>
        <div id="hostAndMapInRow">
            <div className="hostAndMapInRowWrapper">
                <div id="yourHosts" className="reveal">
                    <div id="yourHostsCheckPoint"></div>
                    <h2 className="reveal-h2">Vos hôtes</h2>
                    <h3 id="guestReviewsTitle" className="reveal-h3">Qui sommes-nous ?</h3>
                    <div id="posYourHostsImg" className="reveal-img">
                        <img src="https://cf.bstatic.com/xdata/images/xphoto/max500_ao/7301666.jpg?k=f2c78e32172fa5d0909dfb8ef5b1939c08f00104d64f486373e342a4eff31d85&o="
                        alt="Vos hôtes"
                        id="yourHostsImg" />
                    </div>
                    <p id="yourHostsDescr" className="reveal-p">Nous sommes un couple de jeune retraités qui aimont les voyages et nous balader en moto.
                        Edith est une artiste mosaïste, elle travaille sur place dans son atelier.
                        Robert s'occupe de son potager et vous fera goûter quelques spécialités :  sirop de menthe sauvage, sirop de lavande, prunes en confiture...
                        Nous sommes des hôtes très discrets, bien que vous pouvez nous rejoindre pour un apéro et faire connaissance, si l'envie vous prend.</p>
                </div>
            </div>
            
            <div className="hostAndMapInRowWrapper">
                <div id="map" className="reveal">
                    <div id="mapCheckPoint"></div>
                    <h2 className="reveal-h2">L'emplacement</h2>
                    <h3 id="mapTitle" className="reveal-h3">L'hébergement sur Google maps</h3>
                    <div id="mapWrapper" className="reveal-img">
                        <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=7.461538016796113%2C43.87829894538044%2C7.464987337589265%2C43.87957302454929&amp;layer=mapnik&amp;marker=43.87893598837037%2C7.463262677192688"
                        id="iframeMap" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                    <small className="reveal-p">
                        <a href="https://www.openstreetmap.org/?mlat=43.87894&amp;mlon=7.46326#map=19/43.87894/7.46326"
                        target={"_blank"}>
                            Afficher une carte plus grande
                        </a>
                    </small>
                </div>
            </div>
        </div>
        </>
    )
}

export default HostAndMapInRow