import React from 'react'

function ShopAddress() {
  return (
    <section className="contactArea">
        <div className="container">
            <div className="row">
                <div className="col-lg- 6 col-md-7 pe-md-0">
                    <div className="contactData">
                        <div className="row">
                            <div className=" col-lg-7 col-md-12">
                                <div className="contactInfo">
                                    <h6>MEDIMAX - DUDERSTADT</h6>
                                    <p>M.S. MEDIA ELECTRONIC DUDERSTADT GMBH</p>
                                    <p>ZUR FEILENFABRIK 437115 DUDERSTADT</p>

                                    <h6>TELEFON:</h6>
                                    <p><a href="tel:05527996890">05527 996890</a></p>

                                    <h6>E-MAIL:</h6>
                                    <p><a href="mailto:DUDERSTADT@TECHNIKKENNER.DE">DUDERSTADT@TECHNIKKENNER.DE</a></p>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-12">
                                <div className="contactInfo rightData">
                                    <h6>ÖFFNUNGSZEITEN</h6>
                                    <p>MO-FR: 10:00 - 19:00<span className="d-block">SA: 10:00 - 18:00</span></p>

                                    <img src="assets/images/Icon_Kontakt_Speichern-1.png" alt=""/>

                                    <img src="assets/images/Icon_Routenplaner.png" alt=""/>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-5 ps-md-0">
                    Map Here
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShopAddress