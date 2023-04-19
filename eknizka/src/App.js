import './App.css';
import TeloStranky from './eKnižka';
import Katalog from './Katalog.js';
import Nenaslisteju from './Nenasli_ste_ju.js';
import Zaklinac from './Zaklinac';
import Vlcibrat from './Vlcibrat';
import Padrehoklan from './Padrehoklan';
import Olivia from './Olivia';
import Lekarnikovadcera from './Lekarnikovadcera';
import Zobrazenie from './vypis';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TeloStranky />} />
        <Route path='/eKnižka' element={<TeloStranky />} />
        <Route path='/Katalog' element={<Katalog />} />
        <Route path='/INSERT' element={<Nenaslisteju />} />
        <Route path='/Zaklinac' element={<Zaklinac />} />
        <Route path='/Vlci-brat' element={<Vlcibrat />} />
        <Route path='/Padrehoklan' element={<Padrehoklan />} />
        <Route path='/Olivia' element={<Olivia />} />
        <Route path='/Lekarnikovadcera' element={<Lekarnikovadcera />} />
        <Route path='/VYPIS_UDAJOV' element={<Zobrazenie />} />
      </Routes>
      <footer className="footer">
        <p>Webové technológie 2022</p>
      </footer>
      <script src="java/main.js"></script>
    </BrowserRouter>
  );
}

export default App;
