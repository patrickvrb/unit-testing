import { useState } from 'react';
import './App.scss';
import LoginButton from './components/LoginButton';
import { LogIn } from './services/Auth';

function App() {

  return (
    <div className="App">
      <header className="App-header" />
        <LoginButton />
    </div>
  );
}

export default App;
