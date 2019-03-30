import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { INCREMENT } from '../actions';

const count = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return payload.count;
    default:
      return state;
  }
};
const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  count,
});

export default rootReducer;
