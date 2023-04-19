import React from 'react';
import { Link} from 'react-router-dom';
import Vlci_brat from './Obrazky/Vlci_brat.jpg';


function TeloStranky() {
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
                <Link style={{ textDecoration: 'none' }} to="/eKnižka" className="hlavna aktivne">
                    Domov
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/Katalog" className="hlavna">
                    Katalog
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/INSERT" className="hlavna">
                    INSERT
                </Link>
            </div>
        </div>
        <div className="abc telostranky">
            <div className="cba">
                <h4 className="Nazov_tabulky" style={{ paddingBottom: '30px' }}>
                    TOP 5 knižiek tohto mesiaca:
                </h4>
                <ul className="tabulka">
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/vlci-brat">
                        <li style={{ paddingBottom: '30px' }}>
                        <b>1. Vlčí brat</b>
                        </li>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/zaklinac">
                        <li style={{ paddingBottom: '30px' }}>2. Zaklínač</li>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/padrehoklan">
                        <li style={{ paddingBottom: '30px' }}>3. Padreho klan</li>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/olivia">
                        <li style={{ paddingBottom: '30px' }}>4. Olivia</li>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/lekarnikovadcera">
                        <li style={{ paddingBottom: '30px' }}>5. Lekárnikova dcéra</li>
                    </Link>
                </ul>
            </div>
            <div className="cba">
                <Link style={{ textDecoration: 'none' }} to="/vlci-brat">
                    <img className="Topobr" src={Vlci_brat} alt="" style={{ objectFit: 'cover' }}/>
                </Link>
            </div>
        </div>
    </>
  );
}

export default TeloStranky;