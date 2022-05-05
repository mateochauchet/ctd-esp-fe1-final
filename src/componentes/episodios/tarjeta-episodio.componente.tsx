import './tarjeta-episodio.css';
import {Episode} from '../../types/character.types'
import { FC } from 'react';


interface TarjetaEpisodioProps  {
    episode:Episode;
}


/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio:FC<TarjetaEpisodioProps> = ({episode}:TarjetaEpisodioProps) => {

    return <div className="tarjeta-episodio">
            <h4>{episode.name}</h4>
            <div>
                <span>{episode.episode}</span>
                <span>Lanzado el: {episode.air_date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;