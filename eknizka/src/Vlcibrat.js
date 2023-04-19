import React from 'react';
import vlcibrat from './Obrazky/Vlci_brat.jpg';
import vlcibratmp3 from './mp3/Vlci_brat.mp3';
import { Link} from 'react-router-dom';

function Vlcibrat() {
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
                    <img className="obrsam" src={vlcibrat} alt="" />
                </div>
                <div className="obsahknihy">
                    <div className="urivokknihy">
                        <p>
                            Fantasy, v ktorej sa bojuje, čaruje a nie každé zviera má len jednu podobu. 
                            Čarodejnica Zuna uniká z rodnej dediny. Pred prenasledovateľmi sa ukrýva 
                            v lesoch, kde stretáva túlavého psa. S jeho pomocou nachádza útočisko u 
                            starej ženy a jej vnuka Rovena. Zapletie sa do miestneho konfliktu, 
                            ale ani čary jej proti mocnému čarodejníkovi Korchovi nepomôžu. Dostáva 
                            sa do zajatia. Odhaľuje Korchovo desivé tajomstvo, využíva záujem zo 
                            strany miestneho kráľa a balansuje na hrane medzi láskou a bojom o život.
                        </p>
                    </div>
                    <div className="play">
                        <div className="mp3">
                            <p>e-kniha demo:</p>
                            <audio controls>
                                <source src={vlcibratmp3} type="audio/mpeg" />
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

export default Vlcibrat;