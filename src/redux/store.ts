import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import characters from './characters/reducer'

const initialState = {};

const middleware = [thunk];
export const rootReducer = combineReducers({
  characters
});
export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
