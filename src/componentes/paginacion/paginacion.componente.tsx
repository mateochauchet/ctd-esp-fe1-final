import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { nextPage, previousPage } from '../../actions/characters.actions';
import { useSelector } from '../../store/store';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion:FC = () => {
    const dispatch = useDispatch();
    const state = useSelector(state=>state.charactersReducer)
    
    
    let isPrev = state.info?.prev? false:true;
    let isNext = state.info?.next? false:true;
   
    return <div className="paginacion">
        <button disabled={isPrev} className={"primary"} onClick={() => dispatch(previousPage())} >Anterior</button>
        <button disabled={isNext} className={"primary"} onClick={() => dispatch(nextPage())} >Siguiente</button>
    </div>
}

export default Paginacion;