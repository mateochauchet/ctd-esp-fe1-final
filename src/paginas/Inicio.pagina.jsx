import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useDispatch } from "react-redux";
import { resetFilters } from "../actions/characters.actions";
import { useSelector } from "../store/store";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.charactersReducer)

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={()=>dispatch(resetFilters())} >Reset Filters</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes array={characters} />
        <Paginacion />
    </div>
}

export default PaginaInicio