import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../actions/actionTypes';

const initialState = {
  posts: [],
}

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload,
      }
    case LIKE:
      return {
        ...state,
        posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)),
      }
    case CREATE:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
      }
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)),
      }
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      }
    default:
      return state;
  }
};