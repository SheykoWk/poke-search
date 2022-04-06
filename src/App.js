import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';

function App() {

  const [value, setValue] = useState(false) 



  return (
    <div className="App">
      <header className="App-header">
        <input type='checkbox' id='menuToggle' value={value} onChange={(e) => setValue(e.target.checked)} /> 
        <label htmlFor='menuToggle'>Desplegar menu</label>
        { value ? <Menu /> : null }
      </header>
    </div>
  );
}

export default App;
