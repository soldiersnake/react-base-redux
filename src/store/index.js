import { configureStore } from '@reduxjs/toolkit'
import contadorReducer from '../reducers/contadorReducer'
import { counterSlice } from '../reducers/contadorSlice'
import { pokemonSlice } from '../reducers/pokemonSlice'
// import thunk from 'redux-thunk'
import createSagaMiddleware from '@redux-saga/core'

import rootsaga from '../saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    // contador: contadorReducer,
    contador: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
  // middleware: [thunk]
  // middleware: [sagaMiddleware],
});

// sagaMiddleware.run(rootsaga);

export default store;