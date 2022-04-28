import { PropTypes } from 'prop-types';
import styles from './button.module.scss';

const Button = ({ type, title }) => (
  <button type={type === 'submit' ? 'submit' : 'button'} className={styles.btn}>
    {title}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
