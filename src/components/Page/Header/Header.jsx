import Navigation from '../Navigation';
import styles from './Header.module.scss';
import ThemeButton from './ThemeButton';

export default function Header() {
  return (
    <header className={styles.Header}>
      <Navigation />
      <ThemeButton />
    </header>
  );
}