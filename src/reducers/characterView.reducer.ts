import { Reducer } from "redux";
import { CharacterViewActions } from "../actions/characterView.actions";
import { Character, Episode } from "../types/character.types";

interface CharacterViewState {
   character:Character | null ;
   episodeList:Episode[];
   status:'IDLE' | 'LOADING' | 'COMPLETED' | 'FAILED';
   errorMessage: string | null;
}


/**
 * Estado Inicial Characters View reducer
 */


const initialState: CharacterViewState = {
   character:null,
   episodeList:[],
   status: 'IDLE',
   errorMessage: null,
}


/**
 * Funcion Redux para manejar el estado de la pagina detalle de los personajes  
 * @param state 
 * @param action 
 * @returns estado de la pagina detalle de los personajes
 */


export const characterViewReducer:Reducer<CharacterViewState, CharacterViewActions> = (state=initialState, action) => {
    switch(action.type){
        case 'GET_CHARACTER':
            return {...state, status:'LOADING', character:null, errorMessage:null};
        case 'GET_CHARACTER_SUCCESS':
            return { ...state, character:action.character, episodeList:action.episodes, status:'COMPLETED' };
        case 'GET_CHARACTER_FAILED':
            return { ...state, status:'FAILED', episodeList:[], character:action.character, errorMessage:action.payload  }
        default:
            return state;
    }
}