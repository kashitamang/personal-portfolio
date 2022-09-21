import '../src/styles/App.css';
import { React, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from './Components/HomePage';
// import ThemeButton from './Components/ThemeButton';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <Router>
      <main className={`App ${theme}`}>
        <header className="header">
          <nav className="navigation">
            <Link title="home" to="/">
              Home
            </Link>
          </nav>
//           <ThemeButton theme={theme} setTheme={setTheme}/>
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
