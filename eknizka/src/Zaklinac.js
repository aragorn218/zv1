import React from 'react';
import zaklinac from './Obrazky/zaklinac.png';
import zaklinacmp3 from './mp3/Zaklinac.mp3';
import { Link} from 'react-router-dom';

function Zaklinac() {
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
                    <img className="obrsam" src={zaklinac} alt="" />
                </div>
                <div className="obsahknihy">
                    <div className="urivokknihy">
                        <p>
                            Exkluzívne vydanie úvodnej poviedky Zaklínač zo zbierky Posledné
                            želanie. Zaklínač Geralt z Rivie prichádza do mesta Wizyma v kráľovstve
                            Temeria, aby prelomil kliatbu dcéry kráľa Foltesta, ktorú začarovali za
                            strigu. Namiesto vrúcneho objatia ho víta nevraživosť obyvateľov a
                            postupne zisťuje, že osud strigy je oveľa viac zamotaný a úzko prepletený
                            s intrigami šľachticov na kráľovskom dvore.
                        </p>
                    </div>
                    <div className="play">
                        <div className="mp3">
                            <p>e-kniha demo:</p>
                            <audio controls>
                                <source src={zaklinacmp3} type="audio/mpeg" />
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

export default Zaklinac;