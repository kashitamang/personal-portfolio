import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import styles from './Layout.module.scss';
import Footer from './Footer';
import { useThemeContext } from '../../state/ThemeProvider';


export default function Layout() {
  const {
    theme
  } = useThemeContext();

  return (
    <div className={`App ${theme}`}>
      <div className={styles.Layout}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
