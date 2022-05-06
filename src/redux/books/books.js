import BookstoreAPI from '../../api/bookstoreAPI';
// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const DATA_FETCHED = 'DATA_FETCHED';

export const fetchBooks = () => async (dispatch) => {
  const books = await BookstoreAPI.getAllBooks();
  if (books) {
    dispatch({ type: DATA_FETCHED, books });
  }
};

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    // do reducer stuff
    case DATA_FETCHED:
      return action.books;
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          category: action.category,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// Action Creators
export function addBook({
  id, category, title, author,
}) {
  return async (dispatch) => {
    const result = await BookstoreAPI.addBook({
      id,
      title,
      author,
      category,
    });
    if (result) {
      dispatch({
        type: ADD_BOOK,
        id,
        category,
        title,
        author,
      });
    }
  };
}

export function removeBook(id) {
  return async (dispatch) => {
    const result = await BookstoreAPI.removeBook({ id });
    if (result) {
      dispatch({
        type: REMOVE_BOOK,
        id,
      });
    }
  };
}
