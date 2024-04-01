// 여기에서 store을 이렇게 정의해주고, 아래 코드에서 받아올 reducer도 따로 만들러 가야 함.
import { createStore } from "redux";
import reducer from "./reducer/reducer";

let store = createStore(reducer);

export default store;