import { Reducer } from "react";
import { FavotitesActions } from "../actions/favorites.actions";
import { Character } from "../types/character.types";

//Type
interface FavoritesInitialState{
    favoritesList:Character[];
}

const initialState: FavoritesInitialState = {
    favoritesList:[]
}


export const favoritesReducer:Reducer<FavoritesInitialState,FavotitesActions> = (state=initialState, action:FavotitesActions) => {
    switch (action.type){
        case 'ADD_FAVORITE':
            return {...state, favoritesList:[...state.favoritesList, action.character]};
        case 'REMOVE_FAVORITE':
            return {...state, favoritesList:state.favoritesList.filter(el => el.id!==action.id )};
        case 'REMOVE_ALL':
            return {...initialState };
        default:
            return {...state};
    }
}