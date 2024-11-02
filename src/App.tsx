import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar.tsx';
import { Home } from './pages/Home.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
