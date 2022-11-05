import React from 'react';
import styles from './ProjectsPage.module.scss';
import StellarView from './StellarView';
import BooBot from './BooBot';

export default function ProjectsPage() {
  return (
    <div className={styles.ProjectsPage}>
      <StellarView/>
      <BooBot/>
    </div>
  );
}
