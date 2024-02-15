import React from 'react'
import Slider from "react-slick";

function TopSlider() {
    const settings = {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings}  className="bannerMain">
        <div className="slide"><img src="assets/images/Headerbanner.jpg" alt="" /></div>
        <div className="slide"><img src="assets/images/Headerbanner-Videos.jpg" alt="" /></div>
        <div className="slide"><img src="assets/images/Headerbanner-Prospekte.jpg" alt="" /></div>
        <div className="slide"><img src="assets/images/Headerbanner-NEFF.png" alt="" /></div>
        <div className="slide"><img src="assets/images/Headerbanner-MMC.jpg" alt="" /></div>
        <div className="slide"><img src="assets/images/Headerbanner-JURA.png" alt="" /></div>
        <div className="slide"><img src="assets/images/Headerbanner-Geräte.jpg" alt="" /></div>
      </Slider>
  )
}

export default TopSlider