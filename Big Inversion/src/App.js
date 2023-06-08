import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard firstName="Ibrahim" lastName="Hamdan" age="26" hairColor="blonde"/>
      <PersonCard firstName="Mohammad" lastName="Shadid" age="26" hairColor="black"/>
      <PersonCard firstName="Taleen" lastName="Khoury" age="23" hairColor="black"/>
      <PersonCard firstName="Hussam" lastName="Habayeb" age="28" hairColor="black"/>
    </div>
  );
}

export default App;