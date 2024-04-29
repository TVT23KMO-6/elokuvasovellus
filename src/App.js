import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Groups from './pages/Groups';
import Home from './pages/Home';
import Movies from './pages/Movies';
import NotFound from './pages/Notfound';
import { Route, Routes } from 'react-router-dom';
import Shows from './pages/Shows';
import Favorite from './pages/Favorite';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/groups' element={<Groups />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/shows' element={<Shows />} />
          <Route path='/favorites' element={<Favorite />} />
          <Route path='/signin' element={<SignIn />} /> {/* Route for sign-in page */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;