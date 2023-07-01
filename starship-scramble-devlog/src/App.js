import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/Starship-Scramble-devlog" element={<Home />} />
    </Routes>
    </Router>
  </>
  );
}

export default App;
