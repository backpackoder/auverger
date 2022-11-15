function HostsAndMap() {
    return (
        <div id="hostAndMapInRow">
            <div className="hostAndMapInRowWrapper">
                <div data-aos="fade-up" id="yourHosts">
                    <div id="yourHostsCheckPoint"></div>
                    <h2 data-aos="fade-up">Vos hôtes</h2>
                    <h3 data-aos="fade-up" id="guestReviewsTitle">Qui sommes-nous ?</h3>
                    <div data-aos="fade-up" id="posYourHostsImg">
                        <img src="https://cf.bstatic.com/xdata/images/xphoto/max500_ao/7301666.jpg?k=f2c78e32172fa5d0909dfb8ef5b1939c08f00104d64f486373e342a4eff31d85&o="
                        alt="Vos hôtes"
                        id="yourHostsImg" />
                    </div>
                    <p data-aos="fade-up" id="yourHostsDescr">Nous sommes un couple de jeune retraités qui aimont les voyages et nous balader en moto.
                        Edith est une artiste mosaïste, elle travaille sur place dans son atelier.
                        Robert s'occupe de son potager et vous fera goûter quelques spécialités :  sirop de menthe sauvage, sirop de lavande, prunes en confiture...
                        Nous sommes des hôtes très discrets, bien que vous pouvez nous rejoindre pour un apéro et faire connaissance, si l'envie vous prend.</p>
                </div>
            </div>
            
            <div className="hostAndMapInRowWrapper">
                <div data-aos="fade-up" id="map">
                    <div id="mapCheckPoint"></div>
                    <h2 data-aos="fade-up">L'emplacement</h2>
                    <h3 data-aos="fade-up" id="mapTitle">L'hébergement sur Google maps</h3>
                    <div data-aos="fade-up" id="mapWrapper">
                        <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=7.461538016796113%2C43.87829894538044%2C7.464987337589265%2C43.87957302454929&amp;layer=mapnik&amp;marker=43.87893598837037%2C7.463262677192688"
                        title="OpenStreetMap" id="iframeMap" width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                    <small data-aos="fade-up"><a href="https://www.openstreetmap.org/?mlat=43.87894&amp;mlon=7.46326#map=19/43.87894/7.46326" target="_blank" rel="noreferrer">Afficher une carte plus grande</a></small>
                </div>
            </div>
        </div>
    )
}

export default HostsAndMap