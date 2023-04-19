import React from 'react';
import { Link} from 'react-router-dom';
import Vlci_brat from './Obrazky/Vlci_brat.jpg';
import Olivia from './Obrazky/Olivia.PNG';
import zaklinac from './Obrazky/zaklinac.png';
import lekarnikova_dcera from './Obrazky/lekarnikova_dcera.PNG';
import padreho_klan from './Obrazky/padreho_klan.PNG';

function Katalog() {
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
            <div className="row telostranky">
                <div className="container">
                    <div className="section-title">
                        <h1 className="display-4">Dostupné knihy</h1>
                    </div>
                    <div className="katalog">
                        <div className="stlpec">
                            <div className="knihy">
                                <div className="obrazok">
                                    <Link style={{ textDecoration: 'none' }} to="/vlci-brat">
                                        <img class="obr" src={Vlci_brat} alt=""/>
                                    </Link>
                                </div>
                                <div className="text">
                                    <Link style={{ textDecoration: 'none', color: 'black' }}  to="/vlci-brat">
                                        <h3>Vlčí brat</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className="knihy">
                                <div className="obrazok">
                                    <Link style={{ textDecoration: 'none' }} to="/Olivia">
                                        <img class="obr" src={Olivia} alt=""/>
                                    </Link>
                                </div>
                                <div className="text">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/Olivia">
                                        <h3>Olívia</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>    
                        <div className="stlpec">
                            <div className="knihy">
                                <div className="obrazok">
                                    <Link style={{ textDecoration: 'none' }} to="/Zaklinac">
                                        <img class="obr" src={zaklinac} alt=""/>
                                    </Link>
                                </div>
                                <div className="text">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/Zaklinac">
                                        <h3>Zaklínač</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className="knihy">
                                <div className="obrazok">
                                    <Link style={{ textDecoration: 'none' }} to="/Lekarnikovadcera">
                                        <img class="obr" src={lekarnikova_dcera} alt=""/>
                                    </Link>
                                </div>
                                <div className="text">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/Lekarnikovadcera">
                                        <h3>Lekárnikova dcéra</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="stlpec">    
                            <div className="knihy">
                                <div className="obrazok">
                                    <Link style={{ textDecoration: 'none' }} to="/Padrehoklan">
                                        <img class="obr" src={padreho_klan} alt=""/>
                                    </Link>
                                </div>
                                <div className="text">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/Padrehoklan">
                                        <h3>Padreho klan</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className="knihy">
                                <div className="obrazok">
                                    <img className="obr" src={Vlci_brat} alt=""/>
                                </div>
                                <div className="text">
                                    <h3>Kniha 6</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Katalog;