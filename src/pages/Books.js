import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook, fetchBooks } from '../redux/books/books';
import Book from '../components/book/book';
import Form from '../components/form/form';
import Header from '../components/header/header';

const Books = () => {
  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { author, title, category } = event.target.elements;

    let nextID;
    try {
      nextID = parseInt(booksList.at(booksList.length - 1).id, 10) + 1;
    } catch (e) {
      nextID = 0;
    }

    dispatch(
      addBook({
        id: nextID,
        author: author.value,
        title: title.value,
        category: category.value,
      }),
    );

    author.value = '';
    title.value = '';
    category.value = '';
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        {booksList.map(({
          id, category, title, author,
        }) => (
          <Book
            key={id}
            cat={category}
            tit={title}
            auth={author}
            prog="0%"
            chap="chapter 1"
            onRemove={() => dispatch(removeBook({ id }))}
          />
        ))}

        <hr className="mt-5 mb-5" />

        <h2 className="title">add new Book</h2>
        <Form handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default Books;
