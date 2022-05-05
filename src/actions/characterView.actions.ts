import { ActionCreator } from "redux";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { getEpisode } from "../service/characters.service";
import { IRootState } from "../store/store";
import { Character, Episode } from "../types/character.types";



//TYPES
interface GetCharacterAction extends Action {
    type:'GET_CHARACTER';
}

interface GetCharacterViewSuccessAction extends  Action {
    type: 'GET_CHARACTER_SUCCESS';
    character:Character;
    episodes:Episode[];

}

interface GetCharacterViewFailedAction extends  Action {
    type: 'GET_CHARACTER_FAILED';
    payload:string;
    character:Character ;
}



//ACTIONS
export const getCharacter: ActionCreator<GetCharacterAction> = () => {
    return {
        type:'GET_CHARACTER',
    }
} 


const getCharacterViewSuccess: ActionCreator<GetCharacterViewSuccessAction> = (character:Character, episodes:Episode[]) => {
    return {
        type:'GET_CHARACTER_SUCCESS',
        character:character,
        episodes:episodes,
    }
}

const getCharacterViewFailed: ActionCreator<GetCharacterViewFailedAction> = (error:string, character:Character) => {
    return {
        type:'GET_CHARACTER_FAILED',
        payload:error,
        character:character,
    }
}


export type CharacterViewActions = ReturnType<typeof getCharacter> | ReturnType<typeof getCharacterViewSuccess> | ReturnType<typeof getCharacterViewFailed> ;




interface GetCharacterViewThunkAction extends ThunkAction<void, IRootState, unknown, CharacterViewActions> {};


export const getCharacterViewThunk = (character:Character):GetCharacterViewThunkAction => {
    return async (dispatch, getState) => {
        dispatch(getCharacter());
        let episodesList:Episode[] = [];
        try {
            
            for (let i = 0; i < character.episode.length; i++) {
                const element = character.episode[i];
                let res = await getEpisode(element);
                episodesList.push(res);
            }
            
            
            dispatch(getCharacterViewSuccess(character,episodesList))
        } catch (error) {
            dispatch(getCharacterViewFailed('error getting episodes', character))
        }

    }
} 


