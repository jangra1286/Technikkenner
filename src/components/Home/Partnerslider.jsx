import React from 'react'
import Slider from "react-slick"

function Partnerslider() {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false

                }
            }]

    }
    return (
        <Slider {...settings} className="sliderCategories_third commonSlick">
            <div className="imageWrap">
                <img src="assets/images/Bubble_AEG.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_AVM.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Bauknecht.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Beurer.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Bosch.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Caso.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Graef.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Grundig.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_hama.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_hd+.png" alt="" />
            </div>


            <div className="imageWrap">
                <img src="assets/images/Bubble_jura.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Kärcher.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Kitchenaid.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Leifheit.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Miele.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Moak.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Neff.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Siemens.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Sodastream.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Techfant.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Technisat.png" alt="" />
            </div>

            <div className="imageWrap">
                <img src="assets/images/Bubble_Telekom.png" alt="" />
            </div>

        </Slider>
    )
}

export default Partnerslider