import React from 'react';
import lekarnikovadcera from './Obrazky/lekarnikova_dcera.PNG';
import lekarnikovadceramp3 from './mp3/Lekarnikovadcera.mp3';
import { Link} from 'react-router-dom';

function Lekarnikovadcera() {
    return (
        <>
            <div className="horna_lista nav-flex">
                <div className="nav-flex0 logos">
                    <Link style={{ textDecoration: 'none' }} to="/eKnižka" className="Logo">
                        e-Knižka
                    </Link>
                    <p className="motto">"Knižka pre každého"</p>
                </div>

               <div className="nav-flex0 odkazy">
                   <Link style={{ textDecoration: 'none' }} to="/eKnižka" className="hlavna">
                      Domov
                   </Link>
                   <Link style={{ textDecoration: 'none' }} to="/Katalog" className="hlavna aktivne">
                       Katalog
                  </Link>
                   <Link style={{ textDecoration: 'none' }} to="/INSERT" className="hlavna">
                        INSERT
                   </Link>
               </div>
            </div>
            <div className="telo telostranky">
                <div className="obrkniha">
                    <img className="obrsam" src={lekarnikovadcera} alt="" />
                </div>
                <div className="obsahknihy">
                    <div className="urivokknihy">
                        <p>
                            Lilly pomáha v otcovej v lekárni, suší bylinky, zručne pripravuje rôzne mastičky a lieky, 
                            no stále ju prenasledujú spomienky na matku, ktorá pred pár rokmi bez slova zmizla. 
                            Celá dedina si o tom šepká, ale jej otec o tom odmieta hovoriť. A ona celé dni sníva 
                            o ďalekých svetoch - o cestovaní, dobrodružstvách a láske. Keď jej príbuzní ponúknu 
                            možnosť bývať s nimi v Londýne, Lilly objaví nielen radosti či nástrahy vyššej 
                            spoločnosti a ctiteľov, ale aj stopy vedúce k matke. Nájde však to, čo hľadá – 
                            pravdu o minulosti a lásku do budúcnosti?
                        </p>
                    </div>
                    <div className="play">
                        <div className="mp3">
                            <p>e-kniha demo:</p>
                            <audio controls>
                                <source src={lekarnikovadceramp3} type="audio/mpeg" />
                            </audio>
                        </div>
                        <div className="buton">
                            <button type="button" className="btt button4">
                                Kúpiť teraz za: 29.90€
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lekarnikovadcera;