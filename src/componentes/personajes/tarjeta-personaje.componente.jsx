import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../actions/favorites.actions';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useSelector } from '../../store/store';


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({character}) => {
    const dispatch = useDispatch();
    

    const {favoritesList} = useSelector(state=>state.favoritesReducer);

    const isFavorite = favoritesList.find(el=>el.id === character.id)? true : false
    
    const handleClick = () => {
        isFavorite ? dispatch(removeFavorite(character.id))
        :
        dispatch(addFavorite(character));

        console.log(isFavorite)
    }

    return <div className="tarjeta-personaje">
        <img src={character.image} alt={`${character.name} image`}/>
        <div className="tarjeta-personaje-body" >
            <span>{character.name}</span>
            <div onClick={handleClick} >
                <BotonFavorito esFavorito={isFavorite}  />
            </div>
        </div>
    </div>
}

export default TarjetaPersonaje;