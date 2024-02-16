
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActionSlider from "./ActionSlider";
import PopularCategores from "./PopularCategores";
import ProductSlider from "./ProductSlider";
import TopSlider from "./TopSlider";
import Partnerslider from "./Partnerslider";
import ShopAddress from "./ShopAddress";
import GoogleView from "./GoogleView";

function Home() {
  return (
    <>
      <section className="bannerMain">
        <TopSlider />
      </section>
      <section className="categorySection">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-light text-center mb-5">BELIEBTE KATEGORIEN</h2>
              <PopularCategores />
            </div>
          </div>
        </div>
      </section>
      <section className="categorySectionSlider">
        <div className="container">
          <div className="row">
            <ProductSlider />
          </div>
        </div>
      </section>
      <section className="categorySectionSlider sliderSecond">
        <div className="container">
          <h2 className="text-light mb-3 mb-md-5">AKTIONEN</h2>
          <div className="row">
            <ActionSlider />
          </div>
        </div>
      </section>
      <section className="categorySectionSlider sliderSecond">
        <div className="container">
          <h2 className="text-light mb-3 mb-md-5">PARTNER</h2>
          <div className="row">
            <Partnerslider />
          </div>
        </div>
      </section>
      <GoogleView />
      <ShopAddress />

    </>
  );
}
export default Home;