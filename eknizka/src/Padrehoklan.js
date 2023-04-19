import React from 'react';
import padrehoklan from './Obrazky/padreho_klan.PNG';
import padrehoklanmp3 from './mp3/Padrehoklan.mp3';
import { Link} from 'react-router-dom';

function Padrehoklan() {
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
                    <img className="obrsam" src={padrehoklan} alt="" />
                </div>
                <div className="obsahknihy">
                    <div className="urivokknihy">
                        <p>
                            Kryli a zahladzovali prúsery spriaznených podnikateľov a oligarchov, ktorí mali už dávno sedieť v base. 
                            Milióny z pokútnych kšeftov prali cez čínsku práčku, aby si ich potom delili na rušnom bulvári ako 
                            bossovia talianskej mafie, keď vyplácali svojich vojakov za predaj heroínu alebo koksu.
                        </p>
                    </div>
                    <div className="play">
                        <div className="mp3">
                            <p>e-kniha demo:</p>
                            <audio controls>
                                <source src={padrehoklanmp3} type="audio/mpeg" />
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

export default Padrehoklan;