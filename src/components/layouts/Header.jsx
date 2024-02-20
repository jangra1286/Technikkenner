import { React, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import axios from '../../axiosConfig';
function Header() {
    const [shopLocation, setshopLocation] = useState(2);
    const [Article, updateArticle] = useState({ title: '' })
    useEffect(() => {
        axios.get(`/${shopLocation}`)
            .then(response => {
                // Handle the response
                console.log(response.data);
            })
            .catch(error => {
                // Handle errors
                console.error(error);
            });
    }, [shopLocation]);

    const handleClick = (value) => {
        console.log('hi');
        setshopLocation(value);
    };
    const location = [{ name: 'Dessau', Id: 72 },
    { name: 'Duderstadt', Id: 2 },
    { name: 'Halberstadt', Id: 68 },
    { name: 'Jena', Id: 69 },
    { name: 'Sangerhausen', Id: 3 },
    { name: 'Quedliburg', Id: 73 },
    { name: 'Bitterfeld-Wolfen', Id: 70 },
    { name: 'Wernigerode', Id: 71 }];
    return (
        <div className="container-fluid ">
            <div className="row align-items-stretch">
                <div className=" col-xl-4 col-lg-3 p-0 text-end logoWrap">
                    <img className="logoMain" src="assets/images/MEDIMAX-2021_Logo.png" alt="" />
                </div> <div className="col-xl-4 col-lg-5 p-0 text-center position-relative yellow-stripe">
                    <div className="menuSearch d-flex justify-content-between align-items-center">
                        <button className="toogle_menu border-0 bg-transparent d-flex align-items-center">
                            <img src="assets/images/Icon_Menü.png" alt="" className="me-3" />
                            Menü
                        </button>
                        <div className="dropMenu-location text-start">
                            <ul>
                                <li><NavLink to="/AktuelleWerbung" className="nav__link toogle_menu">Aktuelle Werbung</NavLink></li>
                                <li>Aktionen</li>
                                <li>Karriere</li>
                                <li>Kontakt</li>
                                <li>Partner</li>
                                <li>Projektanfrage</li>
                                <li>Videothek</li>

                            </ul>
                        </div>
                        <form className="header-search">
                            <input type="text" placeholder="Search" name="search" />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 p-0 text-start last-area-header position-relative">
                    <div className="cart-location-area d-flex justify-content-between align-items-center">
                        <div className="locationBtn position-relative ">
                            <button className="locationToggle">
                                <img src="assets/images/Icon_Standort.png" alt="" />
                                <span>Mein Markt</span>
                                <img className="ms-3 me-0" src="assets/images/Icon_Dropdown.png" alt="" />
                            </button>
                            <div className="dropMenu-location">
                                <ul>

                                    {location.map((location) => (
                                        <li> <a key={location.Id} onClick={() => handleClick(location.Id)}>{location.name}</a></li>
                                    ))

                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="call-cart">
                            <ul className="d-flex">
                                <li><a href=""><img src="assets/images/Icon_Kontakt.png" alt="" /></a></li>
                                <li><a href=""><img src="assets/images/Icon_Warenkorb.png" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header