import '../styles/App.css';
import { React } from 'react';
import { useThemeContext } from '../ThemeProvider';

export default function ThemeButton() {

  const {
    theme, 
    setTheme,
  } = useThemeContext();

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    <button
      title="change theme"
      className={`material-symbols-${theme === 'dark' ? 'outlined' : 'rounded'}`}
      onClick={toggleTheme}
    >
      {`${theme === 'dark' ? 'dark_mode' : 'light_mode'}`}
    </button>
  );
}
