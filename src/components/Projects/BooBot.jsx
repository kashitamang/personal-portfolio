import styles from './ProjectsPage.module.scss';
import booBotSchema from '../../assets/booBot_schema.jpg';
export default function BooBot() {
  return (
    <div className={styles.ProjectContainer}>
      <h1>boo!Bot</h1>
      <div className={styles.ProjectLinks}>
        <a href="https://boo-bot-server.herokuapp.com/" title="view API" alt="view API">
          <h2> API </h2>
        </a>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=booatthebot.booBOT"
          title="find it on the marketplace"
          alt="find it on the marketplace"
        >
          <h2> Marketplace </h2>
        </a>
        <a
          href="https://github.com/orgs/boo-BOT-Team/repositories"
          title="view code"
          alt="view code"
        >
          <h2> View Code </h2>
        </a>
      </div>
      <div className={styles.BuildContainer}>
        <p className={styles.BuildItem}>Node</p>
        <p className={styles.BuildItem}>Express</p>
        <p className={styles.BuildItem}>SQL</p>
        <p className={styles.BuildItem}>Postgres</p>
      </div>
      <em>
        A VS code marketplace extension and Halloween countdown fetching users haunted content from
        the API server with a customizable interval or on-demand pop-ups.
      </em>
      <h3 style={{ textDecoration: 'underline' }}>Features</h3>
      <ul>
        <h3>Status Bar</h3>
        <li>
          Shows a countdown for the days untill halloween with a built in event listener that
          updates the information when a user changes window focus in VS Code.
        </li>
        <h3>Personalized Popups</h3>
        <li>
          On launch the user is greeted by the extension and given options to be haunted with random
          facts and links throughout the day with a default interval of 60 minutes.
        </li>
        <h3>Pallette Commands</h3>
        <li>
          At any time while the extension is enabled a user can use <code>cmd</code> +{' '}
          <code> shift </code> + <code> P </code> and <code>Get Random Fact Now </code> or{' '}
          <code> Get Random Link Now </code> if the user wants on demand content.
        </li>
      </ul>
      <h3 style={{ textDecoration: 'underline' }}>API</h3>
      <ul>
        <h3>Schema</h3>
        <li>
          <img src={booBotSchema} />
        </li>
      </ul>
      <ul>
        <h3>Server</h3>
        <li>
          Links to haunted content and facts are stored in our PostgreSQL database, and fetched from
          our backend RESTful API server.
        </li>
      </ul>
      <ul>
        <h3>Endpoints</h3>
        <li>#GET random fact</li>
        <li>#GET random link</li>
        <li>#GET fact by id</li>
        <li>#GET link by id</li>
        <li>#GET all facts</li>
        <li>#GET all links</li>
      </ul>
    </div>
  );
}
