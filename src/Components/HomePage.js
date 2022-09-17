import React from 'react';
import '../styles/App.css';
import avatar from '../avatar.jpg';
import githubLogo from '../GitHub_Logo_White.png';

export default function HomePage() {
  console.log('sneakin around?'); //eslint-disable-line
  return (
    <div className="homepage">
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
        I&rsquo;m a Full Stack Developer in Portland, Oregon currently working on solo projects like
        this one...
      </h2>
      <p>While we are under construction here, would you like to check out some of my projects?</p>
      <div className="media-links">
        <h4>
          find me on <a href="https://github.com/kashitamang"><img src={githubLogo} alt="black github logo" className="rotate"></img></a>
        </h4>
      </div>
    </div>
  );
}
