import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCharactersThunk, nextPage, search } from '../../actions/characters.actions';
import { useSelector } from '../../store/store';
import './filtros.css';

const Filtros = () => {
    const dispatch = useDispatch();
    const {page, actualSearch} = useSelector(state=>state.charactersReducer)
    

    useEffect(() => {
        dispatch(getCharactersThunk())
    }, [page,actualSearch]);

    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={(e)=>dispatch(search(e.target.value))} value={actualSearch} />
    </div>
}

export default Filtros;