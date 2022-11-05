import React from 'react';
import styles from './ProjectsPage.module.scss';
import StellarView from './StellarView';
import BooBot from './BooBot';
import ProjectsPageNavigation from './ProjectsPageNavigation';

export default function ProjectsPage() {
  return (
    <div className={styles.ProjectsPage}>
      <ProjectsPageNavigation />
      <StellarView />
      <BooBot />
    </div>
  );
}
