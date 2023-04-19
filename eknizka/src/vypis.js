import React, { useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';

function Zobrazenie() {
  const [familyMembers, setFamilyMembers] = useState([]);
  
  function handleClick() {
    axios.get('http://localhost:3001/get')
      .then((response) => {
        setFamilyMembers(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  };

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
          <Link style={{ textDecoration: 'none' }} to="/INSERT" className="hlavna">
            INSERT
          </Link>
          </div>
      </div>
      <div className="horna_lista">
                <center>
                    <Link style={{ textDecoration: 'none' }} to="/VYPIS_UDAJOV" className="hlavna aktivne">
                        VYPIS_UDAJOV
                    </Link>
                </center>
            </div>
    <center>
        <div className="telostranky">
        <button type="button" onClick={handleClick}>Zobraziť členov</button>
        <table>
            <thead>
                <tr>
                    <th style={{padding: '15px'}}>Meno</th>
                    <th style={{padding: '15px'}}>Priezvisko</th>
                    <th style={{padding: '15px'}}>Vek</th>
                    <th style={{padding: '15px'}}>Príbuzenský vzťah</th>
                </tr>
            </thead>
            <tbody>
                {familyMembers.map((member, index) => (
                <tr key={index}>
                    <td style={{padding: '15px'}}>{member.meno}</td>
                    <td style={{padding: '15px'}}>{member.priezvisko}</td>
                    <td style={{padding: '15px'}}>{member.vek}</td>
                    <td style={{padding: '15px'}}>{member.pribuzenstvo}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    </center>
  </>
  );
}

export default Zobrazenie;