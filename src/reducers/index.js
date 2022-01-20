import { combineReducers } from "redux"

import barTogglerReducer from "./bar"

const reducers = combineReducers({
    barToggler:barTogglerReducer
});
export default reducers;