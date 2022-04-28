import styles from './button.module.scss';

const Button = ({ type, title }) => {
  return (
    <button type={type} className={styles.btn}>
      {title}
    </button>
  );
};

export default Button;
