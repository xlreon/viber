import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

// TODO - initial state to be filled
const initialState = {
};

let store = createStore(reducers, applyMiddleware(thunk));

export { store, initialState };