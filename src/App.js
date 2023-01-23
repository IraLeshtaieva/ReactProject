import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloWorld/helloWorld';
import Calculator from './components/calculator/calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld name="Irishka"/>
        <HelloWorld name="Pashka"/>
        <Calculator x="13" y="4"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
