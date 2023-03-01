import React from "react";

import Carousel from "react-bootstrap/Carousel";

const imgList = [
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/141304856.jpg?k=15da3496eaf8c2bd35a985a13a7f8c8e5ca9544fe4811f92be0b322ca03cb794&o=&hp=1",
    altImg: "La chambre d'hôte avec vue sur l'extérieur",
    children: "La chambre d'hôte avec vue sur l'extérieur.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/141304846.jpg?k=b56c684d467a484053cc0aa25ebeac594b7c67ee3adcbcd95adecfec2b020d33&o=&hp=1",
    altImg: "Le lit double de la chambre d'hôte",
    children: "Le lit double de la chambre d'hôte.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/141304824.jpg?k=41fe2e0ec63b1eeb8b41b15aacc3eecde54effc2bd85a6a1dcce79aa3f51f924&o=&hp=1",
    altImg: "La chambre d'hôte avec vue vers la salle de bain et le placard",
    children: "La chambre d'hôte avec vue vers la salle de bain et le placard.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401644009.jpg?k=8e3e32113b9ebe407adcfb13fec79044b6495104202de0a26e7968aa99c4020b&o=&hp=1",
    altImg: "L'entrée de votre chambre avec baie vitrée",
    children: "L'entrée de votre chambre avec baie vitrée.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/396068329.jpg?k=ae782e789c6fc769492ade33aa62c4b47db6342cf4cb424ff4ce60408eb50580&o=&hp=1",
    altImg: "Découvrez notre petit déjeuner copieux pour 8,50€ par personne",
    children: "Découvrez notre petit déjeuner copieux pour 8,50€ par personne.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/75748484.jpg?k=ec8a84ea1dd3ae5dd68741feaa229af26435025dc478da42065495d6314b0e20&o=&hp=1",
    altImg: "L'établissement vu depuis le jardin",
    children: "L'établissement vu depuis le jardin.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/101637024.jpg?k=49da771f41ef74d150d9023c0b30423fa163683afa609ea6b574cf8bd367432f&o=&hp=1",
    altImg: "La piscine peut atteindre jusqu'à 30 degrés en après-midi",
    children: "La piscine peut atteindre jusqu'à 30 degrés en après-midi.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/75692812.jpg?k=6b4b164a4692b3d12281e2d16bef2a89635fe11bea9c2b5defed01e16e68cb19&o=&hp=1",
    altImg: "Lisez, faites la sieste et discutez en terrasse",
    children: "Lisez, faites la sieste et discutez en terrasse.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/101637024.jpg?k=49da771f41ef74d150d9023c0b30423fa163683afa609ea6b574cf8bd367432f&o=&hp=1",
    altImg: "La piscine peut atteindre jusqu'à 30 degrés en après-midi",
    children: "La piscine peut atteindre jusqu'à 30 degrés en après-midi.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/396084582.jpg?k=cf3e7c48bbe00cbee31f671c76c24e29c5ef33abff8be4b0c9b0a256a8c9ffc3&o=&hp=1",
    altImg: "Rien de mieux que de trouver un beau coin à l'ombre près de la rivière",
    children: "Rien de mieux que de trouver un beau coin à l'ombre près de la rivière.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/78794406.jpg?k=4cb9cc076c8232e9e3f76f82399c5de225a93865e323b2ac1aac0119975498a7&o=&hp=1",
    altImg: "Si vous êtes assez silencieux, de nombreuses éspèces aviaires vous rejoindrons",
    children: "Si vous êtes assez silencieux, de nombreuses éspèces aviaires vous rejoindrons.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/81054349.jpg?k=9313d147c52b0eebd746764328cb2eb10339bf267f524557d62745a75c8a10db&o=&hp=1",
    altImg: "La nature n'est qu'à un pas de votre lit",
    children: "La nature n'est qu'à un pas de votre lit.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/78794080.jpg?k=13b31b3256919f713a53213436c424481477934328643a823fdab8b60f881361&o=&hp=1",
    altImg: "Les canards, qui connaissent très bien vos hôtes, participent au charme de ce lieu",
    children: "Les canards, qui connaissent très bien vos hôtes, participent au charme de ce lieu.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401644048.jpg?k=6b97a895f233e898382ccb3cbf34f33f3245c1be12498c56c72542061324074c&o=&hp=1",
    altImg: "Les serres protègent les plantations les plus fragiles du potager",
    children: "Les serres protègent les plantations les plus fragiles du potager.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/81055037.jpg?k=72068fd13d18e81c85dad74e050ab3a3c8791d8b2b4c96b48830c478cef32ef1&o=&hp=1",
    altImg:
      "Le potager, sur le côté gauche du jardin, offre une multitude de légumes variés chaque année",
    children:
      "Le potager, sur le côté gauche du jardin, offre une multitude de légumes variés chaque année.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401643994.jpg?k=3383a48fc2f449dc93b7dc6fb0d10d13af3a6248a24f3f65197843b8d10450ce&o=&hp=1",
    altImg:
      "Le auvent en bois ainsi que le barnum sont à votre entière disposition pour prendre le petit-déjeuner et garer vos motos",
    children:
      "Le auvent en bois ainsi que le barnum sont à votre entière disposition pour prendre le petit-déjeuner et garer vos motos.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401644024.jpg?k=9e24d35834d6f6726b512d76567ddabb74d8e617654dc970489c750ce4d26ee0&o=&hp=1",
    altImg: "Votre confort est notre priorité",
    children: "Votre confort est notre priorité.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401643986.jpg?k=e495855934751e1099848e439956ccf6ee66fd55365e7cdf91e4171cb24eb0b8&o=&hp=1",
    altImg: "L'établissement convient également parfaitement aux amateurs de moto",
    children: "L'établissement convient également parfaitement aux amateurs de moto.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401644033.jpg?k=147429333db8c5668a7ef66134ed1fc0a6f612f27e664d953dbbbf6a36cc6ca3&o=&hp=1",
    altImg:
      "Vous pouvez utiliser le terrain de pétanque sur le côté droit de la maison, entre vous, ou bien contre vos hôtes",
    children:
      "Vous pouvez utiliser le terrain de pétanque sur le côté droit de la maison, entre vous, ou bien contre vos hôtes !",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401643988.jpg?k=421715b55acd282e192ae707dc25afc2f5c0a15a0210c49d77e1900c1b2734b2&o=&hp=1",
    altImg: "De multiples fleurs et plantes sont plantées tout autour de la maison",
    children: "De multiples fleurs et plantes sont plantées tout autour de la maison.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401644017.jpg?k=9ae0ab295295ab068ed91365d790b29a23b28745295bcf502aeb418633ec84a0&o=&hp=1",
    altImg:
      "Nous avons 3 chats, Mina (sur la photo), Mazeth et Mistral. Ce sont des chats très discrets, tout comme leurs hôtes",
    children:
      "Nous avons 3 chats, Mina (sur la photo), Mazeth et Mistral. Ce sont des chats très discrets, tout comme leurs hôtes !",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/81053140.jpg?k=34787d92a3c145ddb5624e38943080b93550b407dca2d576438bb8892c25f304&o=&hp=1",
    altImg: "Si vous êtes un amateur de champignons, vous allez adorer randonner dans les environs",
    children:
      "Si vous êtes un amateur de champignons, vous allez adorer randonner dans les environs.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/81055337.jpg?k=0c6567b52325c07d4fb4c98d71ae5de40c2d6fd98faac0fe6e9f22f44e69713f&o=&hp=1",
    altImg: "Les fruits et légumes du jardin aident à la créativité culinaire",
    children: "Les fruits et légumes du jardin aident à la créativité culinaire.",
  },
  {
    srcIgm:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/81055669.jpg?k=d27f86b710bc3f506377bba5abaa9cb6a58cf199a3f401234872e0fb2b1d0937&o=&hp=1",
    altImg: "Le cerisier nous gâte chaque année",
    children: "Le cerisier nous gâte chaque année.",
  },
];

type Props = {
  isGrid: boolean;
  menuOpened: boolean;
  seeThePhotosBtn: boolean;
  openOrCloseMenu: boolean
  isPhotosMenuOff: boolean;
  openPhotosMenu: () => void;
};

function BootstrapCarousel({
  isGrid,
  menuOpened,
  seeThePhotosBtn,
  openOrCloseMenu,
  isPhotosMenuOff,
  openPhotosMenu,
}: Props) {
  return (
    <>
      <div
        onClick={openPhotosMenu}
        id="slideImgInBigScreenBg"
        className={seeThePhotosBtn ? "active" : undefined}
      ></div>
      <div id="carousel">
        <div id="slideImgInBigScreenContainer" className={seeThePhotosBtn ? "active" : undefined}>
          <div id="slideContainer" className={isGrid ? "grid" : undefined}>
            {imgList.map((img, index) => (
              <img
                key={index}
                className={menuOpened ? "slideImg menuOpened" : "slideImg menuOpened displayNone"}
                src={img.srcIgm}
                alt={img.altImg}
              />
            ))}

            <div className={isPhotosMenuOff ? "slideIndex p" : "slideIndex p none"}>
              {imgList.length} photos
            </div>

            <div
              onClick={openPhotosMenu}
              className={
                isGrid ? "slideBtn photosMenuTrigger gridIsOn" : "slideBtn photosMenuTrigger"
              }
            >
              <span className="seeThePhotos">{openOrCloseMenu ? "Voir les photos" : "Fermer"}</span>
              <svg
                className={openOrCloseMenu ? "imgIcon" : "imgIcon none"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 
                  64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 
                  3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192c26.5 0 
                  48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z"
                />
              </svg>
              <svg
                className={openOrCloseMenu ? "xmarkIcon none" : "xmarkIcon"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 
                  54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 
                  265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                />
              </svg>
            </div>

            <div id="bootstrapCarouselWrapper" className={isGrid ? "none" : undefined}>
              <Carousel>
                {imgList.map((img, index) => (
                  <Carousel.Item key={index}>
                    <img className="slideImg" src={img.srcIgm} alt={img.altImg} />
                    <Carousel.Caption>
                      <p className="slideText">{img.children}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BootstrapCarousel;
