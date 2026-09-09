import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BurgeloMockup from './pages/BurgeloMockup';
import Sidera from './pages/Sidera';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sidera" element={<Sidera />} />
        <Route path="/burgelo" element={<BurgeloMockup />} />
      </Routes>
    </Router>
  );
}

export default App;
