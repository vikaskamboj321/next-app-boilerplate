import { combineReducers } from "redux";

import counter from "@redux/slices/counter";
import auth from "@redux/slices/auth";

const rootReducer = combineReducers({ counter, auth });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
