import { combineReducers } from "redux";

import auth from './auth';
import counter from "./counter"

export default combineReducers({
    auth,
    counter
})