import React from 'react';
import styles from './HomePage.module.scss';
import avatar from '../../assets/avatar.jpg';

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.Greeting}>
        <h1>
          <span className={styles.Wave}> 👋🏽 </span> Hey,
        </h1>
        <h1>I&rsquo;m Kashi</h1>
      </div>
      <div className={styles.AvatarContainer}>
        <img
          src={avatar}
          alt="apple memoji of a person with a medium skintone and shoulder length brown hair smiling"
        />
      </div>
      <h2>I&rsquo;m a Full Stack Software Engineer in Portland, Oregon.</h2>
      <p>
        I am passionate about team building, and delivering well-crafted apps with a plan.
        <br></br>
        <br></br>
        In my spare time, I enjoy participating in community mutual aid, supporting small
        businesses, making electronic music, and designing clothes for my friends.
      </p>
    </div>
  );
}
