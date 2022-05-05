import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../actions/favorites.actions';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { FC } from 'react';
import { Character } from '../../types/character.types';
import { useSelector } from '../../store/store';
import { getCharacter, getCharacterViewThunk } from '../../actions/characterView.actions';
import { NavLink } from 'react-router-dom';


interface TarjetaPersonajeProps {
    character: Character;
}


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje:FC<TarjetaPersonajeProps> = ({character}:TarjetaPersonajeProps) => {
    const dispatch = useDispatch();

    //const isFavorite = favoritesList.find(el=>el.id === character.id)? true : false
    
    const handleClick = () => {
        dispatch(addFavorite(character));
    }

    return <div className="tarjeta-personaje">
        <img src={character.image} alt={`${character.name} image`}/>
        <div className="tarjeta-personaje-body" >
            <NavLink to='detalle' ><span onClick={()=>dispatch(getCharacterViewThunk(character))} >{character.name}</span></NavLink> 
            <div onClick={handleClick} >
                <BotonFavorito esFavorito={character.favorite}  />
            </div>
        </div>
    </div>
}

export default TarjetaPersonaje;