import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailPage from './pages/MovieDetailPage';
import Footer from './components/Footer';
import Header from './components/Header';


const App = () => {

  return (
    
      <div>        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Routes>
      <Footer />
      </div>
    
  );
};

export default App;
