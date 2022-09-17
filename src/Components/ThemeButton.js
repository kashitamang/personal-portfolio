import '../styles/App.css';
import { React } from 'react';

export default function ThemeButton({ theme, setTheme }) {

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
      theme={theme}
      onClick={toggleTheme}
    >
      {`${theme === 'dark' ? 'dark_mode' : 'light_mode'}`}
    </button>
  );
}
