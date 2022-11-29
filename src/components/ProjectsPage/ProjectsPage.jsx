import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './ProjectsPage.module.scss';
export default function ProjectsPage() {
  return (
    <div className={styles.ProjectsPage}>
      <Outlet/>
    </div>
  );
}
