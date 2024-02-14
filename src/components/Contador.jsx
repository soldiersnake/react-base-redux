import { useSelector, useDispatch } from 'react-redux';
// import { reset, restar, restar5, sumar, sumar5 } from '../actions/contadorActions';
import { decrement, decrement5, increment, increment5, reset } from '../reducers/contadorSlice';

const Contador = () => {

    //acceder al estado
    // const state = useSelector((state) => state.contador);
    const state = useSelector((state)=> state.contador.contador)

    // Despachar Acciones
    const dispatch = useDispatch();
    
  return (
    <>
      <h2>Contador con Redux</h2>
      {/* <p>{state.contador}</p> */}
      <p>{state}</p>
      <nav>
        {/* <button onClick={() => dispatch(sumar5())}>+5</button>
        <button onClick={() => dispatch(sumar())}>+1</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(restar())}>-1</button>
        <button onClick={() => dispatch(restar5())}>-5</button> */}
        <button onClick={() => dispatch(increment5(5))}>+5</button>
        <button onClick={() => dispatch(increment())}>1</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(decrement5(5))}>-5</button>
      </nav>
    </>
  )
}

export default Contador
