import { Container } from '@mui/material';
import gsap from 'gsap';
import {BrowserRouter, Routes , Route, Navigate } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <>
    <BrowserRouter>
          <Routes >
            <Route path='/' exact element={<Landing/>}></Route>
          </Routes >
    </BrowserRouter>
    </>
    
  );
}

export default App;
