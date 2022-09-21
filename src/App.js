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
<<<<<<< HEAD
import ThemeButton from './Components/ThemeButton';
import Footer from './Components/Footer';
=======
// import ThemeButton from './Components/ThemeButton';
>>>>>>> 482939205fd702f4850b9126d98fcc8ca25664a4

function App() {

  const {
    theme
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
<<<<<<< HEAD
          <ThemeButton/>
=======
//           <ThemeButton theme={theme} setTheme={setTheme}/>
>>>>>>> 482939205fd702f4850b9126d98fcc8ca25664a4
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
