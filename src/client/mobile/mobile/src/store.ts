// store

import AsyncStorage from '@react-native-community/async-storage';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';

import Dummy from './reducers/dummyReducer';
import Settings from './reducers/settingsReducer';


const rootReducer = combineReducers({
  Dummy,
  Settings,

  lastAction: function lastAction(state = null, action) {
    return action;
  }
});

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  /*whitelist: [

  ],*/
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [
    //'Dummy',
  ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(
    createLogger(),
  ),
);
// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {
  store,
  persistor,
};



