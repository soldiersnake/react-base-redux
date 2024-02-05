import { DECREMENTAR, DECREMENTAR_5, INCREMENT, INCREMENT_5, RESET } from "../types";

//estado Inicial
const initialState = {
    contador: 0,
};

// reducer seria la funcion pura
export default function contadorReducer(state = initialState, action) {
    switch(action.type){
        case INCREMENT: {
            return{
                ...state,
                contador: state.contador + 1,
            }
        }
        case INCREMENT_5: {
            return{
                ...state,
                contador: state.contador + action.payload,
            }
        }
        case DECREMENTAR: {
            return{
                ...state,
                contador: state.contador - 1,
            }
        }
        case DECREMENTAR_5: {
            return{
                ...state,
                contador: state.contador - action.payload,
            }
        }
        case RESET: {
            return{
                ...state,
                contador: 0,
            }
        }
        default: {
            return state;
        }
    }
};