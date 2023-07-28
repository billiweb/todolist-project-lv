import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

// 중앙데이터 관리소 (store)

const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);

export default store;
