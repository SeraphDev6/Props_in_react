import './App.css';
import PersonCard from './components/personCard'



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PersonCard firstName = "Wesley" lastName = "Giles" age={25} hairColor = "Silver" />
      <PersonCard firstName = "Blargity" lastName = "Blarg" age={5555} hairColor = "Blarg" />
      <PersonCard firstName = "Katie" lastName = "Posey" age={26} hairColor = "Red" />
      <PersonCard firstName = "Captain" lastName = "Crunch" age={58} hairColor = "White" />
      </header>
    </div>
  );
}

export default App;
