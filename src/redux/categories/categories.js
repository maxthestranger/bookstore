const CHECK_STATUS = 'CHECK_STATUS';

export const checkStatus = () => ({ type: CHECK_STATUS });

// Reducer
export default function categoryReducer(state = [], action) {
  switch (action.type) {
    // do reducer stuff
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}
