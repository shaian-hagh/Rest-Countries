import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Layout } from './pages/Layout/Layout';
import './App.css';

export const App = () => {

  return (
    <div className="container">
      <Router>

        <Routes>

          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
          </Route>
          
        </Routes>

      </Router>
    </div>
  );
}