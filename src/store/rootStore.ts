import {applyMiddleware, createStore, Store} from 'redux';
import RootStore from "../models/Store";
import {composeWithDevTools} from "redux-devtools-extension";
import reduxThunk from 'redux-thunk';
import rootReducer from "./rootReducer";

export default createStore(rootReducer, composeWithDevTools({})(
   applyMiddleware(reduxThunk)
)) as Store<RootStore>;
