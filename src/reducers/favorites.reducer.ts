import { Reducer } from "react";
import { FavotitesActions } from "../actions/favorites.actions";
import { Character } from "../types/character.types";

//Type
interface FavoritesInitialState{
    favoritesList:Character[] | [];
}


/**
 * Estado Inicial Favoritos reducer
 */

const initialState: FavoritesInitialState = {
    favoritesList:[]
}


/**
 * Funcion Redux para manejar el estado del listado de favoritos 
 * @param state 
 * @param action 
 * @returns estado del listado de favoritos
 */

export const favoritesReducer:Reducer<FavoritesInitialState,FavotitesActions> = (state=initialState, action:FavotitesActions) => {
    switch (action.type){
        case 'ADD_FAVORITE':
            action.character.favorite= !action.character.favorite;
            return  action.character.favorite?   {...state, favoritesList:[...state.favoritesList, action.character]}: {...state, favoritesList:state.favoritesList.filter(el => el.id!==action.character.id )};
        case 'REMOVE_FAVORITE':
            action.character.favorite= false;
            return {...state, favoritesList:state.favoritesList.filter(el => el.id!==action.character.id )};
        case 'REMOVE_ALL':
            return {...initialState };
        default:
            return {...state};
    }
}


// CODIGO DE ANTES
// export const favoritesReducer:Reducer<FavoritesInitialState,FavotitesActions> = (state=initialState, action:FavotitesActions) => {
//     switch (action.type){
//         case 'ADD_FAVORITE':
//             return {...state, favoritesList:[...state.favoritesList, action.character]};
//         case 'REMOVE_FAVORITE':
//             return {...state, favoritesList:state.favoritesList.filter(el => el.id!==action.id )};
//         case 'REMOVE_ALL':
//             return {...initialState };
//         default:
//             return {...state};
//     }
// }


