import Book from '../components/book/book';
import Form from '../components/form/form';
import Header from '../components/header/header';

const Books = () => (
  <>
    <Header />
    <div className="container mt-5">
      <Book
        cat="action"
        tit="the hunger games"
        auth="suzanne collins"
        prog="60%"
        chap="chapter 17"
      />

      <hr className="mt-5 mb-5" />

      <h2 className="title">add new Book</h2>
      <Form />
    </div>
  </>
);

export default Books;
