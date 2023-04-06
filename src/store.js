import { createStore } from "redux";
import rootred from "./redux/actions/reducers/main";
import { placeOdrer } from "./redux/actions/reducers/Oderaction";

const store = createStore(
    rootred,
    placeOdrer
);


export default store;