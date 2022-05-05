import { FC, useEffect, useState } from 'react';
import { getCharactersByName } from '../../service/characters.service';
import { useSelector } from '../../store/store';
import { Character } from '../../types/character.types';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

type GrillaPersonajesProps = {
    charactersList: Character[]
}



/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes:FC<GrillaPersonajesProps> = ({charactersList}:GrillaPersonajesProps) => {
    
    const {status} = useSelector(state => state.charactersReducer)
   
    if (status === 'LOADING') return <h3>Loading...</h3>
    if (status === 'FAILED') return <h3>0ops there was an error loading the characters !</h3>
    return <div className="grilla-personajes">
        {
            charactersList && 
            charactersList.map(el => <TarjetaPersonaje character={el} />)
        }
       
    </div>
}
 
export default GrillaPersonajes;