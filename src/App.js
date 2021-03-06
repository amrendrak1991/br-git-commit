import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Commits from "./components/Commits";
import Commit from "./components/Commit";
import 'antd/dist/antd.css';
function App() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/commits">Commit List</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/commits">
              <Commits />
            </Route>
            <Route
                path="/commit"
                render={(props) => <Commit {...props}/>}
            />
          </Switch>
        </div>
      </Router>
  );
}
export default App;
