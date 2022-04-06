import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';

function App() {

  const [value, setValue] = useState(false) 
  const [value2, setValue2] = useState(false)

  return (
    <div className="App">
      <header className="App-header">

        <input type='checkbox' id='menuToggle' value={value} onChange={(e) => {
          setValue(e.target.checked)}} /> 
        <label htmlFor='menuToggle'>
          Menu Toggle
        </label>


        <input type='checkbox' id='menuToggle2' value={value2} onChange={(e) => {
          setValue2(e.target.checked)}} /> 
        <label htmlFor='menuToggle2'>
          Menu Toggle
        </label>

        { value && value2 ? <Menu /> : null }
      </header>
    </div>
  );
}

export default App;
