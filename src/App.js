import './App.css';
import Building from './components/Building';

function App() {
  return (
    <div className="App">
      <h1>Elevator System</h1>
      <Building floorsNumber={10}/>
    </div>
  );
}

export default App;
