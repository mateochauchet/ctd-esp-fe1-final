import { useEffect, useState } from 'react';
import { getCharactersByName } from '../../service/characters.service';
import { useSelector } from '../../store/store';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = ({array}) => {
    
   
    return <div className="grilla-personajes">
        {
            array && 
            array.map(el => <TarjetaPersonaje character={el} />)
        }
       
    </div>
}
 
export default GrillaPersonajes;