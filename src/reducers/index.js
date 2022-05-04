import {combineReducers} from "redux"
import { productReducer } from "./productReducer";

const reducers = combineReducers({
    allproduct:productReducer,
});

export default reducers;