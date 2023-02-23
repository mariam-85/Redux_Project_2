import { createStore, combineReducers } from 'redux'
import { postsCardsReducer } from './reducers/postsCardsReducer';
import { userCardsReducer } from './reducers/userCardsReducer';

const rootReducer = combineReducers({

    users: userCardsReducer,
    posts: postsCardsReducer

});

export const store = createStore(rootReducer);