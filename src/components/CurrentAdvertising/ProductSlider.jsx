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
        <div  className="innerPageBottom">
            <div className="container">
                <h2 className="text-light mb-3 mb-md-5">2023-01 Flyer KW01</h2>
                <Slider {...settings} className="innerPageSlider commonSlick">
                    <div className="imageWrap">
                        <div className="cardAreaInner">
                            <img src="assets/images/Kategorie-Prospekte.jpg" alt="" />
                            <h5 className="mb-3">XIAOMI Redmi 10 2022 64 GB</h5>
                            <div className="priceCard">1079,00 €</div>
                            <button className="reserveButton">RESERVIEREN</button>
                        </div>
                    </div>

                    <div className="imageWrap">
                        <div className="cardAreaInner">
                            <img src="assets/images/Kategorie-Prospekte.jpg" alt="" />
                            <h5 className="mb-3">XIAOMI Redmi 10 2022 64 GB</h5>
                            <div className="priceCard">149,00 €</div>
                            <button className="reserveButton">RESERVIEREN</button>
                        </div>
                    </div>

                    <div className="imageWrap">
                        <div className="cardAreaInner">
                            <img src="assets/images/Kategorie-Prospekte.jpg" alt="" />
                            <h5 className="mb-3">AEG Akku-Stielsauger AP81UB25GG</h5>
                            <div className="priceCard">299,00 €</div>
                            <button className="reserveButton">RESERVIEREN</button>
                        </div>
                    </div>

                    <div className="imageWrap">
                        <div className="cardAreaInner">
                            <img src="assets/images/Kategorie-Prospekte.jpg" alt="" />
                            <h5 className="mb-3">LENOVO IdeaPad3</h5>
                            <div className="priceCard">499,00 €</div>
                            <button className="reserveButton">RESERVIEREN</button>
                        </div>
                    </div>

                    <div className="imageWrap">
                        <div className="cardAreaInner">
                            <img src="assets/images/Kategorie-Prospekte.jpg" alt="" />
                            <h5 className="mb-3">XIAOMI Redmi 10 2022 64 GB</h5>
                            <div className="priceCard">149,00 €</div>
                            <button className="reserveButton">RESERVIEREN</button>
                        </div>
                    </div>

                    <div className="imageWrap">
                        <div className="cardAreaInner">
                            <img src="assets/images/Kategorie-Prospekte.jpg" alt="" />
                            <h5 className="mb-3">LENOVO IdeaPad3</h5>
                            <div className="priceCard">499,00 €</div>
                            <button className="reserveButton">RESERVIEREN</button>
                        </div>
                    </div>

                </Slider>


            </div>

        </div>
    )
}

export default ProductSlider