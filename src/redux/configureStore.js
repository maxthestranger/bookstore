import { combineReducers } from 'redux';
import * as bookReducers from './books/books';
import * as categoryReducers from './categories/categories';

const rootReducer = combineReducers(bookReducers, categoryReducers);
export default rootReducer;
