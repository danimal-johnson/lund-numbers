import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LUNDS KOMMUN</h1>
      </header>
      <h1>Handläggare för personer med funktionsnedsättning</h1>
      <Form />
      <footer>
        <p>* Endast demo. Inte ansluten till <a
        className="App-link"
        href="https://www.lund.se/omsorg--hjalp/kontaktsidor/lsssol-handlaggare/"
        rel="noreferrer" target="_blank"
      >Lunds Kommun</a>.</p>
      </footer>
    </div>
  );
}

export default App;
