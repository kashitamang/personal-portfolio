import React from 'react';
import styles from './HomePage.module.scss';
import avatar from '../../assets/avatar.jpg';

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className="greeting">
        <h1>
          <span className="wave"> 👋🏽 </span> Hey,
        </h1>
        <h1>I&rsquo;m Kashi</h1>
      </div>
      <div className="avatar-container">
        <img
          src={avatar}
          alt="person with a medium skintone and shoulder length brown hair smiling"
        ></img>
      </div>
      <h2>
        I&rsquo;m a Full Stack Software Engineer in Portland, Oregon currently working on solo projects like
        this one...
      </h2>
      <p>While we are under construction here, would you like to check out some of my projects?</p>
    </div>
  );
}
