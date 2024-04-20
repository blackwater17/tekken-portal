import { createStore, combineReducers } from 'redux';
import charactersReducer from '../reducers/characters'
import movesReducer from '../reducers/moves'
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            characters: charactersReducer,
            moves: movesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}
