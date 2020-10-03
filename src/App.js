import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllPosts from './components/AllPosts'
import Boasts from './components/Boasts'
import Roasts from './components/Roasts'
import ScoreSort from './components/ScoreSort'
import AddPost from './components/AddPost'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light  bg-light">
          <Link className="navbar-brand" to="/">Home</Link> 
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/roasts">Roasts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/boasts">Boasts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/score">Score Sort</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addpost">Add Post</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/addpost">
            <AddPost />
          </Route>
          <Route path="/boasts">
            <Boasts />
          </Route>
          <Route path="/roasts">
            <Roasts />
          </Route>
          <Route path="/score">
            <ScoreSort />
          </Route>
          <Route path="/">
            <AllPosts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
