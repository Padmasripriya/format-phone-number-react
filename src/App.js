import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { PhoneNumberFormat } from './PhoneNumberFormat'

function App() {
  return(
    <div className='App'>
      <PhoneNumberFormat />
    </div>
  );
}

export default App;
