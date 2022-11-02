import { useThemeContext } from '../../../state/ThemeProvider';

export default function ThemeButton() {

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const {
    theme, 
    setTheme,
  } = useThemeContext();
  return (
    <button
      title={`${theme === 'light' ? 'switch to dark mode' : 'switch to light mode'}`}
      className={`material-symbols-${theme === 'dark' ? 'outlined' : 'rounded'}`}
      onClick={toggleTheme}
    >
      {`${theme === 'light' ? 'dark_mode' : 'light_mode'}`}
    </button>
  );
}
