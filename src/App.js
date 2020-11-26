import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import ListExample from "./ListExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <img src="../apple-touch-icon-lg.png" alt="logo" />
            <p>Auction Edge - React App</p>
            <Link className="App-link" to="/examples/list">
              #1 - List Feature
            </Link>
            <Link className="App-link" to="/examples/[name]">
              #2 - [insert] Feature
            </Link>
            <Link className="App-link" to="/examples/[name]">
              #3 - [insert] Feature
            </Link>
          </Route>
          <Route exact path="/examples/list">
            <ListExample />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
