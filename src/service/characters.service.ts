import { Character, Episode } from "../types/character.types";
import {Info} from '../types/api.types'

interface GetCharactersByNameRes {
    info: Info;
    results: Character[];
}


export async function getCharactersByName(name:string,page:number=1):Promise<GetCharactersByNameRes> {
    const  response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`);
    const resJson = await response.json();
    return resJson;
} 



export async function getEpisode(url:string):Promise<Episode> {
    const  response = await fetch(url);
    const resJson = await response.json();
    return resJson;
} 
