import { applyPolyfills, defineCustomElements } from 'blip-ds/loader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import LoginButton from './components/LoginButton';
import { AppProvider } from './contexts/AppContext';
import Landing from './pages/Landing';
import Welcome from './pages/Welcome';

function App() {

  applyPolyfills().then(() => defineCustomElements())

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter >
          <AppProvider>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/welcome" element={<Welcome />} />
            </Routes>
            <LoginButton />
          </AppProvider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
