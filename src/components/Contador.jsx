import { useSelector, useDispatch } from 'react-redux';
import { reset, restar, restar5, sumar, sumar5 } from '../actions/contadorActions';

const Contador = () => {

    //acceder al estado
    const state = useSelector((state) => state.contador);

    // Despachar Acciones
    const dispatch = useDispatch();
    console.log(state);
  return (
    <>
      <h2>Contador con Redux</h2>
      <p>{state.contador}</p>
      <nav>
        <button onClick={() => dispatch(sumar5())}>+5</button>
        <button onClick={() => dispatch(sumar())}>+1</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(restar())}>-1</button>
        <button onClick={() => dispatch(restar5())}>-5</button>
      </nav>
    </>
  )
}

export default Contador
