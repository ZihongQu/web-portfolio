import { Container } from '@mui/material';
import gsap from 'gsap';
import {BrowserRouter, Routes , Route, Navigate } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import ProjectOne from './components/ProjectOne';
import ProjectTwo from './components/ProjectTwo/ProjectTwo';

function App() {
  return (
    <>
    <BrowserRouter>
          <Routes >
            <Route path='/' exact element={<Landing/>}></Route>
            <Route path='/project1' exact element={<ProjectOne/>}></Route>
            <Route path='/project2' exact element={<ProjectTwo/>}></Route>
          </Routes >
    </BrowserRouter>
    </>
    
  );
}

export default App;
