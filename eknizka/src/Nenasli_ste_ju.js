import React from 'react';
import { Link} from 'react-router-dom';
import FamilyMembers from './FamilyMembers';

function Nenaslisteju() {
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
                    <Link style={{ textDecoration: 'none' }} to="/eKnižka" className="hlavna ">
                        Domov
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/Katalog" className="hlavna">
                        Katalog
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/INSERT" className="hlavna aktivne">
                        INSERT
                    </Link>
                </div>
            </div>
            <div className="horna_lista">
                <center>
                    <Link style={{ textDecoration: 'none' }} to="/VYPIS_UDAJOV" className="hlavna">
                        VYPIS_UDAJOV
                    </Link>
                </center>
            </div>

            <FamilyMembers />

        </>
    );
}

export default Nenaslisteju;