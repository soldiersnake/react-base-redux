//estado Inicial
const initialState = {
    contador: 0,
};

// reducer seria la funcion pura
export default function contadorReducer(state = initialState, action) {
    switch(action.type){
        case 'INCREMENTAR': {
            return{
                ...state,
                contador: state.contador + 1,
            }
        }
        case 'DECREMENTAR_5': {
            return{
                ...state,
                contador: state.contador + action.payload,
            }
        }
        case 'DECREMENTAR': {
            return{
                ...state,
                contador: state.contador - 1,
            }
        }
        case 'DECREMENTAR_5': {
            return{
                ...state,
                contador: state.contador - contador.payload,
            }
        }
        case 'RESET': {
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