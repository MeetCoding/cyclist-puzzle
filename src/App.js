import React, { useState } from 'react';

import './App.css';
import board from './board.svg';
import wheel from './wheel.svg';

function App() {

  const [wheelStyle, setWheelStyle] = useState({ transform: 'rotate(0deg)' });

  function rotateWheel() {
    wheelStyle.transform === 'rotate(0deg)'?
      setWheelStyle(() => {return { transform: 'rotate(-30deg)' }}):
      setWheelStyle(() => {return { transform: 'rotate(0deg)' }});
  }

  return (
    <div id='app'>
      <img 
        id='board' 
        className='image'
        src={board} 
        alt='' 
      />
      <img 
        onClick={rotateWheel}
        style={wheelStyle} 
        id='wheel' 
        className='image' 
        src={wheel}
        alt='' 
      />
    </div>
  );
}

export default App;
