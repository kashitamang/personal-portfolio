import githubLogo from '../../assets/GitHub_Logo_White.png';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <h4>
        find all my work on
        <a href="https://github.com/kashitamang">
          <img src={githubLogo} alt="black github logo" className="rotate"/>
        </a>
      </h4>
    </footer>
  );
}
