import React from 'react';
import styles from './HomePage.module.scss';
import Avatar from './Avatar.jsx';

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.AvatarContainer}>
        <div className={styles.Greeting}>
          <h1>Hey,</h1>
          <h1 className={styles.TypeWriter}> I&rsquo;m Kashi</h1>
        </div>
        <Avatar />
      </div>
      <h2>I&rsquo;m a Full Stack Software Engineer in Portland, Oregon.</h2>
      <p>
        I build well-crafted apps with a plan, and am passionate about user experience.
        <br></br>
        <br></br>
        In my spare time, I enjoy participating in community mutual aid, supporting small
        businesses, making electronic music, and designing clothes for my friends.
      </p>
    </div>
  );
}
