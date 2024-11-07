import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Preloader from './components/PreLoader';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader /> 
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
