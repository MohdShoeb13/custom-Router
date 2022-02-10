import React from 'react';
import CssBox from './components/cssbox/CssBox';
import Header from './components/Header';
import Photo from './components/photo/Photo';
import Scroll from './components/scroll/Scroll';
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router path='/photo'>
        <Photo/> 
      </Router>
      <Router path='/scroll'>
        <Scroll/>
      </Router>
      <Router path='/cssbox'>
        <CssBox/>
      </Router>
      
    </div>
  );
}

export default App;
