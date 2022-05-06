import { combineReducers, createStore } from 'redux';
import * as bookReducers from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducers,
  categories: categoryReducer,
});

const store = createStore(rootReducer);
export default store;
