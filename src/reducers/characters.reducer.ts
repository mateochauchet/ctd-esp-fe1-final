import { info } from "console";
import { Reducer } from "redux";
import { CharactersActions } from "../actions/characters.actions";
import { Info } from "../types/api.types";
import { Character } from "../types/character.types";


interface CharactersState {
    characters:Character[];
    actualSearch:string;
    status:'IDLE' | 'LOADING' | 'COMPLETED' | 'FAILED';
    errorMessage: string | null;
    info: Info;
    page:number;
}

/**
 * Estado Inicial Personajes reducer
 */

const initialState: CharactersState = {
    characters:[],
    actualSearch:'',
    status:'IDLE',
    errorMessage: null,
    info:{
        count:0,
        pages:0,
        next:null,
        prev:null
    },
    page:1,
}

/**
 * Funcion Redux para el estado del listado de personajes   
 * 
 * @returns estado del listado de personajes 
 */

export const charactersReducer:Reducer<CharactersState, CharactersActions> = (state=initialState, action) => {
    switch(action.type){
        case 'SEARCH':
            return {...state, actualSearch:action.payload, page:1};
        case 'GET_CHARACTERS':
            return {...state, status:'LOADING', errorMessage:null, characters:[]};
        case 'GET_CHARACTERS_SUCCESS':
            console.log(action.info);
            return { ...state, status:'COMPLETED', characters:action.characters, info:action.info}
        case 'GET_CHARACTERS_FAILED':
            return { ...state, status:'FAILED', errorMessage:action.payload, info:{...state.info} };
        case 'NEXT_PAGE':
            return { ...state, page:state.page+1 };
        case 'PREVIOUS_PAGE':
            return { ...state, page:state.page-1 };
        case 'RESET_FILTERS':
            return {...state, page:1, actualSearch:'' }
        default:
            return {...state};
    }
}