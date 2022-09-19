import { useState, createContext, useContext } from 'react';
const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  //set state
  const [theme, setTheme] = useState('dark');

  const stateAndSetters = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={stateAndSetters}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
