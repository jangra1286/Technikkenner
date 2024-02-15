import React from 'react'
import Slider from "react-slick"

function ProductSlider() {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }]
    }
    return (
        <div {...settings} class="innerPageBottom">
            <div class="container">
                <h2 class="text-light mb-3 mb-md-5">2023-01 Flyer KW01</h2>
                <Slider class="innerPageSlider commonSlick">
                    <div class="imageWrap">
                        <div class="cardAreaInner">
                            <img src="assets/images/Kategorie-Prospekte.jpg" alt="" />
                            <h5 class="mb-3">XIAOMI Redmi 10 2022 64 GB</h5>
                            <div class="priceCard">1079,00 €</div>
                            <button class="reserveButton">RESERVIEREN</button>
                        </div>
                    </div>

                    <div class="imageWrap">
                        <div class="cardAreaInner">
                            <img src="assets/images/Kategorie-Prospekte.jpg" alt="" />
                            <h5 class="mb-3">XIAOMI Redmi 10 2022 64 GB</h5>
                            <div class="priceCard">149,00 €</div>
                            <button class="reserveButton">RESERVIEREN</button>
                        </div>
                    </div>

                    <div class="imageWrap">
                        <div class="cardAreaInner">
                            <img src="assets/images/Kategorie-Prospekte.jpg" alt="" />
                            <h5 class="mb-3">AEG Akku-Stielsauger AP81UB25GG</h5>
                            <div class="priceCard">299,00 €</div>
                            <button class="reserveButton">RESERVIEREN</button>
                        </div>
                    </div>

                    <div class="imageWrap">
                        <div class="cardAreaInner">
                            <img src="assets/images/Kategorie-Prospekte.jpg" alt="" />
                            <h5 class="mb-3">LENOVO IdeaPad3</h5>
                            <div class="priceCard">499,00 €</div>
                            <button class="reserveButton">RESERVIEREN</button>
                        </div>
                    </div>

                    <div class="imageWrap">
                        <div class="cardAreaInner">
                            <img src="assets/images/Kategorie-Prospekte.jpg" alt="" />
                            <h5 class="mb-3">XIAOMI Redmi 10 2022 64 GB</h5>
                            <div class="priceCard">149,00 €</div>
                            <button class="reserveButton">RESERVIEREN</button>
                        </div>
                    </div>

                    <div class="imageWrap">
                        <div class="cardAreaInner">
                            <img src="assets/images/Kategorie-Prospekte.jpg" alt="" />
                            <h5 class="mb-3">LENOVO IdeaPad3</h5>
                            <div class="priceCard">499,00 €</div>
                            <button class="reserveButton">RESERVIEREN</button>
                        </div>
                    </div>

                </Slider>


            </div>

        </div>
    )
}

export default ProductSlider