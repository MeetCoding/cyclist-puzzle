import './App.css';
import board from './board.svg';
import wheel from './wheel.svg';

function App() {
  return (
    <div id='app'>
      <img id='board' className='image' src={board} alt='' />
      <img id='wheel' className='image' src={wheel} alt='' />
    </div>
  );
}

export default App;
