import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import { applyMiddleware, createStore, combineReducers, } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { charactersReducer } from "../reducers/characters.reducer";
import {favoritesReducer} from '../reducers/favorites.reducer';
import {characterViewReducer} from '../reducers/characterView.reducer'


const rootReducers = combineReducers({
    charactersReducer,
    favoritesReducer,
    characterViewReducer,
});


//Type
export type IRootState = ReturnType<typeof rootReducers>


export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;


export const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
);