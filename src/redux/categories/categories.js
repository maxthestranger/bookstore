// Actions
const CHECK_STATUS = 'CHECK_STATUS';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    // do reducer stuff
    case 'CHECK_STATUS':
      return [
        ...state,
        {
          title: action.title,
        },
      ];
    default:
      return state;
  }
}

// Action Creators
export function checkStatus({ title }) {
  return {
    type: CHECK_STATUS,
    title,
  };
}
