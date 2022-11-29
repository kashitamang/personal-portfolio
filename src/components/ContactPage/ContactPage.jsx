import styles from './ContactPage.module.scss';
import LinkedInLogo from '../../assets/LinkedIn_Logo.png';

export default function ContactPage() {
  return (
    <div className={styles.ContactPage}>
      <div className={styles.TitleContainer}>
        <div>
          <h1>
            <h1>
              <span className={styles.Wave}> 👋🏽 </span>
              Say hello,
            </h1>
          </h1>
        </div>
      </div>

      <div className={styles.InfoContainer}>
        <h2>
          {`Connect on  `}
          <a href="https://www.linkedin.com/in/kashitamang">
            <h3 className="underline">
              <img src={LinkedInLogo} alt="blue linkedin logo" />
            </h3>
          </a>
        </h2>
        <h2>
          {`View my `}
          <a href="https://drive.google.com/file/d/1Pr-gs-7G7uPV4Ywo4l44Nloxw7_cGp73/view">
            <h3 className="underline">Resume</h3>
          </a>
        </h2>
      </div>
    </div>
  );
}
