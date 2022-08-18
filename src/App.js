import '../src/styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from './Components/HomePage';

function App() {
  return (
    <Router>
      <main className="main">
        <header className="header">
          <nav className="navigation">
            <Link to="/">Home</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
