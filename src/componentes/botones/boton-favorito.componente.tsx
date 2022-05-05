
import { FC } from 'react';
import './boton-favorito.css';


interface BotonFavoritoProps {
    esFavorito:boolean;
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito:FC<BotonFavoritoProps> = ({esFavorito}:BotonFavoritoProps) => {

    

    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito"  >
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;