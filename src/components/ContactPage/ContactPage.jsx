import styles from './ContactPage.module.scss';
import avatar from '../../assets/avatar.jpg';
import LinkedInLogo from '../../assets/LinkedIn_Logo.png';

export default function ContactPage() {
  return (
    <div className={styles.ContactPage}>
      <div className={styles.TitleContainer}>
        <div>
          <h1>
          Say<br></br>
          Hey
            <span className={styles.Wave}> 📞 </span>
          </h1>
        </div>
        <div className={styles.AvatarContainer}>
          <img
            src={avatar}
            alt="person with a medium skintone and shoulder length brown hair smiling"
          />
        </div>
      </div>

      <div className={styles.InfoContainer}>
        <h2>
          {`Connect on  `}
          <a href="https://www.linkedin.com/in/kashitamang">
            <img src={LinkedInLogo} alt="blue linkedin logo" />
          </a>
        </h2>
        <h2>
          {`View my `}
          <a href="https://drive.google.com/file/d/1Pr-gs-7G7uPV4Ywo4l44Nloxw7_cGp73/view">
            Resume
          </a>
        </h2>
      </div>
    </div>
  );
}
