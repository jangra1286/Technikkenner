import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from './ProductSlider';

function AktuelleWerbung() {
  return (
    <>
      <section class="innerPageBanner">
        <img src="assets/images/Headerbanner-Prospekte.jpg" alt="" />
      </section>
      <div class="innepageBody">
        <div class="catelogSection">
          <div class="container">
            <div class="card catelogCard">

              <div class="card-body">
                <h2 class="card-title text-light m-0">UNSERE AKTUELLEN ANGEBOTE</h2>
                <div class="cardDetails">
                  <div class="row">
                    <div class="col-md-4">

                      ASs
                    </div>

                    <div class="col-md-4">

                      ASs
                    </div>

                    <div class="col-md-4">

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