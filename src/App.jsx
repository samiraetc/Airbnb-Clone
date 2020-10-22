import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Covid from './components/Covid/Covid';

function App() {
  return (
        <div className="App">
          <Covid />
          <Header />
         <Home />
         
        </div>
  );
}

export default App;


