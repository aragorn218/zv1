import React, { useState } from 'react';
import axios from 'axios';

function FamilyMembers() {
  const [familyMembers, setFamilyMembers] = useState([]);
  
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const member = {
      meno: form.meno.value,
      priezvisko: form.priezvisko.value,
      vek: form.vek.value,
      pribuzenstvo: form.pribuzenstvo.value
    };

    axios.post('http://localhost:3001/create', member)
      .then((response) => {
        console.log(response);
        setFamilyMembers([...familyMembers, response.data]);
      })
      .catch((error) => {
        console.log(error);
      }
    );
    
  }

  return (
    <div className="telostranky">
      <center>
      <div className='formtabulka'>
        <form onSubmit={handleSubmit}>
          <label>
            Meno:
            <input type="text" name="meno" required />
          </label>
          <label>
            Priezvisko:
            <input type="text" name="priezvisko" required />
          </label>
          <label>
            Vek:
            <input type="number" name="vek" required />
          </label>
          <label>
            Príbuzenský vzťah:
            <select name="pribuzenstvo" required>
              <option value="otec">Otec</option>
              <option value="matka">Matka</option>
              <option value="brat">Brat</option>
              <option value="sestra">Sestra</option>
              <option value="syn">Syn</option>
              <option value="dcéra">Dcéra</option>
            </select>
          </label>
          <button type="submit">Pridať člena</button>
        </form>
      </div>
      </center>
    </div>
  );
}

export default FamilyMembers;
