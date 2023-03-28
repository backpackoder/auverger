import React from "react";

import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";

type Props = {
  isGrid: boolean;
  menuOpened: boolean;
  seeThePhotosBtn: boolean;
  openOrCloseMenu: boolean;
  isPhotosMenuOff: boolean;
  openPhotosMenu: () => void;
};

export function BootstrapCarousel({
  isGrid,
  menuOpened,
  seeThePhotosBtn,
  openOrCloseMenu,
  isPhotosMenuOff,
  openPhotosMenu,
}: Props) {
  const { t } = useTranslation();

  const imgList = [
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/141304856.jpg?k=15da3496eaf8c2bd35a985a13a7f8c8e5ca9544fe4811f92be0b322ca03cb794&o=&hp=1",
      altImg: t("carousel.pic1"),
      children: `${t("carousel.pic1")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/141304846.jpg?k=b56c684d467a484053cc0aa25ebeac594b7c67ee3adcbcd95adecfec2b020d33&o=&hp=1",
      altImg: t("carousel.pic2"),
      children: `${t("carousel.pic2")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/141304824.jpg?k=41fe2e0ec63b1eeb8b41b15aacc3eecde54effc2bd85a6a1dcce79aa3f51f924&o=&hp=1",
      altImg: t("carousel.pic3"),
      children: `${t("carousel.pic3")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401644009.jpg?k=8e3e32113b9ebe407adcfb13fec79044b6495104202de0a26e7968aa99c4020b&o=&hp=1",
      altImg: t("carousel.pic4"),
      children: `${t("carousel.pic4")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/396068329.jpg?k=ae782e789c6fc769492ade33aa62c4b47db6342cf4cb424ff4ce60408eb50580&o=&hp=1",
      altImg: t("carousel.pic5"),
      children: `${t("carousel.pic5")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/75748484.jpg?k=ec8a84ea1dd3ae5dd68741feaa229af26435025dc478da42065495d6314b0e20&o=&hp=1",
      altImg: t("carousel.pic6"),
      children: `${t("carousel.pic6")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/101637024.jpg?k=49da771f41ef74d150d9023c0b30423fa163683afa609ea6b574cf8bd367432f&o=&hp=1",
      altImg: t("carousel.pic7"),
      children: `${t("carousel.pic7")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/75692812.jpg?k=6b4b164a4692b3d12281e2d16bef2a89635fe11bea9c2b5defed01e16e68cb19&o=&hp=1",
      altImg: t("carousel.pic8"),
      children: `${t("carousel.pic8")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/101637024.jpg?k=49da771f41ef74d150d9023c0b30423fa163683afa609ea6b574cf8bd367432f&o=&hp=1",
      altImg: t("carousel.pic9"),
      children: `${t("carousel.pic9")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/396084582.jpg?k=cf3e7c48bbe00cbee31f671c76c24e29c5ef33abff8be4b0c9b0a256a8c9ffc3&o=&hp=1",
      altImg: t("carousel.pic10"),
      children: `${t("carousel.pic10")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/78794406.jpg?k=4cb9cc076c8232e9e3f76f82399c5de225a93865e323b2ac1aac0119975498a7&o=&hp=1",
      altImg: t("carousel.pic11"),
      children: `${t("carousel.pic11")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/81054349.jpg?k=9313d147c52b0eebd746764328cb2eb10339bf267f524557d62745a75c8a10db&o=&hp=1",
      altImg: t("carousel.pic12"),
      children: `${t("carousel.pic12")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/78794080.jpg?k=13b31b3256919f713a53213436c424481477934328643a823fdab8b60f881361&o=&hp=1",
      altImg: t("carousel.pic13"),
      children: `${t("carousel.pic13")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401644048.jpg?k=6b97a895f233e898382ccb3cbf34f33f3245c1be12498c56c72542061324074c&o=&hp=1",
      altImg: t("carousel.pic14"),
      children: `${t("carousel.pic14")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/81055037.jpg?k=72068fd13d18e81c85dad74e050ab3a3c8791d8b2b4c96b48830c478cef32ef1&o=&hp=1",
      altImg: t("carousel.pic15"),
      children: `${t("carousel.pic15")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401643994.jpg?k=3383a48fc2f449dc93b7dc6fb0d10d13af3a6248a24f3f65197843b8d10450ce&o=&hp=1",
      altImg: t("carousel.pic16"),
      children: `${t("carousel.pic16")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401644024.jpg?k=9e24d35834d6f6726b512d76567ddabb74d8e617654dc970489c750ce4d26ee0&o=&hp=1",
      altImg: t("carousel.pic17"),
      children: `${t("carousel.pic17")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401643986.jpg?k=e495855934751e1099848e439956ccf6ee66fd55365e7cdf91e4171cb24eb0b8&o=&hp=1",
      altImg: t("carousel.pic18"),
      children: `${t("carousel.pic18")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401644033.jpg?k=147429333db8c5668a7ef66134ed1fc0a6f612f27e664d953dbbbf6a36cc6ca3&o=&hp=1",
      altImg: t("carousel.pic19"),
      children: `${t("carousel.pic19")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401643988.jpg?k=421715b55acd282e192ae707dc25afc2f5c0a15a0210c49d77e1900c1b2734b2&o=&hp=1",
      altImg: t("carousel.pic20"),
      children: `${t("carousel.pic20")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/401644017.jpg?k=9ae0ab295295ab068ed91365d790b29a23b28745295bcf502aeb418633ec84a0&o=&hp=1",
      altImg: t("carousel.pic21"),
      children: `${t("carousel.pic21")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/81053140.jpg?k=34787d92a3c145ddb5624e38943080b93550b407dca2d576438bb8892c25f304&o=&hp=1",
      altImg: t("carousel.pic22"),
      children: `${t("carousel.pic22")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/81055337.jpg?k=0c6567b52325c07d4fb4c98d71ae5de40c2d6fd98faac0fe6e9f22f44e69713f&o=&hp=1",
      altImg: t("carousel.pic23"),
      children: `${t("carousel.pic23")}.`,
    },
    {
      srcIgm:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/81055669.jpg?k=d27f86b710bc3f506377bba5abaa9cb6a58cf199a3f401234872e0fb2b1d0937&o=&hp=1",
      altImg: t("carousel.pic24"),
      children: `${t("carousel.pic24")}.`,
    },
  ];

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
              {imgList.length} {t("carousel.pictures")}
            </div>

            <div
              onClick={openPhotosMenu}
              className={
                isGrid ? "slideBtn photosMenuTrigger gridIsOn" : "slideBtn photosMenuTrigger"
              }
            >
              <span className="seeThePhotos">
                {openOrCloseMenu ? t("carousel.seePictures") : t("carousel.close")}
              </span>
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
