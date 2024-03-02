import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import { Navbar } from './pages/Layout/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Layout } from './pages/Layout/Layout';
import { Footer } from './pages/Layout/Footer/Footer';
import { NotFound } from './pages/NotFound/NotFound';
import { CountryInfo } from './pages/Home/Country/CountryInfo';
import './App.css';

export const App = () => {

  return (
    <div className="container">
      <Router>
        <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path='CountryInfo' element={<CountryInfo />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}