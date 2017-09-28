import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';
const loggerMiddleware = createLogger();
const createStoreMiddleware = applyMiddleware (loggerMiddleware)(createStore);
export default function configureStore (initSate) {
    return createStoreMiddleware(rootReducer, initSate);
}