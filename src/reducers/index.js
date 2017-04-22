import {combineReducers} from 'redux';
import results from './resultsReducer';
import items from './itemsReducer';
import isLoading from './isLoadingReducer'
import isLoaded from './isLoadedReducer';

const rootReducer = combineReducers({
  results,
  items,
  isLoading,
  isLoaded
});

export default rootReducer;
