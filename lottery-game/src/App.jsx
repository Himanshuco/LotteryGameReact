import './App.css';
import Lottery from "./Lottery";

function App() {
  return (
    <div className="App">
      <Lottery n={3} winningSum={15} />
    </div>
  );
}

export default App;
