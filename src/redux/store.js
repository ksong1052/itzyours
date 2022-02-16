import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './root.reducer';
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

// if(process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

// 1.
// export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// export const persistor = persistStore(store);  // 이것은 window.localStorage에 store에 있는 state정보를 저장하기 위해 사용 - session 유지를 위해

// eslint-disable-next-line
// export default {store, persistor}


// 2.
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Executing the integrating saga function in the middleware
sagaMiddleware.run(rootSaga);

// 이것은 window.localStorage에 store에 있는 state정보를 저장하기 위해 사용 - session 유지를 위해
export const persistor = persistStore(store);

// export default { store, persistor };

const reduxStore = {
  store,
  persistor,
};

export default reduxStore;


