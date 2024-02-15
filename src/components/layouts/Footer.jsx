import React from 'react'

function Footer() {
    return (
        <footer className="mainFooter py-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <ul className="footerMenu">
                            <li><a href="#">AKTUELLE</a></li>
                            <li><a href="#">WERBUNG</a></li>
                            <li><a href="#">AKTIONEN</a></li>
                            <li><a href="#">FILIALEN</a></li>
                            <li><a href="#">KARRIERE</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul className="footerMenu">
                            <li><a href="#">KONTAKT</a></li>
                            <li><a href="#">PARTNER</a></li>
                            <li><a href="#">PROJEKTANFRAGE</a></li>
                            <li><a href="#">VIDEOTHEK</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul className="footerMenu">
                            <li><a href="#">AGB</a></li>
                            <li><a href="#">DATENSCHUTZ</a></li>
                            <li><a href="#">WIDERRUFSRECHT</a></li>
                            <li><a href="#">NUTZUNGSBEDINGUNGEN</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="socialIcons d-flex justify-content-between align-items-start">
                            <ul className="d-flex justify-content-start align-items-center">
                                <li><a href=""><img src="assets/images/Icon_Tippspiel.png" alt="" /></a></li>
                                <li><a href=""><img src="assets/images/Icon_Fitrik.png" alt="" /></a></li>

                                <li><a href=""><img src="assets/images/Icon_P&F.png" alt="" /></a></li>

                                <li><a href=""><img src="assets/images/Icon_P&F.png" alt="" /></a></li>
                                <li><a href=""><img src="assets/images/Icon_P&F.png" alt="" /></a></li>
                                <li><a href=""><img src="assets/images/Icon_P&F.png" alt="" /></a></li>

                            </ul>

                            <div className="ms-right"><a href=""><img src="assets/images/Logo_MS Media.png" alt="" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer