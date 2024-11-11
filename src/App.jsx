import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import Preloader from './components/PreLoader';
import CheckOut from './pages/CheckOut';
import Book from './pages/Book';
import BookCover from './pages/BookCover';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader /> 
      ) : (
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/book/generate' element={<Book/>} />
            <Route path='/book/generate/cover' element={<BookCover/>} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
