import '../src/styles/App.css';
import { React, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from './Components/HomePage';

function App() {

  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <Router>
      <main className={`App ${theme}`}>
        <header className="header">
          <nav className="navigation">
            <Link to="/">Home</Link>
          </nav>
          <button 
            title=''
            className={`material-symbols-${(theme === 'dark') ? 'outlined' : 'rounded'}`}
            onClick={toggleTheme}>
            {`${(theme === 'dark') ? 'dark_mode' : 'light_mode'}`}
          </button>
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
