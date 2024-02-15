import React from 'react'
import Slider from "react-slick";

function ActionSlider() {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    }
    return (
        <Slider {...settings} className="sliderCategories_second commonSlick">
            <div className="imageWrap">
                <img src="assets/images/Kategorie-Prospekte.jpg" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Kategorie-Technikkenner.jpg" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Kategorie-Tippspiel.jpg" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Kategorie-Prospekte.jpg" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Kategorie-Technikkenner.jpg" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Kategorie-Tippspiel.jpg" alt="" />
            </div>

        </Slider>
    )
}

export default ActionSlider