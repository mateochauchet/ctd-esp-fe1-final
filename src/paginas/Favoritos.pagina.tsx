import { FC } from "react";
import { useDispatch } from "react-redux";
import { removeAll } from "../actions/favorites.actions";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useSelector } from "../store/store";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos:FC = () => {
    const {favoritesList} = useSelector(state=>state.favoritesReducer);

    const dispatch = useDispatch(); 
    
    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={()=>dispatch(removeAll())} >Remove all</button>
        </div>
        <GrillaPersonajes charactersList={favoritesList} />
    </div>
}

export default PaginaFavoritos