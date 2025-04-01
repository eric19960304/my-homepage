import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './main.css';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import './theme.css';

function App() {
  return (
      <Router>
          <div className="app">
            <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/aboutme" element={<AboutMe />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App
