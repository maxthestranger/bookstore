import Button from '../button/button';
import styles from './form.module.scss';

// eslint-disable-next-line react/prop-types
const Form = ({ handleSubmit }) => (
  <form className={styles.form} onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Book Title"
      name="title"
      className={styles.input}
      required
    />
    <input
      type="text"
      placeholder="Category"
      name="category"
      className={styles.input}
      required
    />
    <input
      type="text"
      placeholder="Author Name"
      name="author"
      className={styles.input}
      required
    />
    <Button type="submit" title="add book" />
    <div className="mt-5" />
  </form>
);

export default Form;
