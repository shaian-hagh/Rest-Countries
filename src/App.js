import Navbar from './components/Navbar'
import Country from './components/Country'
import Information from './components/Information'
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Country />
      <Information />
      <Footer />
    </div>
  );
}

export default App;
