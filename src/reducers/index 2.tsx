import FeedTabContentReducer from "./FeedTabContentReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    feedTabContent: FeedTabContentReducer,
})

export default allReducers;