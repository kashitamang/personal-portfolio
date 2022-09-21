import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';
import { React } from 'react';
//styles
import '../src/styles/App.css';
import '../src/styles/global.css';
// components
import { useThemeContext } from './ThemeProvider';
import HomePage from './Components/HomePage';
// import ThemeButton from './Components/ThemeButton';
import Footer from './Components/Footer';

function App() {

  const {
    theme, 
    // setTheme
  } = useThemeContext();


  return (
    <Router>
      <main className={`App ${theme}`}>
        <header className="header">
          <nav className="navigation">
            <Link title="home" to="/">
              Home
            </Link>
          </nav>
          {/* <ThemeButton 
            theme={theme} 
            setTheme={setTheme}/> */}
        </header>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <footer>
          <Footer/>
        </footer>
      </main>
    </Router>
  );
}

export default App;
