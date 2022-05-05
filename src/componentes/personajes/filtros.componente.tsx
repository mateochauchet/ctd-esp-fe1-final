import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCharactersThunk, search } from '../../actions/characters.actions';
import { useSelector } from '../../store/store';
import './filtros.css';


/**
 * Input Buscador para poder Filtrar a los personajes por nombre
 * @returns  un JSX element
 */

const Filtros:FC = () => {
    const dispatch = useDispatch();
    const {page, actualSearch} = useSelector(state=>state.charactersReducer)
    

    useEffect(() => {
        dispatch(getCharactersThunk())
    }, [page,actualSearch]);

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={(e)=>dispatch(search(e.target.value))} value={actualSearch} />
    </div>
}

export default Filtros;