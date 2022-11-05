import React from 'react';
import StellarView from './StellarView';
import styles from './ProjectsPage.module.scss';

export default function ProjectsPage() {
  return (
    <div className={styles.ProjectsPage}>
      <h1>Recent Projects...</h1>
      <StellarView/>
    </div>
  );
}
