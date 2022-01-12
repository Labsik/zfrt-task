import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const composer = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(rootReducer, undefined, composer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
