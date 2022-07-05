import { combineReducers } from 'redux';
import FeedTabContentReducer from './FeedTabContentReducer';

const allReducers = combineReducers({
  feedTabContent: FeedTabContentReducer,
});

export default allReducers;
