import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ProjectsPage.module.scss';

export default function ProjectsList() {
  return (
    <div className={styles.ProjectsList}>
      <Link to="stellarview" alt="StellarView" title="StellarView">
        <h4>2022 / Full Stack Engineer</h4>
        <h1>StellarView</h1>
      </Link>
      <Link to="boobot" alt="Boo!Bot" title="Boo!Bot">
        <h4>2022 / Backend Engineer</h4>
        <h1>Boo!Bot</h1>
      </Link>
      <Link to="printstagram" alt="Printstagram" title="Printstagram">
        <h4>2022 / Full Stack Engineer</h4>
        <h1>Printstagram</h1>
      </Link>
    </div>
  );
}
