import {
  CHANGE_NAME,
  CHANGE_EMAIL,
} from './actions';

export const initialState = {
  name: '',
  email: '',
};

export default function appReducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_NAME:
      return {...state, name: action.payload};
    case CHANGE_EMAIL:
      return {...state, email: action.payload};
    default:
      return state;
  }
}
