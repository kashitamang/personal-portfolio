import React from 'react';
import githubLogo from '../assets/GitHub_Logo_White.png';


export default function Footer() {
  return (
    <div className="media-links">
      <h4>
        find me on{' '}
        <a href="https://github.com/kashitamang">
          <img src={githubLogo} alt="black github logo" className="rotate"></img>
        </a>
      </h4>
    </div>
  );
}
