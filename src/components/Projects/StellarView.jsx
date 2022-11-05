import React from 'react';
import styles from './ProjectsPage.module.scss';
import stellarViewSchema from '../../assets/stellarView_database_schema.jpg';

export default function StellarView() {
  return (
    <div className={styles.ProjectContainer}>
      <h1>StellarView</h1>
      <div className={styles.ProjectLinks}>
        <a href="https://stellarview.netlify.app/welcome" title="view code" alt="view code">
          <h2> Live Demo </h2>
        </a>
        <a href="https://github.com/stellarview" title="view deploy" alt="view deploy">
          <h2> View Code </h2>
        </a>
      </div>
      <div className={styles.BuildContainer}>
        <p className={styles.BuildItem}>React</p>
        <p className={styles.BuildItem}>Node</p>
        <p className={styles.BuildItem}>Express</p>
        <p className={styles.BuildItem}>Sass</p>
        <p className={styles.BuildItem}>SQL</p>
        <p className={styles.BuildItem}>Postgres</p>
      </div>
      <em>
        An educational tool for technical interview prep. Authorized users access 100+ quiz
        questions from our API server while tracking progress across 7 different languages and
        frameworks.
      </em>
      <h3 style={{ textDecoration: 'underline' }}>Features</h3>
      <ul>
        <h3>Flexible Authentication</h3>
        <li>
          Users can create an account with GitHub or through our in-house authentication forms.
        </li>
        <h3>Personalized Studying</h3>
        <li>
          Users can log in to their personalized profile, choose from categories, and keep track of their
          completed categories and total points.
        </li>
        <h3>Interactive Quizzes</h3>
        <li>Quizzes are non-timed, and incorrect answers turn into learning opportunities. 
          Answers update when chosen, to notify the user of right and wrong choices.
          After the deck completed, if there were any incorrectly answered
          questions, the deck presents the incorrectly answered questions until
          answered correctly. After the quiz is done, users are rewarded with confetti, and 5 
          points and the completed category are pushed onto the users profile information. 
        </li>
      </ul>
      <h3 style={{ textDecoration: 'underline' }}>Database</h3>
      <ul>
        <h3>Schema</h3>
        <li>
          <img src={stellarViewSchema} />
        </li>
        <h3>Fetches</h3>
        <li>
          Top-reported technical questions are stored in our PostgreSQL database, and fetched from
          our backend RESTful API server.
        </li>
      </ul>
    </div>
  );
}
