import { PropTypes } from 'prop-types';
import styles from './book.module.scss';

const Book = ({
  cat, tit, auth, prog, chap,
}) => (
  <div className={styles.book}>
    <div className={styles.info}>
      <p className={styles.category}>{cat}</p>
      <h2 className={styles.title}>{tit}</h2>
      <p className={styles.author}>{auth}</p>
      <div className={styles.links}>
        <span>Comments</span>
        <span>Remove</span>
        <span>Edit</span>
      </div>
    </div>
    <div className={styles.chart}>
      <div className={styles.circle_wrap}>
        <div className={styles.circle}>
          <div className={`${styles.mask} ${styles.full}`}>
            <div className={styles.fill} />
          </div>
          <div className={`${styles.mask} ${styles.half}`}>
            <div className={styles.fill} />
          </div>
          <div className={styles.inside_circle}>{prog}</div>
        </div>
      </div>
      <div className={styles.numbers}>Completed</div>
    </div>
    <div className={styles.book_info}>
      <p className={styles.chapter}>Current Chapter</p>
      <p className={styles.chap_no}>{chap}</p>
      <button type="button" className={styles.btn}>
        update progress
      </button>
    </div>
  </div>
);

Book.propTypes = {
  cat: PropTypes.string.isRequired,
  tit: PropTypes.string.isRequired,
  auth: PropTypes.string.isRequired,
  prog: PropTypes.string.isRequired,
  chap: PropTypes.string.isRequired,
};

export default Book;
