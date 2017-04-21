import {combineReducers} from 'redux';
// import appointments from './appointmentReducer';
import results from './resultsReducer';
import items from './itemsReducer';
import isLoading from './isLoadingReducer'

const rootReducer = combineReducers({
  results,
  items,
  isLoading
});

export default rootReducer;
