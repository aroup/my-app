import {combineReducers} from 'redux';
// import appointments from './appointmentReducer';
import results from './resultsReducer';
import items from './itemsReducer';

const rootReducer = combineReducers({
  results,
  items
});

export default rootReducer;
