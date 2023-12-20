// client/src/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    // Добавьте другие редюсеры, если они будут нужны
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
