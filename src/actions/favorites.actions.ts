
import { ActionCreator } from 'redux';
import {Action} from 'redux';   
import { Character } from '../types/character.types';


//TYPES

interface AddFavoriteAction extends Action {
    type:'ADD_FAVORITE';
    character: Character;
}

interface RemoveFavoriteAction extends Action {
    type:'REMOVE_FAVORITE';
    id:number;
}

interface RemoveAllAction extends Action {
    type:'REMOVE_ALL';
}
 


//Actions

export const addFavorite:ActionCreator<AddFavoriteAction> = (character:Character) => {
    return {
        type:'ADD_FAVORITE',
        character:character
    }
}

export const removeFavorite:ActionCreator<RemoveFavoriteAction> = (id:number) => {
    return {
        type:'REMOVE_FAVORITE',
        id:id
    }
}

export const removeAll:ActionCreator<RemoveAllAction> = () => {
    return {
        type:'REMOVE_ALL',
    }
}

// exporting actions types

export type FavotitesActions = ReturnType<typeof addFavorite> | ReturnType<typeof removeFavorite> | ReturnType<typeof removeAll>;



