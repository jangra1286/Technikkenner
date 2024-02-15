import React from 'react';

function PopularCategores() {

    return (
        <ul className="categoriesmain d-flex justify-content-center align-items-center">
            <li className="text-center">
                <a href="#">
                    <img className="mb-3" src="assets/images/Kategorie_Smartphone.png" alt="" />
                    <span>Smartphone</span>
                </a>
            </li>

            <li className="text-center">
                <a href="#">
                    <img className="mb-3" src="assets/images/Kategorie_TV.png" alt="" />
                    <span>Tv</span>
                </a>
            </li>

            <li className="text-center">
                <a href="#">
                    <img className="mb-3" src="assets/images/Kategorie_Laptop.png" alt="" />
                    <span>Laptop</span>
                </a>
            </li>

            <li className="text-center">
                <a href="#">
                    <img className="mb-3" src="assets/images/Kategorie_Laptop.png" alt="" />
                    <span>Kühlschrank</span>
                </a>
            </li>

            <li className="text-center">
                <a href="#">
                    <img className="mb-3" src="assets/images/Kategorie_Waschmaschine.png" alt="" />
                    <span>Waschmaschine</span>
                </a>
            </li>
        </ul>
    )
}

export default PopularCategores