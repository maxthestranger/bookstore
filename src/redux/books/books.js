// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    // do reducer stuff
    case 'ADD_BOOK':
      return [
        ...state,
        {
          id: action.id,
          category: action.category,
          title: action.title,
          author: action.author,
        },
      ];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// Action Creators
export function addBook({
  id, category, title, author,
}) {
  return {
    type: ADD_BOOK,
    id,
    category,
    title,
    author,
  };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}