import React, {useState} from 'react';
import '../styles/App.css';
import data from '../assets/Data.js';
import AppRouter from './Router';

function App() {
  const [shoes, setShoes] = useState(data);
  return <AppRouter shoes={shoes}></AppRouter>;
}

export default App;
