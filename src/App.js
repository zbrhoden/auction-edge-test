import "./App.css";
import Routes from './Routes'
import { Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Routes />
        </Switch>
      </header>
    </div>
  );
}

export default App;
