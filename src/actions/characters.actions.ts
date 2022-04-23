
import { ActionCreator } from "redux";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { getCharactersByName } from "../service/characters.service";
import { IRootState } from "../store/store";
import { Character } from "../types/character.types";

//TYPES

interface Search extends Action {
    type:'SEARCH';
    payload:string;
}

interface GetCharactersAction extends  Action {
    type: 'GET_CHARACTERS';
    payload:string;
}

interface GetCharactersSuccessAction extends  Action {
    type: 'GET_CHARACTERS_SUCCESS';
    characters:Character[];
    info:{
        count:number;
        pages:number;
    }
}

interface GetCharactersFailedAction extends  Action {
    type: 'GET_CHARACTERS_FAILED';
    payload:string;
}

interface NextPageAction extends Action{
    type: 'NEXT_PAGE';
}

interface PreviousPageAction extends Action{
    type: 'PREVIOUS_PAGE';
}

interface ResetFiltersAction extends Action{
    type: 'RESET_FILTERS';
}

//ACTIONS
export const search: ActionCreator<Search> = (name:string) => {
    return {
        type:'SEARCH',
        payload:name,
    }
} 

const getCharacters: ActionCreator<GetCharactersAction> = (name:string) => {
    return {
        type:'GET_CHARACTERS',
        payload:name,
    }
}

const getCharactersSuccess: ActionCreator<GetCharactersSuccessAction> = (characters:Character[],info) => {
    return {
        type:'GET_CHARACTERS_SUCCESS',
        characters:characters,
        info:info,
    }
}

const getCharactersFailed: ActionCreator<GetCharactersFailedAction> = (error:string) => {
    return {
        type:'GET_CHARACTERS_FAILED',
        payload:error,
    }
}

export const nextPage: ActionCreator<NextPageAction> = () => {
    return {
        type:'NEXT_PAGE'
    }
}

export const previousPage: ActionCreator<PreviousPageAction> = () => {
    return {
        type:'PREVIOUS_PAGE'
    }
}

export const resetFilters: ActionCreator<ResetFiltersAction> = () => {
    return {
        type:'RESET_FILTERS'
    }
}


export type CharactersActions = ReturnType<typeof getCharacters> | ReturnType<typeof getCharactersSuccess> | ReturnType<typeof getCharactersFailed> | ReturnType<typeof nextPage> | ReturnType<typeof previousPage> | ReturnType<typeof resetFilters> | ReturnType<typeof search> ;


interface getCharactersThunkAction extends ThunkAction<void, IRootState, unknown, CharactersActions> {}


//THUNK ACTION

export const getCharactersThunk = (value:string): getCharactersThunkAction => {
    return async (dispatch, getState) => {
        dispatch(getCharacters(value));
        const {page,actualSearch} = getState().charactersReducer;
        try {
            const res = await getCharactersByName(actualSearch, page);
            const info = res.info;
            const charactersList:Character[] = res.results;
            dispatch(getCharactersSuccess(charactersList,info))
        } catch (error) {
            dispatch(getCharactersFailed(error))
        }
    }
}




