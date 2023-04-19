import React from 'react';
import olivia from './Obrazky/Olivia.PNG';
import oliviamp3 from './mp3/Olivia.mp3';
import { Link} from 'react-router-dom';

function Olivia() {
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
                    <img className="obrsam" src={olivia} alt="" />
                </div>
                <div className="obsahknihy">
                    <div className="urivokknihy">
                        <p>
                            Olívia, mladá hrdinka tohto príbehu, miluje husle a svoju rodinu. Túži po pokojnom živote, 
                            v ktorom by sa mohla venovať predovšetkým hudbe a sebe... Lenže život býva komplikovaný 
                            a nie vždy sa nám darí plniť si sny. Olívia zakopáva o problémy, ktoré ju okrádajú o úsmev, 
                            no hrejivé situácie jej dávajú vieru a silu pokračovať. A keďže osud je nevyspytateľný, 
                            pripletie jej do cesty niekoho, kto ju zahrnie láskavosťou a pochopením.
                        </p>
                    </div>
                    <div className="play">
                        <div className="mp3">
                            <p>e-kniha demo:</p>
                            <audio controls>
                                <source src={oliviamp3} type="audio/mpeg" />
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

export default Olivia;