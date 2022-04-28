import Button from '../button/button';
import styles from './form.module.scss';

const Form = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Book Title" className={styles.input} />
      <input type="text" placeholder="Author Name" className={styles.input} />
      <Button type="submit" title="add book" />
      <div className="mt-5" />
    </form>
  );
};

export default Form;
