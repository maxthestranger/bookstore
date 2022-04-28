import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={`container ${styles.flex}`}>
      <Link
        to="/"
        style={{ width: '25%', display: 'flex', alignItems: 'center' }}
      >
        <span className={styles.logo}>Bookstore CMS</span>
      </Link>

      <div className={styles.nav}>
        <ul>
          <li>
            <Link to="/">
              <span className={styles.nat_item}>Books</span>
            </Link>
          </li>
          <li>
            <Link to="/categories">
              <span className={styles.nat_item}>Categories</span>
            </Link>
          </li>
        </ul>

        <div className={styles.avatar}>
          <BiUser />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
