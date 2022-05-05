import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { FC, useEffect, useState } from "react";
import { useSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { addFavorite } from "../actions/favorites.actions";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle:FC = () => {
    
    const dispatch = useDispatch();

    const {character, episodeList, status} = useSelector(state => state.characterViewReducer)
    const state = useSelector(state => state)
    
    

    if(!character) return <div className="container" > <h2>No Character Selected</h2> </div>;
    
    return <div className="container">
        <h3>character</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={character.image} alt={character.name}/>
                <div className={"detalle-header-texto"}>

                    <p>{character.name}</p>
                    <p>Planeta: {character.origin.name}</p>
                    <p>Genero: {character.gender}</p>
                </div>

                <div onClick={() => dispatch(addFavorite(character))} >
                    <BotonFavorito esFavorito={character.favorite} />
                </div>

            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {   
                status==='FAILED'?
                <h3> Oops There was an error loading the episodes  </h3>
                :
                episodeList?.map(el => <TarjetaEpisodio episode={el}/>)
            }
        </div>
    </div>
}

export default PaginaDetalle