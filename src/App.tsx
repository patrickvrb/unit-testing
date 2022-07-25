import { useState } from 'react';
import './App.scss';
import LoginButton from './components/LoginButton';
import { LogIn } from './services/LoginAPI';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = async () => {
    !isLoggedIn && await LogIn();
    setIsLoggedIn(pState => !pState)
  }

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn && 'Você está logado!'}
        <LoginButton setIsLoggedIn={handleLogin} isLoggedIn={isLoggedIn} />
      </header>
    </div>
  );
}

export default App;
