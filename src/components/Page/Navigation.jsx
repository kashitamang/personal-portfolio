import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="/" alt="home" title="home">
        Home
      </NavLink>
      <NavLink to="projects" alt="projects" title="projects">
        Projects
      </NavLink>
      <NavLink to="contact" alt="contact" title="contact">
        Contact
      </NavLink>
    </nav>
  );
}
