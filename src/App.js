import logo from './logo.svg';
import './App.css';
import HelloUser from './components/helloUser/helloUser';
import Calculator from './components/calculator/calculator';
import TellingJoke from './components/state/state';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        В дом, где смеются, приходит счастье (Японская пословица)
        </p>
        <HelloUser name="Irishka"/>
        <TellingJoke/>
        <Calculator x="1"/>
        <a
          className="App-link"
          href="https://www.instagram.com/smuzi_u_luzi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me!
        </a>
      </header>
    </div>
  );
}

export default App;
