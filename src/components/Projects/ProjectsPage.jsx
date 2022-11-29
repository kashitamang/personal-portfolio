import React from 'react';
import styles from './ProjectsPage.module.scss';
import StellarView from './StellarView';
import BooBot from './BooBot';
import ProjectsList from './ProjectsList';

export default function ProjectsPage() {
  return (
    <div className={styles.ProjectsPage}>
      <ProjectsList />
      {/* <StellarView />
      <BooBot /> */}
    </div>
  );
}
