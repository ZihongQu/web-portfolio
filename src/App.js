import { Container } from '@mui/material';
import gsap from 'gsap';
import {BrowserRouter, Routes , Route, Navigate } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import Parallax from './components/Parallax/Parallax';

function App() {
  return (
    <>
    <BrowserRouter>
          <Routes >
            <Route path='/' exact element={<Landing/>}></Route>
            <Route path='/project3' exact element={<Parallax/>}></Route>
          </Routes >
    </BrowserRouter>
    </>
    
  );
}

export default App;
