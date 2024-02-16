import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from './ProductSlider';

function AktuelleWerbung() {
  return (
    <>
      <section className="innerPageBanner">
        <img src="assets/images/Headerbanner-Prospekte.jpg" alt="" />
      </section>
      <div className="innepageBody">
        <div className="catelogSection">
          <div className="container">
            <div className="card catelogCard">

              <div className="card-body">
                <h2 className="card-title text-light m-0">UNSERE AKTUELLEN ANGEBOTE</h2>
                <div className="cardDetails">
                  <div className="row">
                    <div className="col-md-4">

                      ASs
                    </div>

                    <div className="col-md-4">

                      ASs
                    </div>

                    <div className="col-md-4">

                      ASs
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductSlider />
      </div>
    </>
  )
}

export default AktuelleWerbung