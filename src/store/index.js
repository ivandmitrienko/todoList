import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './addReducer';

export const store = createStore(reducer, composeWithDevTools());